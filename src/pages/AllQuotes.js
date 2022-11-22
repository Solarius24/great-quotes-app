import React from 'react'
import QuoteList from '../components/quotes/QuoteList'


const DUMMY_QUOTES = [
  {id:'q1', author: 'Max', text:'Learning React'},
  {id:'q2', author: 'Tom', text:'Learning Python'}
]



export const AllQuotes = () => {
  return (
    <div>
      <QuoteList quotes={DUMMY_QUOTES}/>
    </div>
  )
}


