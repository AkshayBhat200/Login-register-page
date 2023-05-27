import React from "react";
import Login from "./Login";
import Registration from "./registration.js"
export default Sel;

const isreg=false;

function Sel(){
    return(
        isreg?<Login/>:<Registration/>
    );

}
