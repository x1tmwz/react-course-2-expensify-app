import React from 'react';
import ExpenseList from './ExpenseList';
import ExpenseListFilter from './ExpenseListFilter';
import ExpensesSummary from './ExpensesSummary'

const ExpenseDashBoard = () => (
    <div>
        <p>Home Page</p>
        <ExpenseListFilter />
        <ExpensesSummary />
        <ExpenseList />
    </div>
);

export default ExpenseDashBoard;