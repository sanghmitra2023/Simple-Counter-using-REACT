import React from "react";
import SecondsCounter from "./secondscounter.jsx";
//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = () => {
	return (
		<div className="d-flex justify-content-center mt-4">
			<SecondsCounter/>
		</div>
	);
};

export default Home;