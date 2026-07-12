import { useState } from "react";
import "./Student.css";
import axios from "axios";
export default function Student() {
  const [student, setStudent] = useState({
    id: "",
    name: "",
    email: "",
    branch: "",
    phone: "",
    age: ""
  });

  const handleChange = (e) => {
    setStudent({
      ...student,
      [e.target.name]: e.target.value
    });
  };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//
//     console.log(student);
//     axios.post("http://localhost:8080/api/students", student);
//   };



const handleSubmit = async (e) => {
    e.preventDefault();

    try {

        const response = await axios.post(
//             "/api/students"
            "http://localhost:8080/students",
            student
        );

        alert("Student Registered Successfully!");

        console.log(response.data);

        handleReset();

    } catch (error) {

        console.error(error);

        alert("Registration Failed!");

    }
};


  const handleReset = () => {
    setStudent({
      id: "",
      name: "",
      email: "",
      branch: "",
      phone: "",
      age: ""
    });
  };

  return (
    <div className="container">

      <form className="card" onSubmit={handleSubmit}>

        <h1>Student Registration</h1>
        <p>React + Spring Boot + MySQL</p>

        <div className="grid">

          <div className="input-group">
            <label>Student ID</label>
            <input
              type="number"
              name="id"
              placeholder="Enter Student ID"
              value={student.id}
              onChange={handleChange}
            />
          </div>

          <div className="input-group">
            <label>Full Name</label>
            <input
              type="text"
              name="name"
              placeholder="Enter Full Name"
              value={student.name}
              onChange={handleChange}
            />
          </div>

          <div className="input-group">
            <label>Email</label>
            <input
              type="email"
              name="email"
              placeholder="Enter Email"
              value={student.email}
              onChange={handleChange}
            />
          </div>

          <div className="input-group">
            <label>Branch</label>
            <select
              name="branch"
              value={student.branch}
              onChange={handleChange}
            >
              <option value="">Select Branch</option>
              <option>CSE</option>
              <option>ECE</option>
              <option>EEE</option>
              <option>Mechanical</option>
              <option>Civil</option>
              <option>AI & DS</option>
            </select>
          </div>

          <div className="input-group">
            <label>Phone Number</label>
            <input
              type="tel"
              name="phone"
              placeholder="Enter Phone Number"
              value={student.phone}
              onChange={handleChange}
            />
          </div>

          <div className="input-group">
            <label>Age</label>
            <input
              type="number"
              name="age"
              placeholder="Enter Age"
              value={student.age}
              onChange={handleChange}
            />
          </div>

        </div>

        <div className="buttons">
          <button
            type="button"
            className="reset"
            onClick={handleReset}
          >
            Reset
          </button>

          <button
            type="submit"
            className="submit"
          >
            Register
          </button>
        </div>

      </form>

    </div>
  );
}

