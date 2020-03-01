import React from 'react';
import { Link } from 'react-router-dom';
import moment from 'moment';
import numeral from 'numeral';

export  const ExpenseItem = (props) => (
    <div>
        <Link to={`/edit/${props.id}`}>
            <h3>Expense : {props.description}</h3>
        </Link>
        <ul>
            {props.note && <li>note : {props.note}</li>}
            <li>amount: {numeral(props.amount/100).format('$0,0.00')}</li>
            <li>create at: {moment(props.createAt).format('MMMM Do, YYYY') }</li>
        </ul>
        
    </div>
)
export default ExpenseItem;