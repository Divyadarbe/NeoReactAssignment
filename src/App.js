import React,{useState} from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  
} from "react-router-dom";
import Login from './Components/LoginForm';
import Home from './Components/Home';
import * as firebase from "firebase";
import firebaseConfig from "./Components/firebase.config";
import Background from '../src/Components/Images/home1.jpeg';

firebase.initializeApp(firebaseConfig);
export const AuthContext = React.createContext(null);
function App() {
  const [isLoggedIn, setLoggedIn] = useState(false);
  return (
    <AuthContext.Provider value={{ isLoggedIn, setLoggedIn }}>
    
    <Router>
    <div style={style.container}>
      
      <Switch>
        <Route path="/home"><Home /></Route>
        <Route path="/"><Login /></Route>
      </Switch>
    </div>
  </Router>
  </AuthContext.Provider>
  );
}
const style={
  container:{
        backgroundImage: `url(${Background})`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        display:'flex',
        flex:1
  }
}
export default App;
