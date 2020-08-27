import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function Student() {
  const [studentState, setStudentState] = useState([]);

  useEffect(() => {
    let studentState = [
      { id: 1, firstname: "Stone", lastname: "cold", major: "wwf" },
      { id: 2, firstname: "Stone", lastname: "cold", major: "wwf" },
      { id: 3, firstname: "Stone", lastname: "cold", major: "wwf" }
    ];

    setStudentState(
      studentState.map(d => {
        return {
          select: false,
          id: d.id,
          firstname: d.firstname,
          lastname: d.lastname,
          major: d.major
        };
      })
    );
  }, []);

  return (
    <div className="container">
      <Link to="/add">
        <button
          type="button"
          className="btn btn-primary btn-sm float-right my-3"
        >
          Add
        </button>
      </Link>
      <table className="table table-bordered">
        <thead>
          <tr>
            <th scope="col">
              <input
                type="checkbox"
                onChange={e => {
                  let checked = e.target.checked;
                  setStudentState(
                    studentState.map(d => {
                      d.select = checked;
                      return d;
                    })
                  );
                }}
              ></input>
            </th>
            <th scope="col">First</th>
            <th scope="col">Last</th>
            <th scope="col">Handle</th>
          </tr>
        </thead>
        <tbody>
          {studentState.map((d, i) => (
            <tr key={d.id}>
              <th scope="row">
                <input
                  onChange={event => {
                    let checked = event.target.checked;
                    setStudentState(
                      studentState.map(data => {
                        if (d.id === data.id) {
                          data.select = checked;
                        }
                        return data;
                      })
                    );
                  }}
                  type="checkbox"
                  checked={d.select}
                ></input>
              </th>
              <td>{d.firstname}</td>
              <td>{d.lastname}</td>
              <td>{d.major}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Student;
