import React from "react";
import "./home.css";
import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";

function Home() {
  const [student, setStudent] = useState([]);
  const params = useParams();
  const { id } = params;

  useEffect(() => {
    // const API_URL = process.env.REACT_APP_API_URL || "http://localhost:5000/";

    axios
      .get(`${"https://64eb3675e51e1e82c5771731.mockapi.io/users"}`)
      .then((res) => {
        if (Array.isArray(res.data)) {
          setStudent(res.data);
          console.log(res.data);
        } else {
          setStudent([]);
          console.log("Invalid data format");
        }
      })
      .catch((err) => console.log(err));
  }, []);

  const handleDelete = async (id) => {
    try {
      // await axios.delete("http://localhost:5000/users/" + id);
      const apiUrl = "http://64eb3675e51e1e82c5771731.mockapi.io/users";
      await axios.delete(`${apiUrl}/${id}`);
      setStudent(student.filter((data) => data.id !== id));
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <main className="table">
      <section className="table_header">
        <div className="head"> Students Management
        <Link to="/create" className="staus2">
          create+
        </Link>
        </div>
      </section>
      <section className="table_body">
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Age</th>
              <th>City</th>
              <th>Edit</th>
              <th>View</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {student.map((data) => (
              <tr key={data.id}>
                {console.log(data)}
                <td>{data.id}</td>
                <td>{data.name}</td>
                <td>{data.age}</td>
                <td>{data.city}</td>
                <td>
                  <Link to={`/edit/${data.id}`} className="staus">
                    Edit
                  </Link>
                </td>
                <td>
                  <Link to={`/view/${data.id}`} className="staus view">
                    view
                  </Link>
                </td>
                <td>
                  <p className="staus1" onClick={(_e) => handleDelete(data.id)}>
                    Delete
                  </p>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

      </section>
    </main>
  );
}

export default Home;
