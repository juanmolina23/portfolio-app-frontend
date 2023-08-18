import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import NavMenu from "./components/NavMenu";
import Login from "./components/Login";
import Footer from "./components/Footer";
import NotFound from "./components/NotFound";
import Signup from "./components/Signup";
//import PrivateRoute from "./components/PrivateRoute";
import axios from "axios";
import Projects from "./components/Projects";
import { useAppDispatch } from "./store/store";
import { addAuthUser } from "./store/features/userSlice";
import Logout from "./components/Logout";
import Resume from "./components/Resume";
import ComplexApp from "./components/ComplexApp";
import ExpensifyApp from "./components/ExpensifyApp";
import Contact from "./components/Contact";

function App() {
  checkAuth();

  return (
    <>
      <NavMenu />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/projects/complex-app" element={<ComplexApp />} />
        <Route path="/projects/expensify-app" element={<ExpensifyApp />} />
        <Route path="/resume" element={<Resume />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<Login />} />
        <Route path="/logout" element={<Logout />} />
        <Route path="/sign-up" element={<Signup />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </>
  );
}

async function checkAuth() {
  const dispatch = useAppDispatch();
  try {
    const data = (await axios.get("/")).data;
    if (data != "") {
      dispatch(addAuthUser(data));
    }
  } catch (error) {
    console.log(error);
  }
}

export default App;
