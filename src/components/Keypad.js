// Code Keypad Component Here

import React from "react";

function Keypad(){
    function handleChange(event){
        console.log(`${event.target.name}`)
    }
    function handleSubmit(event){
        event.preventDefault();
        console.log("submit")
    }
    return(
        <div>
            <form onSubmit={handleSubmit}>
            <input 
            type="password" 
            name="Entering password..."
            placeholder="Entering password..."
            onChange = {handleChange} />
            <button type="submit">Submit</button>
            </form>
        </div>
    )
}

export default Keypad;
