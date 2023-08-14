import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import NavMenu from "./components/NavMenu";
import About from "./components/About";
import Login from "./components/Login";
import Footer from "./components/Footer";
import NotFound from "./components/NotFound";
import Signup from "./components/Signup";

function App() {
  return (
    <>
      <NavMenu />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/login" element={<Login />} />
        <Route path="/sign-up" element={<Signup />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
