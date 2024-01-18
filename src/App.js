import { BrowserRouter, Route, Routes } from "react-router-dom"
import Signup from "./components/signup";
import Login from "./components/login";
import Dashboard from "./components/dashboard";
import Home from "./components/home";
import Employee from "./components/employee";
import AddEmployee from "./components/addemployee";
import EditEmployee from "./components/editemployee";
import Profile from "./components/profile";
import ProtectedRoute from "./components/ProtectedRoute";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route path="/" element={<ProtectedRoute Component={Dashboard} />}>
            <Route path="" element={<Home />}></Route>
            <Route path="/employee" element={<ProtectedRoute Component={Employee} />}></Route>
            <Route path="/create" element={<ProtectedRoute Component={AddEmployee} />}></Route>
            <Route path="/employeeedit/:id" element={<ProtectedRoute Component={EditEmployee} />}></Route>
            <Route path="/profile" element={<ProtectedRoute Component={Profile} />}></Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
