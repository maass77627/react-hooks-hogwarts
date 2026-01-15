import React from "react";
import HogTile from "./HogTile";

function HogContainer({hogs}) {

    return(
        <div className="ui grid container">
          {hogs.map((hog) => ( <HogTile key={hog.name} hog={hog}></HogTile>

          ))}
        </div>

    )
}

export default HogContainer