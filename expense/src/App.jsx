import Expense from "../src/components/ExpenseForm.jsx";
import Login from "../src/components/Login.jsx";
import Sign from "../src/components/Signup.jsx";
import Dash from "../src/components/Dashboard.jsx";

import {BrowserRouter as Router, Routes, Route} from "react-router-dom";


function App() {

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/dashboard" element={<Dash />}/>
        <Route path="/register" element={<Sign />} />
        <Route path="/expense" element={<Expense />}/>
      </Routes>
    </Router>
  )
}

export default App;
