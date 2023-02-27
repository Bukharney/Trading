import { Route, Routes, BrowserRouter } from "react-router-dom";
import "./App.css";
import ThemeContext from "./context/ThemeContext";
import StockContext from "./context/StockContext";
import { useState } from "react";
import Home from "./pages/Home";
import Dashboard from "./component/Dashboard";

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [stock, setStock] = useState("FB");
  return (
    <ThemeContext.Provider value={{ darkMode, setDarkMode }}>
      <StockContext.Provider value={{ stock, setStock }}>
        <Home />
      </StockContext.Provider>
    </ThemeContext.Provider>
  );
}

export default App;
