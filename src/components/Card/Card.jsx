import React from "react";
import "./Card.scss";
import { useState } from "react";
import Counter from "../Counter/Counter";

const Card = (props) => {
  const { teamArr } = props;
  const [newArr, setNewArr] = useState(teamArr);

  const addNewEmployee = () => {
    const newEmployeeName = document.getElementById("newEmployeeName");
    const newEmployeeRole = document.getElementById("newEmployeeRole");
    const employee = {
      id: 11,
      name: newEmployeeName.value,
      role: newEmployeeRole.value,
    };
    newEmployeeName.value = "";
    newEmployeeRole.value = "";
    setNewArr([...newArr, employee]);
  };

  const searchEmployee = () => {
    const searchEmployee = document.getElementById("searchEmployees");
    if(searchEmployee.value===""){
      setNewArr(teamArr);
    }
    else{
      const matchingEmployee = newArr.filter((team) => (
        team.name.includes(searchEmployee.value)
      ));
      setNewArr(matchingEmployee);
    }
  };

  const cardListJSX = newArr.map((team, index) => (
    <div key={index} className="cards_content">
      <h3 className="card_content">Name: {team.name}</h3>
      <h3 className="card_content">Role: {team.role}</h3>
      <Counter />
    </div>
  ));

  return (
    <div>
      <input onInput={searchEmployee} id="searchEmployees" type="text" />
      <div>
        <div className="newEmployee">
          <h2>New Employee Name</h2>
          <input id="newEmployeeName" type="text" />
        </div>
        <div className="newEmployee">
          <h2>New Employee Role</h2>
          <input id="newEmployeeRole" type="text" />
        </div>
        <div onClick={addNewEmployee}>
          <button>Add new Employee</button>
        </div>
      </div>
      <div className="cards">{cardListJSX}</div>
    </div>
  );
};

export default Card;
