import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link, useParams } from "react-router-dom";

export default function Home() {
  const [users, setUsers] = useState([]);

  const { id } = useParams();

  useEffect(() => {
    loadUsers();
  }, []);

  const loadUsers = async () => {
    const result = await axios.get("http://localhost:8080/usersa");
    setUsers(result.data);
  };

  const deleteUser = async (id) => {
    await axios.delete(`http://localhost:8080/user/${id}`);
    loadUsers();
  };

  return (
    <div  style={{backgroundImage: 'url(https://i.postimg.cc/pTGKnyy0/1.jpg)'}}>
    <div >
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
         ELECTRICIAN HIRING SYSTEM
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <Link className="btn btn-outline-light" to="/addjob">
          Add JOB
        </Link>
        <Link className="btn btn-outline-light" to="/">
          LOG OUT
        </Link>
      </div>
    </nav>
    <div className="container">
      <div className="py-4">
        <table className="table border shadow">
          <thead>
            <tr>
              <th scope="col">S.N</th>
              <th scope="col">JOB ID</th>
              <th scope="col">JOB Name</th>
              <th scope="col">JOB Location</th>
              <th scope="col">Action</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, index) => (
              <tr>
                <th scope="row" key={index}>
                  {index + 1}
                </th>
                <td style={{color:"darkgoldenrod"}}>{user.name}</td>
                <td style={{color:"darkgoldenrod"}}>{user.username}</td>
                <td style={{color:"darkgoldenrod"}}>{user.email}</td>
                <td style={{color:"darkgoldenrod"}}> 
                  <Link
                    className="btn btn-success"
                    to={`/viewjob/${user.id}`}
                  >
                    View JOB
                  </Link>
                  <Link
                    className="btn btn-light"
                    to={`/editjob/${user.id}`}
                  >
                    Edit JOB
                  </Link>
                  <button
                    className="btn btn-danger"
                    onClick={() => deleteUser(user.id)}
                  >
                    Delete JOB
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
    </div>
    </div>
  );
}
