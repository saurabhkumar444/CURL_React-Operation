import logo from "./logo.svg";
import "./App.css";
import HomeScreen from "./component/HomeScreen";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import EmployeeUpdate from "./component/EmployeeUpdate";
import EmployeeAdd from "./component/EmployeeAdd";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<HomeScreen />}></Route>
          <Route path="/update" element={<EmployeeUpdate />}></Route>
          <Route path="/EmployeeAdd" element={<EmployeeAdd />}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
