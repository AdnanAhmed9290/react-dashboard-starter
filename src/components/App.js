import React from "react";
/* eslint-disable import/no-named-as-default */
import { Route, Switch } from "react-router-dom";
import { InternetPage, NetworkPage, UserPage, OverviewPage, NotFoundPage } from './index'


class App extends React.Component {
  render() {
    return (
      <div className="page-content">
        <Switch>
          <Route exact path="/" component={OverviewPage} />
          <Route path="/network" component={NetworkPage} />          
          <Route path="/internet" component={InternetPage} />          
          <Route path="/user" component={UserPage} />          
          <Route component={NotFoundPage} />
        </Switch>
      </div>
    );
  }
}


export default App;
