import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function Create() {
  const [value, setValue] = useState({ name: "", age: "", city: "" });
  const navigate = useNavigate();
  //   const [name, setName] = useState("");
  //   let UpdateName = (e) => {
  //     setName(console.log(e.target.value));
  //   };
  //   const [age, setAge] = useState();
  //   let UpdateAge = (e) => {
  //     setAge(console.log(e.target.value));
  //   };
  //   const [city, setCity] = useState("");
  //   let UpdateCity = (e) => {
  //     setCity(console.log(e.target.value));
  //   };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      // .post("http://localhost:5000/users", value)
      .post("https://64eb3675e51e1e82c5771731.mockapi.io/users", value)
      .then(res=>{
        console.log('data', res);
        navigate('/');
        console.log(value)
      })
      .catch((err) => console.log(err));
  };

console.log(value);
  return (

    <div>
      <div>
        <form onSubmit={handleSubmit}> 
          <h2>Add student</h2>
          <div className="mb-2">
            <label htmlFor="">Name</label>
            <input
              type="text"
              placeholder="Enter Name"
              className="form-control"
              onChange={(e) =>
                setValue({ ...value, name: e.target.value })
              }
              //   onChange={UpdateValue}
            ></input>
          </div>
          <div className="mb-2">
            <label htmlFor="">Age</label>
            <input
              type="number"
              placeholder="Enter Age"
              className="form-control"
              onChange={(e) =>
                setValue({ ...value, age: e.target.value })
              }

              //   onChange={UpdateValue}
            ></input>
          </div>
          <div className="mb-2">
            <label htmlFor="">City</label>
            <input
              type="text"
              placeholder="Enter City"
              className="form-control"
              //   onChange={UpdateValue}
              onChange={(e) =>
                setValue({ ...value, city: e.target.value })
              }
            ></input>
          </div>
          <button className="btn btn-success">Submit</button>
        </form>
      </div>
    </div>
  );
}

export default Create;
