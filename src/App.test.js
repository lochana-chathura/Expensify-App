import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import './actions/expenses';
import { addExpense } from './actions/expenses';
import Header from './components/Header';
import {shallow} from 'enzyme';
import toJSON from 'enzyme-to-json';
// it('renders without crashing', () => {
//   const div = document.createElement('div');
//   ReactDOM.render(<App />, div);
//   ReactDOM.unmountComponentAtNode(div);
// });

test('header test',()=>{
  const wrapper= shallow(<Header/>);
  expect(toJSON(wrapper)).toMatchSnapshot();
});

// const add=(a,b)=>a+b;
// test('add test',()=>{
//   const result=add(4,3);
//   expect(result).toBe(7);
// });