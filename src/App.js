import './App.css';
import AppRouter from './routers/AppRouter';
import configureStore from './store/configureStore';
import { addExpense } from './actions/expenses';
import { setTextFilter } from './actions/filters';
import getVisibleExpenses from './selectors/expenses';
import React from "react";
import {Provider} from 'react-redux'

const store=configureStore();

store.dispatch(addExpense({ description: 'Water bill', amount:4500 }));
store.dispatch(addExpense({ description: 'Gas bill', amount:13000 }));
store.dispatch(setTextFilter('water'));

setTimeout(()=>{
    store.dispatch(setTextFilter('bill'));
},3000);
const state = store.getState();
const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);
console.log(visibleExpenses);

const jsx=(
    <Provider store={store}>
    <AppRouter/>
    </Provider>
);

export default jsx;
