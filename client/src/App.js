import React from 'react';
import { Route, Switch, Redirect  } from 'react-router-dom';
import Home from "./views/Home/Home";
import Register from "./views/Register/Register";
// import NotFound from "./views/NotFound";
import NavBar from "./components/Header/NavBar";

const App = () => {
  return (
    <div>
      <NavBar />
      <Switch>
        <Route exact path="/Home" component={Home} />
        <Route exact path="/">
          <Redirect to="/Home" />
        </Route>
        <Route exact path = "/Register" component={Register} />
        </Switch>
    </div>
  );
}

export default App;
