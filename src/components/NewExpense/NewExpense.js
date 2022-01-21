import './NewExpense.css'

import ExpenseForm from './ExpenseForm';
import { useState } from 'react';

const NewExpense = (props) => {
  const [showForm, setShowForm] = useState(false);

  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString()
    };

    props.onAddExpense(expenseData);
    setShowForm(false);
  };

  const showFormHandler = show => {
    setShowForm(show);
  }

  return <div className='new-expense'>
    <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} show={showForm} onShowForm={showFormHandler} />
  </div>
};

export default NewExpense;