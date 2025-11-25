import Expense from "../src/components/ExpenseForm.jsx";
import Login from "../src/components/Login.jsx";
import Sign from "../src/components/Signup.jsx";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";

function App() {

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Sign />} />
        <Route path="/expense" element={<Expense />}/>
      </Routes>
    </Router>
  )
}

export default App;
