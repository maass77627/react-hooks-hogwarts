import React from "react";
import Nav from "./Nav";
import hogs from "../porkers_data";
import HogContainer from "./HogContainer.js"
import HogFilter from "./HogFilter.js"
import HogSort from "./HogSort.js"
import { useState } from "react"

function App() {
	console.log(hogs)
	const [allHogs, setAllHogs] = useState(hogs)
	const [showGreased, setShowGreased] = useState(false)
	const [sortBy, setSortBy] = useState("")
	
	
	
	const filteredHogs = showGreased ? allHogs.filter((hog) => hog.greased === true) : allHogs
	
	// .sort((hogone, hogtwo) => {hogone.name.localCompare(hogtwo.name)})


	
	
	return (
		<div className="App">
			<Nav />
			<HogContainer hogs={filteredHogs}></HogContainer>
			<HogFilter showGreased={showGreased} setShowGreased={setShowGreased}></HogFilter>
			<HogSort setSortBy={setSortBy}></HogSort>
			
		</div>
	);
}

export default App;
