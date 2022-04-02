

import React, { useState } from "react"
import classes from "./UseHooks.module.css"

const UseHooks = (props) => {
	let [editMode, setEditMode] = useState(true)

	const activateEditMode = () => {
		setEditMode(false)
	}
	const deactivateEditMode = () => {
		setEditMode(true)
	}

	return (
		<div>
			<h1>Use Hooks</h1>

			<div>
				{editMode ? (
					<h2 onDoubleClick={activateEditMode}>{editMode} Work 1</h2>
				)
					: (
						<input onDoubleClick={deactivateEditMode} onBlur={deactivateEditMode} autoFocus type="text" />
					)}
			</div>


		</div >
	)
}

export default UseHooks;



// return (
// 	<div>
// 		<h1>Use Hooks</h1>

// 		<div>
// 			{editMode &&
// 				<h2 onDoubleClick={activateEditMode}>{editMode} Work 1</h2>}
// 			{!editMode &&
// 				<input onDoubleClick={deactivateEditMode} onBlur={deactivateEditMode} autoFocus type="text" />}
// 		</div>


// 	</div >
// )

