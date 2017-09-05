import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import Main from './components/Main'
import Saved from './components/Saved'
import Search from './components/Search'
import './App.css';


class App extends Component {
  render() {
    return (
        <MuiThemeProvider>
            <Router>
                <div>
                    <Route  path="/" component={Main} />
                    <Route exact path="/Saved" component={Saved} />
                    <Route exact path="/Search" component={Search} />
                </div>
            </Router>
        </MuiThemeProvider>

    );
  }
}

export default App;
