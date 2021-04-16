import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import AddService from './Components/AddService/AddService';
import Booking from './Components/Booking/Booking';
import DashBoard from './Components/DashBoard/DashBoard/DashBoard';
import Home from './Components/Home/Home/Home';
import Login from './Components/Login/Login';
import Review from './Components/Review/Review';


function App() {
  return (
    <Router>

      <Switch>

        <Route exact path="/">
          <Home />
        </Route>
        
        <Route path="/login">
          <Login />
        </Route>
        <Route path="/dashboard">
          <DashBoard />
        </Route>
        <Route path="/addservice">
          <AddService />
        </Route>

        <Route path="/review">
          <Review />
        </Route>
        
        <Route path="/booking">
          <Booking />
        </Route>

      </Switch>

    </Router>
  );
}

export default App;
