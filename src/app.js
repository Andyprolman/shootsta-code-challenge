import React from 'react';
import { Provider } from 'react-redux'
import store from './rootStore'
import ReactDom from 'react-dom';
import {
  HashRouter as Router,
  Route
} from 'react-router-dom';
import Home from './components/Home'
import Uploads from './components/Uploads'


class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <div>
            <Route exact path='/' component={Home} />
            <Route path='/uploads' component={Uploads} />
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;