import React from "react";
import "./Card.scss";
import { useState } from "react";
import Counter from "../Counter/Counter";
import NewEmployeeForm from "../NewEmployeeForm/NewEmployeeForm";
import TickerButton from "../TickerButton/TickerButton";
import SearchBar from "../SearchBar/SearchBar";

const Card = (props) => {
  const { teamArr } = props;
  const [newArr, setNewArr] = useState(teamArr);
  const [showNewEmployeeForm, setShowNewEmployeeForm] = useState(false);

  const toggleNewEmployeeForm = ()=>{
    setShowNewEmployeeForm(!showNewEmployeeForm);
  }

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

  const searchCards = () => {
    const searchEmployee = document.getElementById("searchEmployees");
    const searchSelector = document.getElementById("searchSelector");
    if(searchEmployee.value===""){
      setNewArr(teamArr);
    }
    else{
      searchCardsBySelection(searchSelector, searchEmployee);
    }
  };

  const searchCardsBySelection =(searchSelector,searchEmployee)=>{
      let matchingEmployee =[];
      if(searchSelector.value==="name"){
        matchingEmployee = newArr.filter((team) => (
        team.name.toLowerCase().includes(searchEmployee.value.toLowerCase())));
      }
      else{
        matchingEmployee = newArr.filter((team) => (
          team.role.toLowerCase().includes(searchEmployee.value.toLowerCase())));
      }
    setNewArr(matchingEmployee);
  }

  const cardListJSX = newArr.map((team, index) => (
    <div key={index} className="cards_content">
      <h3 className="card_content">Name: {team.name}</h3>
      <h3 className="card_content">Role: {team.role}</h3>
      <Counter />
    </div>
  ));

  return (
    <div>
      <SearchBar searchCards={searchCards}/>
      <TickerButton className="formButton" buttonText ="Add new Employee" clickEvent ={toggleNewEmployeeForm} />
      {showNewEmployeeForm && <NewEmployeeForm addNewEmployee={addNewEmployee}/>}
      <div className="cards">{cardListJSX}</div>
    </div>
  );
};

export default Card;
