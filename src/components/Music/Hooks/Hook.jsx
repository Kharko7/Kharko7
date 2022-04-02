import React, { useState, useEffect } from "react";
import classes from "./Hook.module.css"


const Hook = (props) => {
	const [data, setData] = useState("users");
	const [contents, setContent] = useState([]);

	useEffect(() => {
		fetch(`https://jsonplaceholder.typicode.com/${data}`)
			.then(response => response.json())
			.then(json => setContent(json.slice(0, 5)))
	}, [data])

	// useEffect(async () => {
	// 	const respond = await fetch(`https://jsonplaceholder.typicode.com/${data}`)
	// 	let respondJSON = await respond.json()
	// 	respondJSON = await setContent(respondJSON.slice(0, 5))
	// }, [data])



	return (
		<div className={classes.hook}>
			<h1>{data}</h1>

			<button onClick={() => setData('users')}>Client</button>
			<button onClick={() => setData('todos')}> Todo</button>
			<button onClick={() => setData('posts')}> Post</button>
			<div>
				<pre>{JSON.stringify(contents, null, 2)}</pre>

			</div>
		</div >
	)
}

export default Hook;