import { Route, Routes } from "react-router-dom";
import About from "./components/About";
import Home from "./components/Home";
import Recommend from "./components/Recommend";
import ErrorPage from "./components/ErrorPage";
import Landing from "./components/Landing";

function Routing() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/home" element={<Home />} />
        <Route path="/top-50" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/recommend" element={<Recommend />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </div>
  );
}

export default Routing;
