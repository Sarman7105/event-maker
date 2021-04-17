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
        
          <Route path="/addAdmin">
          <AddAdmin />
        </Route>

        <Route exact path="/">
            <Home></Home>
        </Route>
          
      </Switch>

    </Router>

    </UserContext.Provider>
  );
}

export default App;
