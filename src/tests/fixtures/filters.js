import moment from 'moment';


const filters ={
    text:'',
    sortBy:'date',
    stratDate:undefined,
    endDate:undefined
}

const altFilters ={
    text:'bills',
    sortBy:'amount',
    stratDate:moment(0),
    endDate:moment(0).add(4,'days')
}
export {filters,altFilters}