import React, { useState } from 'react';
import { RiGithubLine, RiTwitterLine, RiMenuLine } from 'react-icons/ri';

export default function Header() {
	const [showMobileNav, setShowMobileNav] = useState(false);

	return <nav className="flex items-center justify-between flex-wrap bg-orange-600 p-0">
		<div className="flex flex-col items-start flex-shrink-0 text-white ml-1">
			<p className="font-sans font-semibold text-5xl tracking-wide hidden md:block lg:block xl:block">
				SHAWN McGINTY
			</p>
			<p className="font-sans font-semibold text-4xl tracking-wide block md:hidden lg:hidden xl:hidden">
				SHAWN McGINTY
			</p>
			<p className="font-mono font-light text-gray-300 mb-1" style={{ marginTop: '-14px'}}>
				&#47;&#47; Full-stack Software Creator
			</p>
		</div>
		<div className="mr-2 mb-2 ml-2">
			<a href="https://github.com/shawn-mcginty" className="mr-2 hidden md:inline-block lg:inline-block xl:inline-block text-sm px-4 py-2 leading-none border rounded text-white border-white hover:border-transparent hover:text-orange-600 hover:bg-white mt-4 lg:mt-0">
				<RiGithubLine className="mr-1 inline" />
				GitHub
			</a>
			<a href="https://twitter.com/shawn_mcginty" className="mr-2 hidden md:inline-block lg:inline-block xl:inline-block text-sm px-4 py-2 leading-none border rounded text-white border-white hover:border-transparent hover:text-orange-600 hover:bg-white mt-4 lg:mt-0">
				<RiTwitterLine className="mr-1 inline" />
				Twitter
			</a>
			<button className="inline-block px-4 py-2 text-white md:hidden lg:hidden xl:hidden" onClick={() => setShowMobileNav(!showMobileNav)}>
				<RiMenuLine/>
			</button>
		</div>
		{
			showMobileNav &&
				<div className="items-end flex flex-col w-full md:hidden lg:hidden xl:hidden">
					<a href="/about-me" className="px-4 py-2 text-white hover:text-gray-400">
						About Me
					</a>
					<a href="https://blog.shawnmcginty.com" className="px-4 py-2 text-white hover:text-gray-400">
						Blog
					</a>
					<a href="/things" className="px-4 py-2 text-white hover:text-gray-400">
						Things I Like
					</a>
					<a href="/contact-me" className="px-4 py-2 text-white hover:text-gray-400">
						Contact Me
					</a>
				</div>
		}
	</nav>
};
