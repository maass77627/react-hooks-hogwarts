import React from "react";


function HogFilter({showGreased, setShowGreased}) {


    return(
        <div className="filter">
            <input 
            type="checkbox"
            checked={showGreased}
            onChange={() => setShowGreased(!showGreased)}
            >
            
            </input>
          <label>Show Greased Hogs Only</label>  

        </div>


    )
}

export default HogFilter