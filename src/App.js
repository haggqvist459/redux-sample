import React, { Component } from 'react';
import { BrowserRouter, Route, Switch, } from "react-router-dom";
import { PATHS } from './constants/pathConstants';

import Home from './pages/Home';

class App extends Component {
    render() {
        return (
            // <>TEST</>
            <BrowserRouter>
                <Switch>
                    <Route exact path={PATHS.Home} component={Home} />
                </Switch>
            </BrowserRouter>
        )
    }
}

export default App;

// browser history
// import { createBrowserHistory } from "history";
