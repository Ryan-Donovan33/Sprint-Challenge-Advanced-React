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
						<div>
							<p>{player.name}</p>
							<p>Country: {player.country}</p>
							<p>Searches: {player.searches}</p>
						</div>
					);
				})}
			</div>
		);
	}
}

export default PlayerCard;
