import store from './redux/state';
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import App from './App';





let renderEntireTree = (state) => {
	ReactDOM.render(
		<BrowserRouter>
			<App state={state} addPost={store.addPost.bind(store)} showMessageDialog={store.showMessageDialog.bind(store)} addTextPost={store.addTextPost.bind(store)} />
		</BrowserRouter>,
		document.getElementById('root')
	);
}

renderEntireTree(store.getState())
store.subscribe(renderEntireTree)