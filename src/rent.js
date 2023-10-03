import React from 'react'

function rent() {
  return (
    <div>
          <div className="">
      {/* <div className="abc"> */}
      <div className="table_header ">
        <h3>student management System</h3>
        <div className="">
          <Link to="/create" className="">
            create+
          </Link>
        </div>
        <table className="main-table">
          <thead className="">
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Age</th>
              <th>City</th>
              <th>Edit</th>
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
                  <Link to={`/edit/${data.id}`} className="">
                    Update
                  </Link>
                  {/* <Link to="/edit" className="nbtn btn-primary">
                    Update
                  </Link> */}
                  <button className="" onClick={(_e) => handleDelete(data.id)}>
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>

    </div>
  )
}

export default rent
