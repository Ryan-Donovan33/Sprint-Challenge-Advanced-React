import React from 'react';
import { render } from '@testing-library/react';
import PlayerCard from './PlayerCard';

test('Player Card renders without crashing!', () => {
	render(<PlayerCard />);
});

test('testing for players name', () => {
	const { getByText } = render(<PlayerCard />);

	getByText(/country/i);
});

test('testing for players name', () => {
	const { getByText } = render(<PlayerCard />);

	getByText(/name/i);
});
