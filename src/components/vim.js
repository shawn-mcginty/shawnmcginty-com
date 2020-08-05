import React, { useState } from 'react';


export default function Vim({ pushText }) {
	const [isAboutHover, setAboutHover] = useState(false);
	const [isProjectsHover, setProjectsHover] = useState(false);
	const [isThingsHover, setThingsHover] = useState(false);
	const [isContactHover, setContactHover] = useState(false);
	const linkClassName = 'inline-block hover:border hover:border-blue-700 py-2 px-4 hover:bg-blue-700 text-blue-700 hover:text-white';
	const whitespaceClassName = "text-gray-500 select-none";
	const hoverWhitespaceClassName = "text-blue-700 select-none";
	const tokenClassName = "text-blue-800";
	const tokenHoverClassName = "text-white";
	
	const getWhitespaceeClass = hover => hover ? hoverWhitespaceClassName : whitespaceClassName;
	const getTokenClass = hover => hover ? tokenHoverClassName : tokenClassName;

	return <div className="h-full max-h-full">
		<ul className="flex flex-col font-mono text-lg">
			<li className="mr-10">
				<a
					className={linkClassName}
					href="#"
					onMouseEnter={() => {
						setAboutHover(true);
						pushText('about-me --help');
					}}
					onMouseLeave={() => setAboutHover(false)}
				>
					<span className={getWhitespaceeClass(isAboutHover)}>&middot;&middot;&middot;&middot;</span>
					<span className={getTokenClass(isAboutHover)}>##</span>
					<span className={getWhitespaceeClass(isAboutHover)}>&middot;</span>
					About
					<span className={getWhitespaceeClass(isAboutHover)}>&middot;</span>
					Me
					<span className={getWhitespaceeClass(isAboutHover)}>$</span>
				</a>
			</li>
			<li className="mr-10">
				<a
					className={linkClassName}
					href="#"
					onMouseEnter={() => setProjectsHover(true)}
					onMouseLeave={() => setProjectsHover(false)}
				>
					<span className={getWhitespaceeClass(isProjectsHover)}>&middot;&middot;&middot;&middot;</span>
					<span className={getTokenClass(isProjectsHover)}>##</span>
					<span className={getWhitespaceeClass(isProjectsHover)}>&middot;</span>
					Projects
					<span className={getWhitespaceeClass(isProjectsHover)}>$</span>
				</a>
			</li>
			<li className="mr-10">
				<a
					className={linkClassName}
					href="#"
					onMouseEnter={() => setThingsHover(true)}
					onMouseLeave={() => setThingsHover(false)}
				>
					<span className={getWhitespaceeClass(isThingsHover)}>&middot;&middot;&middot;&middot;</span>
					<span className={getTokenClass(isThingsHover)}>##</span>
					<span className={getWhitespaceeClass(isThingsHover)}>&middot;</span>
					Things
					<span className={getWhitespaceeClass(isThingsHover)}>&middot;</span>
					I
					<span className={getWhitespaceeClass(isThingsHover)}>&middot;</span>
					Like
					<span className={getWhitespaceeClass(isThingsHover)}>$</span>
				</a>
			</li>
			<li className="mr-10">
				<a
					className={linkClassName}
					href="#"
					onMouseEnter={() => setContactHover(true)}
					onMouseLeave={() => setContactHover(false)}
				>
					<span className={getWhitespaceeClass(isContactHover)}>&middot;&middot;&middot;&middot;</span>
					<span className={getTokenClass(isContactHover)}>##</span>
					<span className={getWhitespaceeClass(isContactHover)}>&middot;</span>
					Contact
					<span className={getWhitespaceeClass(isContactHover)}>&middot;</span>
					Me
					<span className={getWhitespaceeClass(isContactHover)}>$</span>
				</a>
			</li>
		</ul>
		<span className={whitespaceClassName}>EOF</span>
	</div>;
};
