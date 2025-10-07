import { Route, Routes } from "react-router-dom";
import About from "./components/About";
import Home from "./components/Home";
import Recommend from "./components/Recommend";
import ErrorPage from "./components/ErrorPage";

function Routing() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/recommend" element={<Recommend/>}/>
        <Route path="*" element={<ErrorPage/>}/>
      </Routes>
    </div>
  );
}

export default Routing;
