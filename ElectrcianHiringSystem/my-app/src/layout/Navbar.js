import React, { Fragment } from "react";
import { Link } from "react-router-dom";


export default function Navbar() {
  return (
    <div style={{backgroundImage:'url(https://i.postimg.cc/pTGKnyy0/1.jpg)'}}>
    <div>
     <p> Electrician Hiring SYstem</p> 
     <Link type="button" className=" btn btn-dark"to="/Home">JOB POSTER</Link><br  />
     <Link type="button" className=" btn btn-dark"to="/Home">ADMIN</Link> <br />
     <Link type="button" className=" btn btn-dark"to="/Home">JOB SEEKER</Link>

    </div>
    </div>
  );
} 
