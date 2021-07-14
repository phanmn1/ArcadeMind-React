import ExpenseItem from './ExpenseItem'
import ExpensesFilter from './ExpensesFilter'
import Card from '../UI/Card'
import './Expenses.css'
import { useState } from 'react'

function Expenses(props) {
    const expensesList = props.expenses.map(expense => {
        return <ExpenseItem title={expense.title}
                            amount={expense.amount}
                            date={expense.date}/>
    })

    const [filteredYear, setFilteredYear] = useState('2020')

    const filterChangeHandler = selectedYear => {
        setFilteredYear(selectedYear)
    }

    return(
        <div>
            
            <Card className="expenses">
            <ExpensesFilter selected={filteredYear} onChangeFilter={filterChangeHandler}/>
                {expensesList}
            </Card>
        </div>
    )
}

export default Expenses