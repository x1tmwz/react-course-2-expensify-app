import filtersReducer from '../../reducers/filters';
import moment from 'moment';

test('should setup default filter values',()=>{
    const state = filtersReducer(undefined,{type:'@@INIT'})
    expect(state).toEqual({
        text:'',
        sortBy:'date',
        startDate:moment().startOf('month'),
        endDate:moment().endOf('month')
    })
})
test('should set sort by amount',()=>{
    const state = filtersReducer(undefined,{type:'SORT_BY_AMOUNT'})
    expect(state.sortBy).toBe('amount');
})
test('should set sort by date',()=>{
    const currentState = {
        text:'',
        sortBy:'amount',
        startDate:moment().startOf('month'),
        endDate:moment().endOf('month')
    }
    const state = filtersReducer(currentState,{type:'SORT_BY_DATE'})
    expect(state.sortBy).toBe('date');
})
test('should setup set to text filter',()=>{
    const text ='tomer'
    const state = filtersReducer(undefined,{type:"SET_FILLTER",text})
    expect(state.text).toBe(text);
})
test('should set stratDate filter',()=>{
    const date =moment(0);
    const state = filtersReducer(undefined,{type:'SET_START_DATE',date})
    expect(state.startDate).toEqual(date);
})
test('should set endDate filter',()=>{
    const date =moment(0);
    const state = filtersReducer(undefined,{type:'SET_END_DATE',date})
    expect(state.endDate).toEqual(date);
})
