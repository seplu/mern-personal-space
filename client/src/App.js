import Navbar from "./components/Navbar";
import NavigationBar from "./components/NavigationBar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css";

function App() {
  return (
    <Router>
      <div className="App">
        <NavigationBar />
      </div>
    </Router>
  );
}

export default App;
