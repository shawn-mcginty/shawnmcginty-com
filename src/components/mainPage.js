import React from 'react';
import { Helmet } from 'react-helmet';

import Header from './header';
import Tmux from './tmux';

import './mainPage.css';

export default function MainPage() {
	return <div className="flex flex-col h-screen max-h-screen min-h-0">
		<Helmet>
			<html lang="en" />
			<meta charSet="utf-8" />
			<title>Shawn McGinty - Full-stack Software Creator</title>
		</Helmet>
		<Header />
		<Tmux />
	</div>
};
