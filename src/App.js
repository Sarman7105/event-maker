import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Login from './Components/Login/Login';


function App() {
  return (
    <Router>

      <Switch>
           {/* <Route path="/">
            <Home />
          </Route> */}
           <Route path="/login">
            <Login />
          </Route>
      </Switch>

    </Router>
  );
}

export default App;
