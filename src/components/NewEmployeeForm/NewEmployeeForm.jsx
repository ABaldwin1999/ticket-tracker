import React from "react";
import TickerButton from "../TickerButton/TickerButton";


const NewEmployeeForm = ({addNewEmployee}) => {

  return (
      <div className="createNewEmployeeBar">
        <div className="newEmployee">
          <h2>New Employee Name</h2>
          <input id="newEmployeeName" type="text" />
        </div>
        <div className="newEmployee">
          <h2>New Employee Role</h2>
          <input id="newEmployeeRole" type="text" />
        </div>
        <TickerButton className="formButton" clickEvent={addNewEmployee} buttonText="Add new Employee"/>
        
      </div>
   
  );
};

export default NewEmployeeForm;