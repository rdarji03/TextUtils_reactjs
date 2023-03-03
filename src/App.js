import "./App.css";
import Navbar from "./Components/Navbar";
import Textform from "./Components/Textform";
import About from "./Components/About";

import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.min.js";
import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";

function App() {
  const [c_mode, s_mode] = useState("light");
  const [btntext, setbttext] = useState("Enable Dark Mode");
  const [btnmode, setbtnmode] = useState("primary");
  const [fontclr, fontmode] = useState("black");
  const [bgcolor, setbgcolor] = useState("#f7f7f7");

  function changemode() {
    if (c_mode === "light") {
      s_mode("dark");
      setbttext("Enable Light Mode");
      setbtnmode("dark");
      document.body.style.background = "#0F3460";
      fontmode("white");
      setbgcolor("#014c5c")

    } else if (c_mode === "dark") {
      s_mode("light");
      setbttext("Enable Dark Mode");
      setbtnmode("primary");
      document.body.style.background = "#ffffff";
      fontmode("black");
      setbgcolor("#f7f7f7")
    }
  }
  return (
    <>
      <Router>
      <Navbar
                title={"Text Analyzer"}
                mode={c_mode}
                toggleMode={changemode}
                btn={btntext}
                textclr={fontclr}
              />
        <Routes>          
          <Route
            exact
            path="/"
            element={<Textform btnmode={btnmode} textclr={fontclr} />}
          ></Route>
          <Route exact path="/About" element={<About   backclr={bgcolor} textclr={fontclr}
 />}></Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
