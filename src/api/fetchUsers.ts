export async function fetchUsers(): Promise<{ id: number; name: string }[]> {
  // 실제 서버 호출이라고 가정. 테스트에서는 MSW가 가로챌 예정
  const res = await fetch("/api/users");
  return await res.json();
}
