import React from 'react';
import { RiGithubLine, RiTwitterLine, RiMenuLine } from 'react-icons/ri';

export default function Header() {
	return <nav className="flex items-center justify-between flex-wrap bg-orange-600 p-0">
		<div className="flex flex-col items-start flex-shrink-0 text-white mr-6 ml-1">
			<p className="font-sans font-semibold text-5xl tracking-wide">
				SHAWN McGINTY
			</p>
			<p className="font-mono font-light text-gray-300 mb-1" style={{ marginTop: '-14px'}}>
				// Full-stack Software Creator
			</p>
		</div>
		<div className="mr-2 mb-2 ml-2">
			<a href="https://github.com/shawn-mcginty" className="mr-2 inline-block text-sm px-4 py-2 leading-none border rounded text-white border-white hover:border-transparent hover:text-orange-600 hover:bg-white mt-4 lg:mt-0">
				<RiGithubLine className="mr-1 inline" />
				GitHub
			</a>
			<a href="https://twitter.com/shawn_mcginty" className="mr-2 inline-block text-sm px-4 py-2 leading-none border rounded text-white border-white hover:border-transparent hover:text-orange-600 hover:bg-white mt-4 lg:mt-0">
				<RiTwitterLine className="mr-1 inline" />
				Twitter
			</a>
			<a href="#" className="inline-block px-4 py-2 text-white">
				<RiMenuLine/>
			</a>
		</div>
	</nav>
};
