import { useUserData } from "../hooks/useUserData";

export function UserList() {
  const { loading, users } = useUserData();

  if (loading) return <div data-testid="loading">Loading...</div>;
  if (!users || users.length === 0) {
    return <div data-testid="no-users">No Users Found</div>;
  }

  return (
    <ul data-testid="user-list">
      {users.map((u) => (
        <li key={u.id}>{u.name}</li>
      ))}
    </ul>
  );
}
