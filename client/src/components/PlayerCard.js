import React, { Component } from 'react';
import styled from 'styled-components';

class PlayerCard extends Component {
	constructor(props) {
		super(props);
	}
	render() {
		console.log('player card render running');

		return (
			<div>
				{this.props.players.map((player) => {
					return (
						<div className="players-card">
							<h1>{player.name}</h1>
							<h4>Country: {player.country}</h4>
							<h4>Searches: {player.searches}</h4>
						</div>
					);
				})}
			</div>
		);
	}
}

export default PlayerCard;
