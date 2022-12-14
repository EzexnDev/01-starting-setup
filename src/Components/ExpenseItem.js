import React, { useState } from 'react';
import ExpenseDate from './ExpenseDate';
import './ExpenseItem.css';
import Card from './UI/Card';

function ExpenseItem(props) {

    const [title, setTitle] = useState(props.title); // this is a hook

    const clickHandler = () => {
        setTitle('Updated Title');
    }

  return (
    <Card className='expense-item'>
      <ExpenseDate date={props.date} />
      <div className='expense-item__description'>
        <h2>{title}</h2>
      </div>
      <div className='expense-item__price'>${props.amount}</div>
      <button onClick={clickHandler}>Boro</button>
    </Card>
  );
}

export default ExpenseItem;