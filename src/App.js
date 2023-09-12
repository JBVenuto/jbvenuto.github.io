import React from 'react';
import { BrowserRouter, Route, Switch} from "react-router-dom";
//Pages to use with the router
import Main from './pages/Main';
import LetsEat from './pages/LetsEat';
import ArtGenerator from './pages/ArtGenerator';
import Lights from './pages/Lights';
import PublessTrivia from './pages/PublessTrivia';

const App = () => (
  <BrowserRouter>
    <div>
      <Switch>
        <Route exact path="/" component={Main} />
        <Route exact path="/letseat" component={LetsEat} />
        <Route exact path="/lights" component={Lights} />
        <Route exact path="/publesstrivia" component={PublessTrivia} />
        <Route exact path="/artgenerator" component={ArtGenerator} />
      </Switch>
    </div>
  </BrowserRouter>
)

export default App;