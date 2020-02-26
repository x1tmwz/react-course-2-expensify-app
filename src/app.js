import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import AppRouter from './routers/AppRouter';
import configureStore from './store/configureStore';
import { addExpense} from './actions/expenses';
import 'normalize.css/normalize.css';
import './styles/style.scss';
import 'react-dates/lib/css/_datepicker.css';



const store = configureStore();
store.dispatch(addExpense({ description: 'water bill', amount: 10, note:'tel aviv',createAt: 400 }));
store.dispatch(addExpense({ description: 'Gas bill', amount: 100, createAt: 30 }));
store.dispatch(addExpense({ description: 'Gas bill', amount: 50, createAt: 100 }));
store.dispatch(addExpense({ note:"shaoli shawarma"}));



const jsx = (
    <Provider store={store}>
        <AppRouter />
    </Provider>
);
ReactDOM.render(jsx, document.getElementById("app"));
