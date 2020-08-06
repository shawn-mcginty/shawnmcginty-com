import React from 'react';

import Sp from './space';
import Br from './lineBreak';
import EOF from './eof';

export default function AboutMe() {
	return <p>
		<strong>About<Sp/>Me</strong><Br/>
		<span className="text-blue-700 font-semibold">========</span><Br/>
		<Br/>
		👋<Sp/>Greetings<Sp/>to<Sp/>you!<Br/>
		<Br/>
		<span className="text-blue-700 font-semibold">####<Sp/>Who<Sp/>Am<Sp/>I?</span><Br/>
		My<Sp/>name<Sp/>is<Sp/>Shawn.<Sp/>I<Sp/>live<Sp/>in<Sp/>the<Sp/>Greater<Sp/>Houston<Sp/>area<Sp/>in<Sp/>Southeast<Sp/>Texas<Br/>
		with<Sp/>my<Sp/>beautiful<Sp/>wife<Sp/>and<Sp/>three<Sp/>amazing<Sp/>kids.<Sp/>My<Sp/>hobbies<Sp/>and interests<Br/>
		include<Sp/>reading<Sp/><em>_(mostly<Sp/>non-fiction)_</em>,<Sp/>playing<Sp/>video<Sp/>games<Sp/><em>_(RPGs<Sp/>and<Br/>
		fighting<Sp/>games<Sp/>baby!)_</em>,<Sp/>writing<Sp/>code,<Sp/>and<Sp/>skateboarding!<Br/>
		<Br/>
		<span className="text-blue-700 font-semibold">####<Sp/>What<Sp/>Do<Sp/>I<Sp/>Do?</span><Br/>
		I<Sp/>write<Sp/>code<Sp/>and<Sp/>solve<Sp/>problems.<Sp/>Working<Sp/>almost<Sp/>exclusively<Sp/>with<Sp/>web<Br/>
		technologies,<Sp/>but<Sp/>I<Sp/>love<Sp/>interesting<Sp/>problems<Sp/>in<Sp/>any<Sp/>area<Sp/>of<Sp/>the<Sp/>software<Br/>
		world.<Sp/>Currently<Sp/>a<Sp/>Senior<Sp/>Software<Sp/>Engineer<Sp/>
		<a href="https://traclabs.com" className="underline text-blue-500">@traclabs</a>
		<Sp/>where<Sp/>our<Sp/>team<Br/>
		provides<Sp/>mission<Sp/>critical<Sp/>software<Sp/>at<Sp/>a<Sp/>global<Sp/>scale.<Br/>
		<Br/>
		Thank<Sp/>you<Sp/>for<Sp/>taking<Sp/>the<Sp/>time<Sp/>to<Sp/>read<Sp/>my<Sp/>short<Sp/>bio.<Sp/>😃<Br/>
		<EOF/>
	</p>;
};
