import axios from "axios";
import React, { useState, useEffect } from "react";
import { useNavigate, useParams, Link } from "react-router-dom";

function View() {
  const [user, setUser] = useState([]);
  const navigate = useNavigate();
  const params = useParams();
  const { id } = params;

    const apiUrl = "https://64eb3675e51e1e82c5771731.mockapi.io/users";
useEffect(()=>{
    axios.get(`${apiUrl}/${+id}`)
    .then(res =>{console.log(res.data)
    setUser(res.data)})
    .catch(err=>console.log(err))
},[])

  return (
    <div color="d-flex vh-100 big-primary justify-content-center align-items-center">
        <div className="w-100 bg-white rounded p-3 table">
            <h2>Student Detailes</h2>
            <h4>ID : {user.id}</h4>
            <h4> Name : {user.name}</h4>
            <h4>Age : {user.age}</h4>
            <h4>City : {user.city}</h4>
        </div>
        <Link to="/">
          <button className="btn btn-primary me-2">Go Back</button>
        </Link>
    </div>
  );
}

export default View;
