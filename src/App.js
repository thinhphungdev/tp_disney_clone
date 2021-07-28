import React from 'react';
import './sass/main.scss';

import Header from './components/Layout/Header.js';
import Home from './components/Layout/Home.js';
import Details from './components/pages/Details.js';
import Login from './components/pages/Login.js';

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";

function App() {
    return (
        <React.Fragment>
            <Router>
                <Header />

                <Switch>
                    <Route path="/" exact>
                        <Home />
                    </Route>

                    <Route path="/details/:id">
                        <Details />
                    </Route>

                    <Route path="/login">
                        <Login />
                    </Route>
                </Switch>

            </Router>
        </React.Fragment>
    )
}

export default App
