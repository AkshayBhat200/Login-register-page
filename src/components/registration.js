import React from "react";
import Buttons from "./buttons";
export default Registration;

function clicked(){
    return(
        alert("clicked")
    );
}


function Registration()
{
    return(
        <div className="Reg">
                 <img className="App-logo" src=".\df8520cf10365d22c86c1ad0cdd72c28.jpg" alt="logo"/>
                <h2>Cliff Hanger</h2>
            <form type="submit">
             <input type="text" placeholder="Username/Email"/>
             <input type="password" placeholder="Password"/>
             <input type="password" placeholder="Confirm Password"/>
             <Buttons onClick="{clicked}" name ="Register"/>
            </form>
            
        </div>  
    );
}