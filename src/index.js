import state, { subscribe } from './redux/state';
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import { addPost, addTextPost, showMessageDialog } from './redux/state';





let renderEntireTree = (state) => {
	ReactDOM.render(
		<BrowserRouter>
			<App state={state} addPost={addPost} showMessageDialog={showMessageDialog} addTextPost={addTextPost} />
		</BrowserRouter>,
		document.getElementById('root')
	);
}

renderEntireTree(state);
subscribe(renderEntireTree)