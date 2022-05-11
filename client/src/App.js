import "./styles/style.scss";
import SignUp from "./pages/sign-up";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import UserInfo from "./pages/user-info";
import Navbar from "./components/navbar";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<SignUp />}></Route>
        <Route path="/user" element={<UserInfo />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
