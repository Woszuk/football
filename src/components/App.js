import React from 'react'
import { Route, Router, Switch } from 'react-router-dom'
import history from '../history';

import Header from './Header';
import Teams from './Teams';

import '../sass/base/_base.scss'
import './App.scss'

const App = () => {
    return (
        <div className="container">
            <Router history={history}>
                <Header />
                <Switch>
                    <Route path="/" exact component={Teams} />
                </Switch>
            </Router>
        </div>
    )
}

export default App;