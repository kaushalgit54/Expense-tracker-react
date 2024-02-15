import React,{useState} from 'react'; //In react we when we update a variable value then also it doesn't reflect in dom
//So the concept of state is being introduced using useState in React

import Expenses from './components/Expenses/Expenses.js';
import NewExpense from './components/NewExpenses/NewExpense.js';
import Header from './components/UI/Header.js';
//This is an static array

const DUMMY_EXPENSES = [
  {
    id: "e1",
    title: "Groceries",
    amount: 94.12,
    date: new Date(2020, 7, 14),
  },
  { id: "e2", title: "New TV", amount: 799.49, date: new Date(2021, 2, 12) },
  {
    id: "e3",
    title: "Car Insurance",
    amount: 294.67,
    date: new Date(2021, 2, 28),
  },
  {
    id: "e4",
    title: "New Desk (Wooden)",
    amount: 450,
    date: new Date(2021, 5, 12),
  },
];

const App = ()=> {
   
  const [expenses,setExpenses] = useState(DUMMY_EXPENSES);
   
    const addExpenseHandler = (expense)=>{
      // setExpenses([expense, ...expenses]);
      setExpenses((prevExpenses) =>{
        return [expense, ...prevExpenses]; //Here expense is recieved from ExpenseForm.js and being stored in expenses variable through useState
      });
    };
  return (
    <div className="main">
      <Header/>
     <NewExpense onAddExpense = {addExpenseHandler}></NewExpense>
      
      <div className="show-expenses">
       <Expenses data={expenses}></Expenses>
      </div>
    </div>
  );
}

export default App;
