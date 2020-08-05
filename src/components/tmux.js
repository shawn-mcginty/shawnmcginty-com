import React, { useState, useEffect } from 'react';

import Clock from './clock';
import Terminal from './terminal';
import Vim from './vim';

import DebugLvl from './logLevels/debugLvl';
import WarnLvl from './logLevels/warnLvl';
import ErrorLvl from './logLevels/errorLvl';
import InfoLvl from './logLevels/infoLvl';

const stdWait = 300;

const printLinesAndWait = (lines, text, setText, wait) => new Promise((resolve) => {
	window.requestAnimationFrame(() => {
		const newText = [...text, ...lines];
		setText(newText);
		setTimeout(() => resolve(newText), wait);
	});
});

export default function Tmux() {
	const [text, setText] = useState([]);
	const [inputText, setInputText] = useState('');
	const [isAnimating, setIsAnimating] = useState(false);
	const [isInitAnimationShown, setIsInitAnimationShown] = useState(false);
	const [isInitDone, setIsInitDone] = useState(false);

	useEffect(() => {
		if (isInitAnimationShown) {
			return;
		}

		setIsInitAnimationShown(true);
		printLinesAndWait([<>Last login: Whoops, maybe I should keep track of that</>], text, setText, stdWait/2)
			.then(newText => printLinesAndWait([<>
				<span className="text-green-700 font-semibold">user</span>
				@
				<span className="text-green-700 font-semibold">shawnmcginty.com</span>
			</>], newText, setText, stdWait/2))
			.then(newText => printLinesAndWait([<></>], newText, setText, stdWait/3))
			.then(newText => printLinesAndWait([<></>], newText, setText, stdWait/3))
			.then(newText => printLinesAndWait([<>
				<DebugLvl/>Initializing fake tmux UI thingy...
			</>], newText, setText, stdWait))
			.then(newText => printLinesAndWait([<>
				<WarnLvl/>Downloading 30,000 npm packages...
			</>], newText, setText, stdWait))
			.then(newText => printLinesAndWait([<>
				<WarnLvl/>Don't worry it's totally safe...
			</>], newText, setText, stdWait*3))
			.then(newText => printLinesAndWait([<>
				<WarnLvl/>Some (most) downloads have failed. These packages were loaded from cahce. Which is probably fine.
			</>], newText, setText, stdWait))
			.then(newText => printLinesAndWait([<>
				<DebugLvl/>Reticulating splines...
			</>], newText, setText, stdWait*2))
			.then(newText => printLinesAndWait([<>
				<DebugLvl/>Filler text...
			</>], newText, setText, stdWait/2))
			.then(newText => printLinesAndWait([<>
				<DebugLvl/>Filler text...
			</>], newText, setText, stdWait/2))
			.then(newText => printLinesAndWait([<>
				<DebugLvl/>Filler text...
			</>], newText, setText, stdWait/2))
			.then(newText => printLinesAndWait([<>
				<DebugLvl/>Filler text...
			</>], newText, setText, stdWait/2))
			.then(newText => printLinesAndWait([<>
				<DebugLvl/>** Reminder to pay attention to log levels.
			</>], newText, setText, stdWait))
			.then(newText => printLinesAndWait([<>
				<ErrorLvl/>EFAULT - Things are straight up broken.
			</>], newText, setText, stdWait))
			.then(newText => printLinesAndWait([<>
				<InfoLvl/>EFALSEALARM - All is well.
			</>], newText, setText, stdWait))
			.then(newText => printLinesAndWait([<>
				<InfoLvl/>🎉🎉 Fake Initialization has finished! 🎉🎉
			</>], newText, setText, 1))
			.then(() => setIsInitDone(true));
	});

	return <div className="flex flex-1 flex-col h-full max-h-full min-h-0">
		<div className="flex mb-1 mt-1 mr-1 ml-1 flex-1 min-h-0">
			<div className="min-h-0 h-full max-h-full hidden sm:hidden md:block lg:block xl:block" style={{ borderRight: '1px dashed #718096' }}>
				<Vim
					setText={setText}
					text={text}
					setInputText={setInputText}
					isAnimating={isAnimating}
					setIsAnimating={setIsAnimating}
					disabled={!isInitDone}
				/>
			</div>
			<div className="flex-1 h-full max-h-full min-h-0 pl-2">
				<Terminal text={text} inputText={inputText} disabled={!isInitDone}/>
			</div>
		</div>
		<div className="flex bg-green-500 ml-1 mr-1 mb-1 font-mono text-gray-800">
			<div className="w-1/2 text-left ml-1">
				[0] 0:zsh*
			</div>
			<div className="w-1/2 text-right mr-1">
				<Clock/>
			</div>
		</div>
	</div>
};
