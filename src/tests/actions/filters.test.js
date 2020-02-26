import {setFillter,sortByAmount,sortByDate,setStartDate,setEndDate} from '../../actions/filters';
import moment from 'moment';

//sort by amount test
test('should sortByAmount action object',()=>{
    const action = sortByAmount();
    expect(action).toEqual({
        type:'SORT_BY_AMOUNT'
    })
})


//sort by date test
test('should sortByDate action object',()=>{
    const action = sortByDate();
    expect(action).toEqual({
        type:'SORT_BY_DATE'
    })
})


// set start date test
test('should setStartDate action object',()=>{
    const action = setStartDate(moment(0))
    expect(action).toEqual({
        type:'SET_START_DATE',
        date:moment(0)
    })
})


//set end date test
test('should setEndDate action object',()=>{
    const action = setEndDate(moment(0))
    expect(action).toEqual({
        type:'SET_END_DATE',
        date:moment(0)
    })
})

//set filter test 
test('should setFillter action object',()=>{
    const text ="tomer"
    const action =  setFillter(text)
    expect(action).toEqual({
        type:"SET_FILLTER",
        text
    })
})
test('should setFillter default action object',()=>{
    const action =  setFillter();
    expect(action).toEqual({
        type:"SET_FILLTER",
        text:''
        
    })
})



