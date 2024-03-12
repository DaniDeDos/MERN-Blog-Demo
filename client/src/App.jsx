import { Routes, Route } from "react-router-dom";
import Nabvar from "./components/navbar.component";
import UserAuthForm from "./pages/userAuthForm.page";

const App = () => {
  return (
    <Routes>
      <Route exact path="/" element={<Nabvar />}>
        <Route
          exact
          path="/signin"
          element={<UserAuthForm type={"sign-in"} />}
        />
        <Route
          exact
          path="/signup"
          element={<UserAuthForm type={"sign-up"} />}
        />
      </Route>
    </Routes>
  );
};

export default App;
