import React,{ createContext,useState} from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import AddAdmin from './Components/AddAdmin/AddAdmin';
import AddService from './Components/AddService/AddService';
import Booking from './Components/Booking/Booking';
import DashBoard from './Components/DashBoard/DashBoard/DashBoard';
import Home from './Components/Home/Home/Home';
import Login from './Components/Login/Login';
import Review from './Components/Review/Review';
import PrivateRoute from './Components/PrivateRoute/PrivateRoute'

export const UserContext = createContext();
const userInfo = {
	name: '',
	email: ''
};

function App() {

  const [user, setUser] = useState(userInfo);
  
  return (
    <UserContext.Provider value={[user,setUser]}>

      <Router>

      <Switch>

        <Route path="/home">
          <Home />
        </Route>
        
        <Route path="/login">
          <Login />
        </Route>
        <PrivateRoute path="/dashboard">
          <DashBoard />
        </PrivateRoute>
        <PrivateRoute path="/addservice">
          <AddService />
        </PrivateRoute>

        <PrivateRoute path="/review">
          <Review />
        </PrivateRoute>
        
        <PrivateRoute path="/booking/:service">
          <Booking />
        </PrivateRoute>
        
          <PrivateRoute path="/addAdmin">
          <AddAdmin />
        </PrivateRoute>

        <Route exact path="/">
            <Home></Home>
        </Route>
          
      </Switch>

    </Router>

    </UserContext.Provider>
  );
}

export default App;
