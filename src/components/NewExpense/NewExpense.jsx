import './NewExpense.css'
import ExpenseForm from './ExpenseForm'
import {useState} from 'react'

function NewExpense(props) {

    const saveExpenseDatahandler = (enteredExpenseData) => {
        const expenseData = {
            id: Math.random().toString(),
            ...enteredExpenseData, 
            
        }
        props.onAddExpense(expenseData)
    }

    const [isEditing, setIsEditing] = useState(false)

    const startEditingHandler = () => {
        setIsEditing(true)
    }

    const stopEditing = () => {
        setIsEditing(false)
    }

    return (
        <div className="new-expense">
            {!isEditing && <button onClick={startEditingHandler}>Add New Expense</button>}
            {isEditing && <ExpenseForm onSaveExpenseData={saveExpenseDatahandler} onCancel={stopEditing}/>}
        </div>
    )
}

export default NewExpense