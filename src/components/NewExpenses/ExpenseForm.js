import React, { useState } from "react";

import "./ExpenseForm.css";

const ExpenseForm = (props) => {
  const [enteredTitle, setEnteredTitle] = useState("");
  const [enteredAmount, setEnteredAmount] = useState("");
  const [enteredDate, setEnteredDate] = useState("");

  //    const [userInput, setUserInput] = useState({
  //         setEnteredTitle:'',
  //         setEnteredAmount:'',
  //         setEnteredDate:'',
  //     });

//   console.log("Visited Expenseform");

  const titleChanger = (event) => {
    setEnteredTitle(event.target.value);

    // setUserInput({
    //     ...userInput,
    //    setEnteredTitle: event.target.value,
    // });

    //ALso this method works safely as it depends on the previous state
    // setUserInput((prevState) => {
    // return {...prevState, setEnteredTitle: event.target.value};
    // });
  };

  const amountChanger = (event) => {
    setEnteredAmount(event.target.value);
    // setUserInput({
    //     ...userInput,
    //    setEnteredAmount: event.target.value,
    // });
  };
  const dateChanger = (event) => {
    setEnteredDate(event.target.value);
    // setUserInput({
    //     ...userInput,
    //    setEnteredDate: event.target.value,
    // });
  };
  const submitHandler = (event) => {
    event.preventDefault();

    const expenseData = {
      title: enteredTitle,
      amount: +enteredAmount,
      date: new Date(enteredDate),
    };
    console.log(enteredDate);
    
    props.onSaveExpenseData(expenseData);
    setEnteredAmount('');
    setEnteredTitle('');
    setEnteredDate('');
    // console.log(expenseData);
  };
 
  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input type="text" onChange={titleChanger} value={enteredTitle} />
        </div>

        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            min="0.01"
            step="0.01"
            value={enteredAmount}
            onChange={amountChanger}
          />
        </div>

        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            min="2019-01-01"
            max="2023-12-31"
            value={enteredDate}
            onChange={dateChanger}
          />
        </div>

        <div className="new-expense__actions">
          <button className="btn" type="button"onClick={props.onCancel}>Cancel</button>
          <button className="btn" type="submit">Add Expense</button>
        </div>
      </div>
    </form>
  );
};
export default ExpenseForm;
