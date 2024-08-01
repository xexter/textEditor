import "./App.css";
import React, { useState } from "react";
import Footer from "./Components/Footer.jsx";
import Navbar from "./Components/Navbar.jsx";
import About from "./Components/About.jsx";
import TextForm from "./Components/TextForm.jsx";
import Alert from "./Components/Alert.jsx";
import Contact from "./Components/Contact.jsx";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  const [mode, setMode] = useState("light");
  /* ---------Alert into website----------- */
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    /* Object created to set alert : */
    setAlert({
      msg: message,
      type: type,
    });

    /* Auto dismissing the alert after some time : */
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  };

  const togglemode = () => {
    if (mode === "dark") {
      setMode("light");
      document.body.style.background =
        "linear-gradient(45deg, rgb(241, 241, 241) 50%, rgb(158, 232, 255) 50%)";
      showAlert("Light mode has been enabled", "success");
      // document.title = "TextUtils - Light Mode";
    } else {
      setMode("dark");
      document.body.style.background =
        "linear-gradient(45deg, rgb(92, 92, 92) 50%, rgb(27, 27, 27) 50%)";
      showAlert("Dark mode has been enabled", "success");
    }
  };

  return (
    <>
      <Router>
        <Navbar
          title="TextUtils"
          about="About Us"
          mode={mode}
          togglemode={togglemode}
        />
        <Alert alert={alert} />
        <Routes>
          <Route path="/about" element={<About mode={mode} />} />
          <Route path="/contact" element={<Contact mode={mode} />} />
          <Route
            path="/"
            element={
              <TextForm
                heading="TextUtils - Word Counter, Character Counter, Remove Extra Space"
                summaryHead="Summary Of Your Text"
                mode={mode}
                showAlert={showAlert}
              />
            }
          />
        </Routes>
        <Footer creatername="Madhav" />
      </Router>
    </>
  );
}

export default App;