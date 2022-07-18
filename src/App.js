import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Nav from './components/Nav';
import About from './components/About';
import Home from './components/Home';

const App = () => {
	return (
		<Router>
			<div className="App">
				<Nav />
				<Routes>
					<Route path="/about" element={<About />} />
					<Route path="/home" element={<Home />} />
				</Routes>
			</div>
		</Router>
	);
};

export default App;
