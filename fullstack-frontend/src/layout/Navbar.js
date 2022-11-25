import React from "react";
import { Link } from "react-router-dom";


export default function Navbar() {
  return (
    <div>
     <p> Employee Managemnt SYstem</p> 
     <Link type="button" to="/Home">Home</Link>
    </div>
  );
}
