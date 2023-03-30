// import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Home";
import Login from "./Login";
import Register from "./Register";
import Appheader from "./Appheader";
import { ToastContainer } from "react-toastify";

function App() {
  return (
    <div className="App">
      <ToastContainer theme="colored" position="top-center" autoClose="1000"></ToastContainer>
      <Appheader></Appheader>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />}></Route>
          <Route path="/Home" element={<Home />}></Route>
          <Route path="/Register" element={<Register />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
