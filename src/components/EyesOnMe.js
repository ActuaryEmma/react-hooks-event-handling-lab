// Code EyesOnMe Component Here
import React from "react";

function EyesOnMe(){
    function handleClick(event){
        console.log(event)
    }
    return(
        <div>
            
            <button onClick={handleClick}>Eyes on me</button>
        </div>
    )
}

export default EyesOnMe;