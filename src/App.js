import { Route, Routes } from "react-router-dom";
import "./App.css";
import Blog from "./components/Blog/Blog";
import Dashboard from "./components/Dashboard/Dashboard";
import MyOrder from "./components/Dashboard/MyOrder";
import Home from "./components/Home/Home";
import Login from "./components/Login/Login";
import SignUp from "./components/Login/SignUp";
import Footer from "./components/Shared/Footer";
import Navbar from "./components/Shared/Navbar";

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="blog" element={<Blog />} />
        <Route path="dashboard" element={<Dashboard />} />
        {/* <Route path="myorder" element={<MyOrder />} /> */}
        <Route path="login" element={<Login />} />
        <Route path="signup" element={<SignUp />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
