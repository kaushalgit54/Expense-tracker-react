import React,{useState} from "react";

import ExpenseForm from "./ExpenseForm";
import './NewExpense.css';

const NewExpense =(props)=>{
    console.log('Visited NewExpense');
    const [addToggle, setToggle] = useState(false);
    
    const saveExpenseDataHandler = (enteredExpenseData) =>{
       const expenseData = {
        ...enteredExpenseData,
        id: Math.random().toString()
       };
       console.log(`Inside NewExpense`);
       props.onAddExpense(expenseData);
      //  setToggle(false);
    };
      const addNewExpenseHandler = ()=>{
        setToggle(true);
      }
      const stopEditing = ()=>{
        setToggle(false);
      }
    return(
        <div className="new-expense">
         {/* using short circuting we are implementing to hide and show these two buttons */}
         {!addToggle && <button className="add-new-expense" onClick={addNewExpenseHandler}>Add new Expense</button>}
         {addToggle && <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} onCancel={stopEditing}></ExpenseForm>}
        </div>
    );
    
};
export default NewExpense;