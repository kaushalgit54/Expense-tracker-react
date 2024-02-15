import react, {useState} from "react";

import ExpenseFilter from "./ExpensesFilter";
import ExpensesList from "./ExpensesList";
import "./Expenses.css";
import Card from "../UI/card.js";
import ExpensesChart from "./ExpensesChart";

function Expenses(props) {
   const [filteredYear,setFiltererdYear] = useState('2020');

  const filterChangeHandler = (selectedYear)=>{
    setFiltererdYear(selectedYear);
  };
  //This will return an array which consists of all the attributes of expense array that is matching filteredYear and filter according to that
    
  const filteredYearItems = props.data.filter(expenses =>{
    return expenses.date.getFullYear().toString() === filteredYear;
  });

  return (
  <div>
    <Card className="expenses">
    <ExpenseFilter selected={filteredYear} onChangeFilter ={filterChangeHandler}/>
     <ExpensesChart expenses={filteredYearItems}></ExpensesChart>
     <ExpensesList items={filteredYearItems}></ExpensesList>   
    </Card>
  </div>
  );
}

export default Expenses;
