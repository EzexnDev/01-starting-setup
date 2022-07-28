import React, { useState } from "react";

import "./ExpenseForm.css";

const ExpenseForm = (props) => {

    // Multiple states are being used here.

    const [enteredTitle, setEnteredTitle] = useState('');
    const [enteredAmount, setEnteredAmount] = useState('');
    const [enteredDate, setEnteredDate] = useState('');

    const titleChangeHandler = (event) => {
       setEnteredTitle(event.target.value);
    };

    const amountChangeHandler = (event) => {
        setEnteredAmount(event.target.value);
    }

    const dateChangeHandler = (event) => {
        setEnteredDate(event.target.value);
    }

    // One state is being used here.
    
    // const [userInput, setUserInput] = useState({
    //     enteredTitle: '',
    //     enteredAmount: '',
    //     enteredDate: ''
    // })

    // When using a state, you need to use a setter function. This is because the state is a reference to the object. And if you change the state, the object must be changed for all properties.

    // Using spread operator to copy the object. and then overwriting one of the properties.

    // Not a good idea to use spread operator and single state.
    // const titleChangeHandler = (event) => {

        // React schedule the render function to be called after the event is done. 

        // setUserInput({
        //     ...userInput,
        //     enteredTitle: event.target.value
        // });

        // Using this method prevent to get the wrong state snapshot of the function.

    //     setUserInput(prevState => {
    //         return {
    //             ...prevState,
    //             enteredTitle: event.target.value
    //         }
    //     })
    // };

    // const amountChangeHandler = (event) => {
    //     setUserInput({
    //         ...userInput,
    //         enteredAmount: event.target.value
    //     });
    // }

    // const dateChangeHandler = (event) => {
    //     setUserInput({
    //         ...userInput,
    //         enteredDate: event.target.value
    //     });
    // }

    return (
        <form>
            <div className="new-expense__controls">
                <div className="new-expense__control">
                    <label>Title</label>
                    <input type="text" onChange={titleChangeHandler} />
                </div>
                <div className="new-expense__control">
                    <label>Amount</label>
                    <input type="number" min="0.01" step="0.01" onChange={amountChangeHandler}/>
                </div>
                <div className="new-expense__control">
                    <label>Date</label>
                    <input type="date" min="2019-01-01" max="2020-12-31" onChange={dateChangeHandler}/>
                </div>
             </div>   
             <div className="new-expense__actions">
                <button type="submit">Add Expense</button>
             </div>
        </form>
    )
}

export default ExpenseForm;
