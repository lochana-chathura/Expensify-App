import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Switch, Link, NavLink } from 'react-router-dom'

const ExpenseDashboardPage = () => (
  <div>Dashboard</div>
);
const AddExpensePage = () => (
  <div>AddExpense</div>
);
const EditExpensePage = () => (
  <div>EditExpense</div>
);
const HelpPage = () => (
  <div>Help</div>
);
const NotFoundPage = () => (
  <div>404! - <Link to="/">go home</Link></div>
);
const Header = () => (
  <header>
    <h1>Epensify</h1>
    <NavLink to="/" activeClassName="is-active" exact={true}>Dashboard</NavLink>
    <NavLink to="/create" activeClassName="is-active" exact={true}>Create Expense</NavLink>
    <NavLink to="/edit" activeClassName="is-active" exact={true}>Edit Expense</NavLink>
    <NavLink to="/help" activeClassName="is-active" exact={true}>Help</NavLink>
  </header>
);
const routes = (
  <BrowserRouter>
    <div>
      <Header />
      <Switch>
        <Route path="/" component={ExpenseDashboardPage} exact={true} />
        <Route path="/create" component={AddExpensePage} exact={true} />
        <Route path="/edit" component={EditExpensePage} exact={true} />
        <Route path="/help" component={HelpPage} exact={true} />
        <Route component={NotFoundPage} />
      </Switch>
    </div>
  </BrowserRouter>
);

export default routes;
