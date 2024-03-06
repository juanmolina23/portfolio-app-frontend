import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import NavMenu from "./components/NavMenu";
import Footer from "./components/Footer";
import NotFound from "./components/NotFound";

function App() {
  return (
    <>
      <NavMenu />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
