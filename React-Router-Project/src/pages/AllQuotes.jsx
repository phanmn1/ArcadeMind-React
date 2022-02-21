import QuoteList from '../components/quotes/QuoteList'

const DUMMY_QUOTES = [
    { id: 'q1', author: 'Max', text: 'Learning React is fun!'},
    { id: 'q2', author: 'Maximillian', text: 'Learning react is great'}
]

const AllQuotes = () => {
    return <QuoteList quotes={DUMMY_QUOTES}/>
}

export default AllQuotes