import axios from "axios";
import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
// import "./edit.css";

function Edit(props) {
  const [value, setValue] = useState({ name: "", age: "", city: "" });
  const navigate = useNavigate();
  const params = useParams();
  const { myid } = params;
  console.log("Edit props", params);

  const handleSubmit = (e) => {
    e.preventDefault();
    const apiUrl = "https://64eb3675e51e1e82c5771731.mockapi.io/users";
    axios
      .put(`${apiUrl}/${myid}`, value)
      .then((res) => {
        setValue(res.data);
        console.log("data", res);
        navigate("/");
        console.log(value);
      })
    .catch((err) => console.log(err));
  };

  return (
    <div className="">
      <di className="wrapper">
        <form onSubmit={handleSubmit}>
          <h2 className="head">Edit Student</h2>
          <div className="mb-2">
            <label>Name</label>
            <input
              type="text"
              placeholder="Enter Name"
              className="form-control"
              onChange={(e) => setValue({ ...value, name: e.target.value })}
            ></input>
          </div>
          <div className="mb2">
            <label>Age</label>
            <input
              type="number"
              placeholder="Enter Age"
              className="form-control"
              onChange={(e) => setValue({ ...value, age: e.target.value })}
            ></input>
          </div>
          <div className="mb-2">
            <label>City</label>
            <input
              type="text"
              placeholder="Enter City"
              className="form-control"
              onChange={(e) => setValue({ ...value, city: e.target.value })}
            ></input>
          </div>
          <button className="btn btn-success" type="submit">
            Update
          </button>
        </form>
      </di>
    </div>
  );
}

export default Edit;
