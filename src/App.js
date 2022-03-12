import React from 'react'
import './App.css';
import Header from './components/Header/Header';
import NavBar from './components/NavBar/NavBar';
import Profile from './components/Profile/Profile';
import Dialogs from './components/Dialogs/Dialogs';
import Music from "./components/Music/Music"
import News from "./components/News/News"
import { BrowserRouter, Routes, Route } from 'react-router-dom';



const App = (props) => {

	return (
		<BrowserRouter>
			<div className="app-wrapper">
				<Header />
				<NavBar links={props.state.navBarPage.links} />
				<div className="app-wrapper-content">
					<Routes>
						<Route path="/profile" element={<Profile />} />
						<Route path="/dialogs/*" element={<Dialogs states={props.state.profilePage} />} />
						<Route path="/news" element={<News />} />
						<Route path="/music" element={<Music />} />
					</Routes>
				</div>
			</div >
		</BrowserRouter>
	)
}



export default App;
