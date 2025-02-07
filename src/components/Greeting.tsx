interface Props {
  name?: string;
  isVIP?: boolean;
}

export function Greeting({ name = "Guest", isVIP = false }: Props) {
  if (isVIP) {
    return <h1 data-testid="greeting">Welcome, VIP {name}!</h1>;
  }
  return <h1 data-testid="greeting">Hello, {name}!</h1>;
}
