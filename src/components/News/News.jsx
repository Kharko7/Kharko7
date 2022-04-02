import React from "react"
import CountButton from "./CountButton/CountButton";
import classes from "./News.module.css"
import UseHooks from "./UseHooks/UseHooks";

const News = (props) => {
	return (
		<div>
			<UseHooks />
			News
			<CountButton />
		</div>
	)
}

export default News;

