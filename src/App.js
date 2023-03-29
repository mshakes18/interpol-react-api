import { Route, Routes } from "react-router-dom";
import Homepage from "./components/Homepage";
import UserPage from "./components/UserPage";

function App() {
  return (
    <Routes>
      <Route element={<Homepage />} path="/" />;
      <Route element={<UserPage />} path="/users/:wantedid" />;
    </Routes>
  );
}

export default App;
