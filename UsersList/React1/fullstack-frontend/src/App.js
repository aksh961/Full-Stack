import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./layout/Navbar";
import Home from "./pages/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AddUser from "./users/AddUser";
import EditUser from "./users/EditUser";
import ViewUser from "./users/ViewUser";
import Hp from "./MainPage/Hp";
import Dashboard from "./Admin/Dashboard";

function App() {
  return (
    <div className="App">
      <Router>
       

        <Routes>
        <Route exact path="/" element={<Hp />} />
          <Route exact path="/Home" element={<Home />} />
          <Route exact path="/adduser" element={<AddUser />} />
          <Route exact path="/edituser/:id" element={<EditUser />} />
          <Route exact path="/viewuser/:id" element={<ViewUser />} />
          <Route exact path="/viewuser/:id" element={<ViewUser />} />
          <Route exact path="/viewuser/:id" element={<ViewUser />} />
          <Route exact path="/Dashboard" element={<Dashboard />} />
          
        </Routes>
      </Router>
    </div>
  );
}

export default App;
