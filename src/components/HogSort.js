import React from "react";

function HogSort({setSortBy}) {


    return (
        <div className="hogsort">
            <form>
                <h1>Sort Hogs</h1>
               
               <select onChange={(e) => setSortBy(e.target.value)}>
                <option value="none">None</option>
                <option value="name">Name</option>
                <option value="weight">Weight</option>
               </select>
                
            </form>

        </div>

    )
}

export default HogSort