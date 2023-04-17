import React from 'react'
import { auth } from "../config/firebase";
import Cookies from "universal-cookie";
import { signOut } from "firebase/auth";
const cookies = new Cookies();
function Hello({setIsAuth,isAuth}) {
    const signUserOut = async () => {
        await signOut(auth);
        cookies.remove("auth-token");
        setIsAuth(false);
      };
  return (
    <div>
      <h1>Hello ji aa gye sare</h1>
      {isAuth && (
        <div className="sign-out">
          <button onClick={signUserOut}> Sign Out</button>
        </div>
      )}
    </div>
  )
}

export default Hello
