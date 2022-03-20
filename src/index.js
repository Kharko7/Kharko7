import store from './redux/state';
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import App from './App';





let renderEntireTree = (state) => {
	ReactDOM.render(
		<BrowserRouter>
			<App state={state} showMessageDialog={store.showMessageDialog.bind(store)} dispatch={store.dispatch.bind(store)} />
		</BrowserRouter>,
		document.getElementById('root')
	);
}

renderEntireTree(store.getState())
store.subscribe(renderEntireTree)