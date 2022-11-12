import React, { useState } from "react";
import { Button, Form, Table } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import DemoEmployees from "./Emplyees";
import { Link, useNavigate } from "react-router-dom";
import { v4 as uuid } from "uuid";

function EmployeeAdd() {
  const [EmployeeName, setEmployeeName] = useState("");
  const [EmployeeAge, setEmployeeAge] = useState("");
  let EmployeeHis = useNavigate();

  const AddEmployeeDetails = (data) => {
    data.preventDefault();
    const id = uuid();
    let EmployeeId = id.slice(0, 8);

    DemoEmployees.push({
      id: EmployeeId,
      name: EmployeeName,
      age: EmployeeAge,
    });

    EmployeeHis("/");
  };

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
            placeholder="Enter Employee Name"
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
            placeholder="Enter Employee Age"
            onChange={(e) => {
              setEmployeeAge(e.target.value);
            }}
          ></Form.Control>
        </Form.Group>
        <Button
          onClick={(e) => {
            AddEmployeeDetails(e);
          }}
          type="submit"
        >
          Add Employee
        </Button>
      </Form>
    </div>
  );
}

export default EmployeeAdd;
