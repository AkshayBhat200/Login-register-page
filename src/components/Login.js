import React from "react";
import Buttons from "./buttons";
export default Login;


function Login() 
{
 return(
<div className="login">
         <img className="App-logo" src=".\df8520cf10365d22c86c1ad0cdd72c28.jpg" alt="logo"/>
        <h2>Cliff Hanger</h2>
        <form>
        <input type="text" placeholder="Username/Email"/>
     <input type="password" placeholder="Password"/>
     <Buttons name ="Login"/>
     </form>
      <a href="#">Forgot password!!</a>
            <h4>Didnt register?</h4>
            <Buttons name = "Register"/>
  </div>
 );
}