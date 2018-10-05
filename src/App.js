import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Article from "./pages/Article";


const App = () => (
 <Router>
    <div className="continater-fluid">
      <Article/>
      <Route exact path="/" component={App} />
      
    </div>
    </Router>
);

export default App;