import ExpensesFilter from './ExpensesFilter'
import ExpensesList from './ExpensesList'
import ExpensesChart from './ExpensesChart'
import Card from '../UI/Card'
import './Expenses.css'
import { useState } from 'react'

function Expenses(props) {

    const [filteredYear, setFilteredYear] = useState('2020')

    // Filter expenses by year
    const filteredExpenses = props.items
        .filter(expense => {
                return expense.date.getFullYear().toString() === filteredYear
        })

    
        

    const filterChangeHandler = selectedYear => {
        setFilteredYear(selectedYear)
    }

    return(
        <div>       
            <Card className="expenses">
                <ExpensesFilter selected={filteredYear} onChangeFilter={filterChangeHandler}/>
                <ExpensesChart expenses={filteredExpenses}/>
                <ExpensesList items={filteredExpenses}/>
            </Card>
        </div>
    )
}

export default Expenses