import React, { useRef, useEffect } from 'react';

import BashSymbol from './bashSymbol';

export default function Terminal({ text, inputText, disabled }) {
	const terminalContainerEl = useRef(null);

	useEffect(() => {
		terminalContainerEl.current.scrollTop = terminalContainerEl.current.scrollHeight;
	});

	return <div className="h-full max-h-full ml-1 font-mono min-h-0">
		<div ref={terminalContainerEl} className="overflow-scroll max-h-full h-full min-h-0">
			<div className="terminal">
				{ text.map(line => <>{line}<br/></>) }
			</div>
			<div className={`input${disabled ? ' hidden' : ''}`}>
				<BashSymbol/>
				<span>{inputText}</span>
				<span className="blinking">&nbsp;</span>
			</div>
		</div>
	</div>
};
