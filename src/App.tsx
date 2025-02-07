import { Greeting } from "./components/Greeting";
import { UserList } from "./components/UserList";

function App() {
  return (
    <div>
      <h1>My Test App</h1>
      <Greeting name="Alice" />
      <Greeting isVIP />
      <UserList />
    </div>
  );
}

export default App;
