import React from 'react'
import{auth,googleProvider} from '../config/firebase';
import { signInWithPopup } from 'firebase/auth';
// import Cookies from 'universal-cookie'
// const cookies=new Cookies();

export function Auth({setIsAuth}) {
    const signInWithGoogle = async () => {
        try {
          const result = await signInWithPopup(auth, googleProvider);
          // cookies.set("auth-token", result.user.refreshToken);
          setIsAuth(true);
          console.log(result);
          if(result){
            const credential = googleProvider.credentialFromResult(result);
            console.log(credential.auth.displayName);
            const token = credential.accessToken;
            const user = result.user;
            // console.log(user);
            // console.log(token);
          }
        } catch (error) {
          console.log(error);
          // const errorCode = error.code;
          // const errorMessage = error.message;
          // const email = error.customData.email;
          // const credential = googleProvider.credentialFromError(error);
        }
      };
      return (
        <div className="auth">
          <p> Sign In With Google To Continue </p>
          <button onClick={signInWithGoogle}> Sign In With Google </button>
        </div>
      );
}
