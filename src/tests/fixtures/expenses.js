import moment from 'moment';

export default [{
    id: '0',
    description: 'cat',
    note: '',
    amount: 1,
    createAt: 0

}, {
    id: '1',
    description: 'coffe',
    note: '',
    amount: 2,
    createAt:moment(0).subtract(4,'days').valueOf()
}, {
    id: '2',
    description: 'rent',
    note: '',
    amount: 3,
    createAt: moment(0).add(4,'days').valueOf()
}]
