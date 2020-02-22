import { useEffect, useState } from 'react';
// import { useLocalStorage } from './useLocalStorage';

export const useDarkMode = () => {
	const [ darkMode, setDarkMode ] = useState('status');

	useEffect(
		() => {
			if (darkMode === true) {
				// manipulating DOM by selecting "body" then adding the class list to it which enables dark-mode css
				document.querySelector('body').classList.add('dark-mode');
				// does making it !== true make a difference thank === true?
			} else if (darkMode === false) {
				document.querySelector('body').classList.remove('dark-mode');
			}
		},
		[ darkMode ]
	);

	return [ darkMode, setDarkMode ];
};
