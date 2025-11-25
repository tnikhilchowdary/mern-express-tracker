import Expense from "../src/components/ExpenseForm.jsx";
import Login from "../src/components/Login.jsx";
import Sign from "../src/components/Signup.jsx";
import Home from "../src/components/Home.jsx";


import {BrowserRouter as Router, Routes, Route} from "react-router-dom";


function App() {

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Sign />} />
        <Route path="/expense" element={<Expense />}/>
        <Route path="/home" element={<Home />} />
      </Routes>
    </Router>
  )
}

export default App;
