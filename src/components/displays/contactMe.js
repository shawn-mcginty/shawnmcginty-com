import React from 'react';

import Sp from './space';
import Br from './lineBreak';
import EOF from './eof';

export default function ContactMe() {
	return <p>
		<strong>Contact<Sp/>Me</strong><Br/>
		<span className="text-blue-700 font-semibold">==========</span><Br/>
		<Br/>
		I'm<Sp/>open<Sp/>for<Sp/>technical<Sp/>questions,<Sp/>comments,<Sp/>friends<Sp/>requests,<Sp/>or<Sp/>just<Sp/>general<Sp/>pings.<Br/>
		<Br/>
		<span className="text-blue-800">*</span><Sp/>Twitter<Sp/>-<Sp/>
		<a href="https://twitter.com/shawn_mcginty" className="underline text-blue-500">@shawn_mcginty</a><Br/>
		<span className="text-blue-800">*</span><Sp/>GitHub<Sp/>-<Sp/>
		<a href="https://github.com/shawn-mcginty" className="underline text-blue-500">shawn-mcginty</a><Br/>
		<span className="text-blue-800">*</span><Sp/>Email<Sp/>-<Sp/>
		<a href="mailto:mcginty.shawn@gmail.com" className="underline text-blue-500">mcginty.shawn@gmail.com</a><Br/>
		<EOF/>
	</p>;
};
