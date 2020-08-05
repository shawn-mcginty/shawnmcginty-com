import React, { useState } from 'react';

import Clock from './clock';
import Terminal from './terminal';
import Vim from './vim';

export default function Tmux() {
	const [text, setText] = useState(['some long', 'lines of text', 'actually they are short']);
	const pushText =  newText => setText([...text, newText]);
	return <div className="flex flex-1 flex-col h-full max-h-full min-h-0">
		<div className="flex mb-1 mt-1 mr-1 ml-1 flex-1 min-h-0">
			<div className="min-h-0 w-0 md:w-1/3 lg:w-1/3 xl:w-1/3 h-full max-h-full hidden sm:hidden md:block lg:block xl:block" style={{ borderRight: '1px dashed #718096' }}>
				<Vim pushText={(newText) => pushText(newText)}/>
			</div>
			<div className="flex-1 h-full max-h-full min-h-0">
				<Terminal text={text}/>
			</div>
		</div>
		<div className="flex bg-green-700 ml-1 mr-1 mb-1 font-mono text-gray-800">
			<div className="w-1/2 text-left ml-1">
				[0] 0:zsh*
			</div>
			<div className="w-1/2 text-right mr-1">
				<Clock/>
			</div>
		</div>
	</div>
};
