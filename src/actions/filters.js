const setFillter = (text = "") => ({
    type: "SET_FILLTER",
    text
})
const sortByAmount = () => ({
    type: 'SORT_BY_AMOUNT'
})
const sortByDate = () => ({
    type: 'SORT_BY_DATE'
})
const setStartDate = (date) => ({
    type: 'SET_START_DATE',
    date
})
const setEndDate = (date) => ({
    type: 'SET_END_DATE',
    date
})

export {setFillter,sortByAmount,sortByDate,setStartDate,setEndDate};