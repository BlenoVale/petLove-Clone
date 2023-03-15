import { UserProvider } from "./context/UserContext";
import { Router } from "./router";

const App = () => {
  return (
    <UserProvider>
      <Router />
    </UserProvider>
  );
}

export default App;
