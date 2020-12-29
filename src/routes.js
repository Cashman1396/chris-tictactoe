import React, { Component } from 'react';


import { BrowserRouter, Route, Switch } from "react-router-dom"

class Routes extends Component {
    render() {
        return (
           <BrowserRouter>
              <Switch>
                  <Route exact path="/" component={GameSettings} />
                  <Route path="/ticTacToe" component={Game} />
              </Switch>
           </BrowserRouter>
        );
    }
}

export default Routes;