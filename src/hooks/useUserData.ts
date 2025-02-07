import { useEffect, useState } from "react";
import { fetchUsers } from "../api/fetchUsers";

export function useUserData() {
  const [users, setUsers] = useState<{ id: number; name: string }[] | null>(
    null
  );
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchUsers().then((data) => {
      setUsers(data);
      setLoading(false);
    });
  }, []);

  return { loading, users };
}
