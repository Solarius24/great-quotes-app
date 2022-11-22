import { Route, Routes, Navigate } from "react-router-dom";
import { AllQuotes } from "./pages/AllQuotes";
import { QuoteDetails } from "./pages/QuoteDetails";
import { NewQuote } from "./pages/NewQuote";
import { Layout } from "./components/layout/Layout";

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" exact>
          {/* <Navigate to="/quotes" /> */}
        </Route>
        <Route path="/quotes" element={<AllQuotes />} exact></Route>
        <Route path="/quotes/:quoteId" element={<QuoteDetails />}></Route>
        <Route path="/new-quote" element={<NewQuote />}></Route>
      </Routes>
    </Layout>
  );
}

export default App;
