

import React, { useState } from "react"
import classes from "./CountButton.module.css"

const CountButton = (props) => {
	const [state, setState] = useState({
		initialState: {
			value1: true,
			value2: 18,
			value3: "some string",
		}
	})
	const [counter, setCounter] = useState()
	return (
		<div>
			<h1>Basic React hooks</h1>
			<button onClick={() => setState({ value: { ...state, value: !state.value1 } })}>toggle test</button>
			{<p>{state.value1}</p>}
			{state.vaue1 ? (
				<div>
					<p>{state.value2}</p>
					<p>{state.value3}</p>
				</div>
			)
				: ''
			}
		</div >
	)
}

export default CountButton;