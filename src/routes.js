import React, { Component } from 'react';


// Router
import { BrowserRouter, Route, Switch } from "react-router-dom";


// Pages
import Settings from './pages/Settings/settings';
import Game from './pages/Game/game';


class Routes extends Component {
    render() {
        return (
            <BrowserRouter>
                <Switch>
                    <Route exact path="/" component={Settings} />
                    <Route path="/ticTacToe" component={Game} />
                </Switch>
            </BrowserRouter>
        );
    }
}

export default Routes;