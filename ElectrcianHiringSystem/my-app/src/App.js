import logo from './logo.svg';
import './App.css';

import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from './layout/Navbar';
import Home from './pages/Home';
import Addjob from './JOBP/Addjob';
import Editjob from './JOBP/Editjob';
import Viewjob from './JOBP/Viewjob';

function App() {
  return (
    <div className="App">
      <Router>
       <Routes>
         <Route exact path="/" element={<Navbar />} />
         <Route exact path="/Home" element={<Home />} />
         <Route exact path="/addjob" element={<Addjob />} />
         <Route exact path="/editjob/:id" element={<Editjob />} />
         <Route exact path="/viewjob/:id" element={<Viewjob/>} />
         
       </Routes>

      </Router>
    </div>
  );
}

export default App;
