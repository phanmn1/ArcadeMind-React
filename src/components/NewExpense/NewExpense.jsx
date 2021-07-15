import './NewExpense.css'
import ExpenseForm from './ExpenseForm'

function NewExpense(props) {

    const saveExpenseDatahandler = (enteredExpenseData) => {
        const expenseData = {
            id: Math.random().toString(),
            ...enteredExpenseData, 
            
        }
        props.onAddExpense(expenseData)
    }

    return (
        <div className="new-expense">
            <ExpenseForm onSaveExpenseData={saveExpenseDatahandler}/>
        </div>
    )
}

export default NewExpense