import React, { Component } from 'react';
import axios from 'axios';

import PlayerCard from './components/PlayerCard';
import './App.scss';

class App extends Component {
	constructor() {
		super();
		this.state = {
			playerData: []
		};
	}

	componentDidMount() {
		axios('http://localhost:5000/api/players')
			.then((player) => this.setState({ playerData: player.data }))
			.catch((err) => console.log('No Player Data', err));
		console.log('cDM is running');
	}

	render() {
		console.log(this.state.playerData);
		return (
			<div className="App">
				<PlayerCard players={this.state.playerData} />
			</div>
		);
	}
}

export default App;
