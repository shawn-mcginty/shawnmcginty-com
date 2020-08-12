import React from 'react';
import { Helmet } from 'react-helmet';

import Header from './header';
import Tmux from './tmux';

import './mainPage.css';

/*  Matomo */
if (typeof window !== 'undefined') {
	var _paq = window._paq = window._paq || [];
	/* tracker methods like "setCustomDimension" should be called before "trackPageView" */
	_paq.push(['trackPageView']);
	_paq.push(['enableLinkTracking']);
	(function() {
		var u="//matomo.shawnmcginty.com/";
		_paq.push(['setTrackerUrl', u+'matomo.php']);
		_paq.push(['setSiteId', '3']);
		var d=document, g=d.createElement('script'), s=d.getElementsByTagName('script')[0];
		g.type='text/javascript'; g.async=true; g.src=u+'matomo.js'; s.parentNode.insertBefore(g,s);
	})();
}
/* End Matomo Code */
export default function MainPage({ display }) {
	return <div className="flex flex-col h-screen max-h-screen min-h-0">
		<Helmet>
			<html lang="en" />
			<meta charSet="utf-8" />
			<title>Shawn McGinty - Full-stack Software Creator</title>
		</Helmet>
		<Header />
		<Tmux originalDisplay={display}/>
	</div>
};
