import React from 'react';
import {NavLink} from 'react-router-dom'

const Header = () => (
    <header>
        <h1>Epensify</h1>r
        <NavLink to="/" activeClassName="is-active" exact={true}>Dashboard</NavLink>
        <NavLink to="/create" activeClassName="is-active" exact={true}>Create Expense</NavLink>
        <NavLink to="/help" activeClassName="is-active" exact={true}>Help</NavLink>
    </header>
);

export default Header;