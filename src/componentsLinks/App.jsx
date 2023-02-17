import React from 'react';
import Python from'./Python/Python';
import Java from './Java/Java';
import C from './C/C';
import Html from './HTML/Html';
import JavaScript from './JavaScript/JavaScript'
import AppNavbar from './App-navbar';

import './App.css';

function App(){

let component
switch (window.location.pathname) {
    case "/Python":
        component=<Python/>
        break;
    case "/Java":
        component=<Java/>
        break;
    case "/Html":
        component=<Html/>
        break;
    case "/C":
        component=<C/>
        break;
    case "/JavaScript":
        component=<JavaScript/>
        break;

    
}

    return(
        <div className="content">
            <AppNavbar/>
            <hr />
            {component}
        </div>
    )
};

export default App;