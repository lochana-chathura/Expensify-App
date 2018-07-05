import React from 'react';

const EditExpensePage = (props) =>{
    console.log(props)
    return(
    <div>EditExpense of {props.match.params.id}</div>
    );
};

export default EditExpensePage;