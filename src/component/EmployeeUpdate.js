import React, { useState, useEffect } from "react";
import { Button, Form, Table } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import DemoEmployees from "./Emplyees";
import { Link, useNavigate } from "react-router-dom";
import { v4 as uuid } from "uuid";

function EmployeeUpdate() {
  const [EmployeeName, setEmployeeName] = useState("");
  const [EmployeeAge, setEmployeeAge] = useState("");
  const [EmployeeId, setEmployeeId] = useState("");
  let EmployeeHis = useNavigate();

  let index = DemoEmployees.map(function (data) {
    return data.id;
  }).indexOf(EmployeeId);

  console.log("index==>>>", index);

  const UpdateEmployeeDetails = (id) => {
    id.preventDefault();
    let Empolyees = DemoEmployees[index];
    Empolyees.name = EmployeeName;
    Empolyees.age = EmployeeAge;
    console.log("Empolyees==>>>", Empolyees);
    EmployeeHis("/");
  };

  useEffect(() => {
    setEmployeeName(localStorage.getItem("name"));
    setEmployeeAge(localStorage.getItem("age"));
    setEmployeeId(localStorage.getItem("id"));
  }, []);

  return (
    <div>
      <Form className="d-grid" style={{ margin: "10rem" }}>
        <Form.Group
          className=""
          controlId="formName"
          style={{ marginBottom: "5px" }}
        >
          <Form.Control
            type="text"
            value={EmployeeName}
            // placeholder="Enter Employee Name"
            onChange={(e) => {
              setEmployeeName(e.target.value);
            }}
          ></Form.Control>
        </Form.Group>
        <Form.Group
          className=""
          controlId="formAge"
          style={{ marginBottom: "5px" }}
        >
          <Form.Control
            type="number"
            value={EmployeeAge}
            // placeholder="Enter Employee Age"
            onChange={(e) => {
              setEmployeeAge(e.target.value);
            }}
          ></Form.Control>
        </Form.Group>
        <Button
          onClick={(e) => {
            UpdateEmployeeDetails(e);
          }}
          type="submit"
        >
          Update Employee
        </Button>
      </Form>
    </div>
  );
}

export default EmployeeUpdate;
