import { delay, http, HttpResponse } from "msw";
import { setupServer } from "msw/node";
import { usersFixture } from "../__fixtures__/users";

const server = setupServer(
  http.get("/api/users", async () => {
    return HttpResponse.json(usersFixture);
  })
);

export { server };
