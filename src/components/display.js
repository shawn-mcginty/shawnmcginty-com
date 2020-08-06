import React from 'react';

import displays from '../assets/displayEnum';
import AboutMe from './displays/aboutMe';
import Things from './displays/things';
import ContacMe from './displays/contactMe';

export default function Display({ tmuxState }) {
	let displayComp = <></>;

	switch (tmuxState.display) {
		case displays.aboutMe:
			displayComp = <AboutMe/>;
			break;
		case displays.things:
			displayComp = <Things/>;
			break;
		case displays.contact:
			displayComp = <ContacMe/>;
			break;
		default:
			displayComp = <></>;
	}

	return <div className="overflow-scroll max-h-full min-h-0 h-full w-full max-w-full min-w-0 text-gray-800 font-mono break-words">
		{displayComp}
	</div>
};

