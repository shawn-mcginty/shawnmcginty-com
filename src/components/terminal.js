import React, { useRef, useEffect } from 'react';

export default function Terminal({ text, inputText }) {
	const terminalContainerEl = useRef(null);

	useEffect(() => {
		terminalContainerEl.current.scrollTop = terminalContainerEl.current.scrollHeight;
	});

	return <div className="h-full max-h-full ml-1 font-mono min-h-0">
		<div ref={terminalContainerEl} className="overflow-scroll max-h-full h-full min-h-0">
			<div className="terminal">
				<pre>
					{ text.map(line => <>{`${line}\n`}</>) }
				</pre>
			</div>
			<div className="input">
				<span>$</span>
				<span>{inputText}</span>
				<span className="blinking">&nbsp;</span>
			</div>
		</div>
	</div>
};
