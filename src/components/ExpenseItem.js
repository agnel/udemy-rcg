import './ExpenseItem.css'

function ExpenseItem() {
  const expenseDate = new Date(2021, 2, 28); // month starts from 0 = Jan, 1 = Feb, etc
  const expenseTitle = 'Car Insurance';
  const expenseAmount = 294.67;

  return (
    <div className='expense-item'>
      <div>{expenseDate.toISOString()}</div>
      <div className='expense-item__description'>
        <h2>{expenseTitle}</h2>
        <div className='expense-item__price'>${expenseAmount}</div>
      </div>
    </div>
  )
}

export default ExpenseItem