import ExpenseItem from './ExpenseItem'
import Card from '../UI/Card'
import './Expenses.css'
function Expenses(props) {
    const expensesList = props.expenses.map(expense => {
        return <ExpenseItem title={expense.title}
                            amount={expense.amount}
                            date={expense.date}/>
    })

    return(
        <Card className="expenses">{expensesList}</Card>
    )
}

export default Expenses