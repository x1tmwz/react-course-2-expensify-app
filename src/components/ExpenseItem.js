import React from 'react';
import { Link } from 'react-router-dom';


export  const ExpenseItem = (props) => (
    <div>
        <Link to={`/edit/${props.id}`}>
            <h3>Expense : {props.description}</h3>
        </Link>
        <ul>
            {props.note && <li>note : {props.note}</li>}
            <li>amount: {props.amount}</li>
            <li>create at: {props.createAt}</li>
        </ul>
        
    </div>
)
export default ExpenseItem;