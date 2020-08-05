import React from 'react';

import Header from './header';
import Tmux from './tmux';

import './mainPage.css';

export default function MainPage() {
	return <div className="flex flex-col h-screen max-h-screen min-h-0">
		<Header></Header>
		<Tmux></Tmux>
	</div>
};
