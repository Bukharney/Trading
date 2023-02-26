import { Route, Routes, BrowserRouter } from "react-router-dom";
import "./App.css";
import ThemeContext from "./context/ThemeContext";
import { useState } from "react";
import Home from "./pages/Home";
import Dashboard from "./component/Dashboard";

function App() {
  const [darkMode, setDarkMode] = useState(false);
  return (
    <ThemeContext.Provider value={{ darkMode, setDarkMode }}>
      <Home />
    </ThemeContext.Provider>
  );
}

export default App;
