import React , {useState} from 'react'; 
//useState is a React library/ React hook which used to set the current state of the object in the jsx
//Because jsx returns the values and can't update normal scripting to the dom elements
//So states is being used

import './ExpenseItem.css'
import ExpenseDate from './ExpenseDate';
import Card from '../UI/card.js';

function ExpenseItem(props){
    // const d = props.date;
    //useSteate returns an array having two values 1. THe variable and 2. Actual value
    // const [title, setTitle] = useState(props.title);

    const clickHandler = () =>{
        //To update the title value setTitle function must be called with the argument
        // setTitle('UpdatedTitle');
        console.log(`Clicked clickHandler with title : ${props.title}`);
        
    }
    
    return(
        <li>
        <Card className="Main">
             <ExpenseDate date={props.date}/>
             <div className="expense-item__description">
                <div className="expnseame">{props.title}</div>
                <div className="amount"><span>&#8377;</span>{props.amount}</div>
            </div>
            <div className="expense-item__description2">
                <button className="addexpense" onClick={clickHandler}>Change Title</button>
            </div>
        </Card>
        </li>
    );
}
export default ExpenseItem;