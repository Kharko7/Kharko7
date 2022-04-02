import React from 'react'
import './App.css';
import Header from './components/Header/Header';
import NavBar from './components/NavBar/NavBar';
import Profile from './components/Profile/Profile';
import Dialogs from './components/Dialogs/Dialogs';
import Music from "./components/Music/Music"
import News from "./components/News/News"
import { Routes, Route } from 'react-router-dom';
import Users from './components/Users/Users';
import TrainingRedux from './components/Training-Redux/TrainingRedux';


const App = (props) => {
	return (

		<div className="app-wrapper">
			<Header />
			<NavBar />
			<div className="app-wrapper-content">
				<Routes>
					<Route path="/profile" element={<Profile profilePage={props.state.profileReducer} dispatch={props.dispatch} />} />
					<Route path="/dialogs/*" element={<Dialogs states={props.state.dialogsPage} dispatch={props.dispatch} showMessageDialog={props.showMessageDialog} />} />
					<Route path="/news" element={<News />} />
					<Route path="/music" element={<Music />} />
					<Route path="/users" element={<Users />} />
					<Route path="/trainingRedux" element={<TrainingRedux />} />
				</Routes>
			</div>
		</div >
	)
}



export default App;
