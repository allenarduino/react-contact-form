import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import FormPage from './pages/FormPage';
import SuccessPage from './pages/SuccessPage';

const App = () => {
  return (
    <Router>
      <div>
        <Switch>
          <Route exact path="/" component={FormPage} />
          <Route path="/success" component={SuccessPage} />
        </Switch>
      </div>
    </Router>
  );
};

export default App;
