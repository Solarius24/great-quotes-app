import React, { Fragment } from "react";
import { useParams, Route, Routes } from "react-router-dom";
import { Comments } from "../components/comments/Comments";
import HighLighted from '../components/quotes/HighlightedQuote'

const DUMMY_QUOTES = [
  {id:'q1', author: 'Max', text:'Learning React'},
  {id:'q2', author: 'Tom', text:'Learning Python'}
]

export const QuoteDetails = () => {
  const params = useParams();
  const quote = DUMMY_QUOTES.find(quote=>quote.id===params.quoteId)

  if(!quote){
    return <p>no quote found</p>
  }

  return (
    <Fragment>
    <HighLighted text={quote.text} author={quote.author}/>
      <h1>Quote Detail Page</h1>
      <p>{params.quoteId}</p>
      <Routes>
        <Route
          path={`quotes/${params.quoteId}/comments`}
          element={<Comments />}
        ></Route>
      </Routes>
    </Fragment>
  );
};
