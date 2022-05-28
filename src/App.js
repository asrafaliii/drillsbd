import { Route, Routes } from "react-router-dom";
import "./App.css";
import Blog from "./components/Blog/Blog";
import AddReview from "./components/Dashboard/AddReview";
import AddTools from "./components/Dashboard/AddTools";
import Dashboard from "./components/Dashboard/Dashboard";
import MyOrder from "./components/Dashboard/MyOrder";
import MyProfile from "./components/Dashboard/MyProfile";
import BuyNow from "./components/Home/BuyNow";
import Home from "./components/Home/Home";
import Login from "./components/Login/Login";
import RequireAuth from "./components/Login/RequireAuth";
import SignUp from "./components/Login/SignUp";
import MyPortfolio from "./components/MyPortfolio/MyPortfolio";
import Footer from "./components/Shared/Footer";
import Navbar from "./components/Shared/Navbar";

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="buynow/:productId"
          element={
            <RequireAuth>
              <BuyNow />
            </RequireAuth>
          }
        />
        <Route path="blog" element={<Blog />} />
        <Route path="blog" element={<MyPortfolio />} />
        <Route path="dashboard" element={<Dashboard />}>
          <Route index element={<MyOrder />} />
          <Route path="addreview" element={<AddReview />} />
          <Route path="myprofile" element={<MyProfile />} />
          <Route path="addtools" element={<AddTools />} />
        </Route>
        <Route path="login" element={<Login />} />
        <Route path="signup" element={<SignUp />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
