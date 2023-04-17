// import logo from './logo.svg';
import React, { useState, useEffect } from "react";
import {Auth} from './components/Auth'
import Hello from './components/Hello';
// import { AppWrapper } from "./components/AppWrapper";
import './App.css';
// import Cookies from 'universal-cookie';

// const cookies=new Cookies();

function App() {
  const [isAuth, setIsAuth] = useState(false);
  if(!isAuth){
    return(
      <Auth setIsAuth={setIsAuth}/>
    )
  }
  // console.log(cookies.get("auth-token"))
  return (
    <div className="App">
      <Hello isAuth={isAuth} setIsAuth={setIsAuth}/>
    </div>
  );
}

export default App;
