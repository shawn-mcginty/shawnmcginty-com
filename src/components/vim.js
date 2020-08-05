import React, { useState, useCallback } from 'react';

import BashSymbol from './bashSymbol';

const framesPerChar = 2;
const enterDelay = 40;

const typeAnimation = (setText, text, setInputText, newLines) => new Promise((resolve) => {
	const animate = (setInput, currentInputText, remainingInputText, framesToSkip) => {
		if (framesToSkip > 0) {
			window
				.requestAnimationFrame(() => animate(setInput, currentInputText, remainingInputText, framesToSkip - 1));
			return;
		}

		if (remainingInputText.length > 0) {
			const [ nextChar, ...restChars ] = remainingInputText;
			const newInputText = `${currentInputText}${nextChar}`;
			setInput(newInputText);

			if (restChars.length > 0) {
				window.requestAnimationFrame(() => animate(setInput, newInputText, restChars, framesPerChar));
				return;
			}

			window.requestAnimationFrame(() => animate(setInput, newInputText, restChars, enterDelay));
			return;
		}

		setInput('');
		
		const [ cmd, ...restOfLines ] = newLines;
		const newSetOflines = [<><BashSymbol/>{cmd}</>, ...restOfLines];
		setText([...text, ...newSetOflines]);
		resolve();
	};

	animate(setInputText, '', newLines[0].props.children, framesPerChar);
});

export default function Vim({ setText, text, setInputText, isAnimating, setIsAnimating, disabled }) {
	const [isAboutHover, setAboutHover] = useState(false);
	const [isProjectsHover, setProjectsHover] = useState(false);
	const [isThingsHover, setThingsHover] = useState(false);
	const [isContactHover, setContactHover] = useState(false);
	const linkClassName = `inline-block py-2 px-4 text-blue-700${disabled ? ' cursor-not-allowed' : ' hover:border hover:border-blue-700 hover:bg-blue-700 hover:text-white'}`;
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
						if (disabled) {
							return;
						}

						setAboutHover(true);
						if (isAnimating) {
							return;
						}

						const newLines = [
							<>about-me --help</>,
							<>A short bit if information about myself.</>,
						];
						setIsAnimating(true);
						typeAnimation(setText, text, setInputText, newLines)
							.then(() => setIsAnimating(false));
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
					onMouseEnter={() => {
						if (disabled) {
							return;
						}

						setProjectsHover(true);
						if (isAnimating) {
							return;
						}

						const newLines = [
							<>show-projects --help</>,
							<>Some of the projects I have <span className="text-green-800">collaborated</span> on.</>,
							<>Most are on my <a className="text-blue-700 underline" href="https://github.com/shawn-mcginty">GitHub</a> profile.</>,
						];
						setIsAnimating(true);
						typeAnimation(setText, text, setInputText, newLines)
							.then(() => setIsAnimating(false));
					}}
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
					onMouseEnter={() => {
						if (disabled) {
							return;
						}

						setThingsHover(true);
						if (isAnimating) {
							return;
						}

						const newLines = [
							<>things-i-like --help</>,
							<>Technologies that I love to work with.</>,
						];
						setIsAnimating(true);
						typeAnimation(setText, text, setInputText, newLines)
							.then(() => setIsAnimating(false));
					}}
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
					onMouseEnter={() => {
						if (disabled) {
							return;
						}

						setContactHover(true);
						if (isAnimating) {
							return;
						}

						const newLines = [
							<>contact-me --help</>,
							<>Some of my contact info is available here.</>,
							<>Please feel free to DM me.</>,
						];
						setIsAnimating(true);
						typeAnimation(setText, text, setInputText, newLines)
							.then(() => setIsAnimating(false));
					}}
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
