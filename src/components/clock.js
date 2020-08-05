import React, { useState, useRef, useEffect } from 'react';

const useInterval = (callback, delay) => {
	const savedCallback = useRef();

	// Remember the latest callback.
	useEffect(() => {
		savedCallback.current = callback;
	}, [callback]);

	// Set up the interval.
	useEffect(() => {
		function tick() {
			savedCallback.current();
		}
		if (delay !== null) {
			let id = setInterval(tick, delay);
			return () => clearInterval(id);
		}
	}, [delay]);
};

const twoDigitStr = num => (num < 10) ? `0${num}` : `${num}`;

const monthStr = mon => {
	switch (mon) {
		case 1:
			return 'Jan';
		case 2:
			return 'Feb';
		case 3:
			return 'Mar';
		case 4:
			return 'Apr';
		case 5:
			return 'May';
		case 6:
			return 'Jun';
		case 7:
			return 'Jul';
		case 8:
			return 'Aug';
		case 9:
			return 'Sep';
		case 10:
			return 'Oct';
		case 11:
			return 'Nov';
		case 12:
			return 'Dec';
	}
}

const formatDate = (d) => {
	const year = d.getFullYear();
	const smallYear = year - 2000;
	const month = d.getMonth() + 1;
	const date = d.getDate();
	const hours = d.getHours();
	const minutes = d.getMinutes();

	return `${twoDigitStr(hours)}:${twoDigitStr(minutes)} ${twoDigitStr(date)}-${monthStr(month)}-${twoDigitStr(smallYear)}`;
}

export default function Clock() {
	const currentTime = new Date();

	const [time, setTime] = useState(formatDate(currentTime));

	useInterval(() => setTime(() => formatDate(new Date())), 1000);

	return <span>"shawnmcginty.com" {time}</span>
};
