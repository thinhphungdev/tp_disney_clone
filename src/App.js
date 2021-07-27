import React from 'react';
import './sass/main.scss';

import Header from './components/Header';
import Home from './components/Home.js';

function App() {
    return (
        <React.Fragment>
            <Header />
            <Home />
        </React.Fragment>
    )
}

export default App
