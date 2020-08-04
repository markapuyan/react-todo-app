import React from 'react';
import {Route, Switch } from 'react-router-dom'
import './App.css';
import AppLayout from './hoc/AppLayout/AppLayout'
import Main from './containers/Main/Main'
import Todo from './containers/Todo/Todo'
import NotFound from './components/UI/NotFound/NotFound'
function App() {
  return (
      <div className="App">
        <AppLayout>
            <Switch>
              <Route exact path="/" component={Main} />
              <Route exact path="/todo/:id" render={props => <Todo {...props} />} />
              <Route component={NotFound}/>
            </Switch>
        </AppLayout>
      </div>
  );
}

export default App;
