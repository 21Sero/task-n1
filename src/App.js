import React from 'react';
import Card from './components/Card/Card';
import Header from './components/header/Header';
import Instructions from './components/instructions/Instructions';
import Footer from './components/footer/Footer';
import './App.css';


import { useSelector } from 'react-redux';

function App() {
	const { cards } = useSelector(state => state)

	return (
		<div className="app">
				<Header />
			<div className="card-container">
				{cards.map((card) => (
					<Card key={card.id} {...card} />
				))}
			</div>
			<div className="container">
				<Instructions />
			</div>
			<Footer />
		</div>
	);
}

export default App;
