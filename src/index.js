import store from './redux/redux-store';
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import { Provider } from 'react-redux';


// showMessageDialog={store.showMessageDialog.bind(store)}  


let renderEntireTree = (state) => {
	ReactDOM.render(
		<BrowserRouter>
			<Provider store={store}>
				<App state={state}  dispatch={store.dispatch.bind(store)} />
			</Provider>
		</BrowserRouter>,
		document.getElementById('root')
	);
}

renderEntireTree(store.getState())

store.subscribe(() => {
	let state = store.getState()
	renderEntireTree(state)
})