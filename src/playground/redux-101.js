









store.subscribe(() => {
    const {expenses,filters} = store.getState();
    console.log(getVisibleExpenses(expenses,filters));
})
const expensOne = store.dispatch(addExpense({ description: "rent", amount: 500,createAt:500 }))
store.dispatch(addExpense({ description: "coffe", amount: 32500, createAt:1200}));
// store.dispatch(removeExpense({ id: expensOne.expense.id }));
//store.dispatch(setFillter('RE'));
// store.dispatch(setFillter());


store.dispatch(sortByAmount());
 //store.dispatch(sortByDate());
// console.log("set start day");
// store.dispatch(setStartDate(0));
// console.log("set end day");
// store.dispatch(setEndDate(1500));


const demoState = {
    expenses: [{
        id: "something",
        description: "rent",
        note: "wtf",
        amount: 54500,
        createAt: 0
    }],
    filters: {
        text: 'rent',
        sortBy: 'amount',
        startDate: undefined,
        endDate: undefined
    }
}
