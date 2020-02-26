import React from 'react';
import ExpenseList from './ExpenseList';
import ExpenseListFilter from './ExpenseListFilter';

const ExpenseDashBoard = () => (
    <div>
        <p>Home Page</p>
        <ExpenseListFilter />
        <ExpenseList />
    </div>
);

export default ExpenseDashBoard;