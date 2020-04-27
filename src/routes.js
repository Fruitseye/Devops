import React from 'react';
import { BrowserRouter as Router, Route  } from 'react-router-dom';
import Form from './Form';
import Secpage from './Fetcher';
const Routes = () => (
    <Router>
            <Route exact path="/" component={Form} />
            <Route path="/nextpage" component={Secpage} />
    </Router>
);

export default Routes;
