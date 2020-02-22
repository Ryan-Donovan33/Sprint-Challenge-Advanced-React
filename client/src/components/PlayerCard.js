import React, { Component } from 'react';
import styled from 'styled-components';
import { number } from 'prop-types';

class PlayerCard extends Component {
	constructor(props) {
		super(props);
	}
	render() {
		console.log('player card render running');

		return (
			<div className="world-cup">
				{/* mapping over each individual player and then returning each player and the data assosciated wtih them. */}
				{this.props.players.map((player) => {
					return (
						<div className="players-card">
							<h1 key={player.toString()}>{player.name}</h1>
							<h4 key={player.toString()}>Country: {player.country}</h4>
							<h4 key={player.toString()}>Searches: {player.searches}</h4>
							<p key={player.toString()}>ID: {player.id}</p>
						</div>
					);
				})}
			</div>
		);
	}
}

export default PlayerCard;
