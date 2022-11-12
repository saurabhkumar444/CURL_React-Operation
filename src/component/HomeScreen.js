import React from "react";
import { Button, Table } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import DemoEmployees from "./Emplyees";
import { Link, useNavigate } from "react-router-dom";

function HomeScreen() {
  const EmployeesHis = useNavigate();
  const EmployeeDelete = (id) => {
    const index = DemoEmployees.map(function (data) {
      return data.id;
    }).indexOf(id);

    console.log("index=>>", index);
    DemoEmployees.splice(index, 1);
    EmployeesHis("/");
  };

  const EmployeeUpdate = (id, name, age) => {
    localStorage.setItem("name", name);
    localStorage.setItem("age", age);
    localStorage.setItem("id", id);
  };

  return (
    <div style={{ margin: "10rem" }}>
      <div style={{ backgroundColor: "#fefefe" }}>
        <Table striped bordered hover size="sm">
          <thead>
            <tr>
              <th>Name</th>
              <th>age</th>
              <th>Update/Delete</th>
            </tr>
          </thead>
          <tbody>
            {DemoEmployees && DemoEmployees.length > 0
              ? DemoEmployees.map((item, index) => {
                  return (
                    <tr>
                      <td>{item.name}</td>
                      <td>{item.age}</td>
                      <td>
                        <Link to={"/update"}>
                          <Button
                            style={{ marginRight: "5px" }}
                            onClick={() => {
                              EmployeeUpdate(item.id, item.name, item.age);
                            }}
                          >
                            Update
                          </Button>
                        </Link>
                        <Button
                          onClick={() => {
                            EmployeeDelete(item.id);
                          }}
                        >
                          Delete
                        </Button>
                      </td>
                    </tr>
                  );
                })
              : "NO data"}
          </tbody>
        </Table>
        <Link to={"/EmployeeAdd"}>
          <Button> Add Employee </Button>
        </Link>
      </div>
    </div>
  );
}

export default HomeScreen;
