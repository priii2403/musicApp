import logo from "./logo.svg";
import "./App.css";
import HomeScreen from "./Screens/HomeScreen/Index";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" exact element={<HomeScreen />} />
      </Routes>
    </Router>
  );
}

export default App;
