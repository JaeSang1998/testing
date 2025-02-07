import { render, screen, waitFor } from "@testing-library/react";
import "@testing-library/jest-dom";
import { vi } from "vitest";
import { UserList } from "../src/components/UserList";
import * as fetchUsersModule from "../src/api/fetchUsers";

describe("UserList Component", () => {
  test("displays loading initially", () => {
    render(<UserList />);
    expect(screen.getByTestId("loading")).toBeInTheDocument();
  });

  test("displays users after fetch", async () => {
    render(<UserList />);

    await waitFor(() => {
      expect(screen.queryByTestId("loading")).not.toBeInTheDocument();
    });

    expect(screen.getByTestId("user-list")).toBeInTheDocument();

    expect(screen.getByText("Alice")).toBeInTheDocument();
    expect(screen.getByText("Bob")).toBeInTheDocument();
  });

  test('displays "No Users Found" if users array is empty', async () => {
    const fetchUsersMock = vi.spyOn(fetchUsersModule, "fetchUsers");
    fetchUsersMock.mockResolvedValueOnce([]);

    render(<UserList />);
    await waitFor(() => {
      expect(screen.queryByTestId("loading")).not.toBeInTheDocument();
    });
    expect(screen.getByTestId("no-users")).toBeInTheDocument();

    // Mock 복원
    fetchUsersMock.mockRestore();
  });
});
