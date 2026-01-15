import React from "react";
import { useState } from "react";

function HogTile({ hog }) {
    const [togglePigData, setTogglePigData] = useState(false)
    const [hidden, setHidden] = useState(false)

    function handlePigClick() {
        setTogglePigData(!togglePigData)
    }

    function hidePig(e) {
        console.log("hiding")
        e.stopPropagation()
    
        setHidden(hidden => !hidden)
        console.log(e.target.parentNode.classList)
    }




    return(
        <div onClick={handlePigClick} className={hidden ? "pigTile ui card hidden" : "pigTile ui card"}>
            <button onClick={hidePig}>Hide Hog</button>
            <h1>{hog.name}</h1>
            <img src={hog.image} alt="hoggy"></img>
            {togglePigData && (
                <div>
                    <p> Specialty: {hog.specialty}</p>
                    <p> Weight: {hog.weight}</p>
                    <p>Greased: {String(hog.greased)}</p>
                    <p> Highest Medal: {hog["highest medal achieved"]}</p>
                    

                </div>
            )}
            

        </div>

    )
}

export default HogTile