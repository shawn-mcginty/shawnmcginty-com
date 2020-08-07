import React from 'react';

import MainPage from '../components/mainPage';
import displays from '../assets/displayEnum';

export default function Home() {
	return <MainPage display={displays.contact}></MainPage>
};
