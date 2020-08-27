import React from "react";
import axios from "axios";
import { withRouter } from "react-router-dom";

function AddStudent(props) {
  const onSave = e => {
    let firstname = e.target[0].value;
    let lastname = e.target[1].value;
    let major = e.target[2].value;
    let data = {
      firstname,
      lastname,
      major
    };
    addStudent(data);
  };

  const addStudent = data => {
    axios
      .post("http://localhost:8080/students", data)
      .then(d => {
        console.log(d);
        props.history.push("/");
      })
      .catch(er => alert(er));
  };
  return (
    <div className="container my-3">
      <form
        onSubmit={e => {
          e.preventDefault();
          onSave(e);
        }}
      >
        <div className="form-group">
          <label>First Name</label>
          <input type="text" className="form-control" required />
        </div>
        <div className="form-group">
          <label>Last Name</label>
          <input type="text" className="form-control" required />
        </div>
        <div className="form-group">
          <label>Major</label>
          <input type="text" className="form-control" required />
        </div>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
}

export default withRouter(AddStudent);
