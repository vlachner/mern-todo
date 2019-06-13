import React, { Component} from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom' ;
import 'bootstrap/dist/css/bootstrap.min.css';

import TodosList from './components/TodosList';
import EditTodo from './components/EditTodo';
import CreateTodo from './components/CreateTodo';

import Header from './partials/Header'

class App extends Component {
  render(){
    return(
      <Router>
        <Header></Header>
        <div className='container' >
          <br/>
          <Route path="/" exact component={TodosList} />
          <Route path="/edit/:id" component={EditTodo} />
          <Route path="/create" component={CreateTodo} />
        </div>
      </Router>
    );
  }
}

export default App;
