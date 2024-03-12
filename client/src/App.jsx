import Nabvar from "./components/navbar.component";
import { Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <Routes>
      <Route exact path="/" element={<Nabvar />}>
        <Route exact path="/sigin" element={<h1>sig in</h1>} />
        <Route exact path="/sigun" element={<h1>sig un</h1>} />
      </Route>
    </Routes>
  );
};

export default App;
