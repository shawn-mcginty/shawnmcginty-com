import React, { useState } from 'react';

import TypeAnimator from '../assets/typeAnimator';
import displays from '../assets/displayEnum';

const typeAnimation = (setText, text, setInputText, newLines) => {
	const animator = TypeAnimator.getAnimator();
	return animator.cancelAndAnimate(setText, text, setInputText, newLines)
		.catch(() => {}); // swallow this error
};

const toggleDisplay = (display, setText, text, setInputText, tmuxState, tmuxDispatch, newLines) => {
	if (tmuxState.display === display) {
		tmuxDispatch({ type: 'hide-display' });
		return;
	}

	typeAnimation(setText, text, setInputText, newLines)
		.then(() => {
			tmuxDispatch({ type: 'show-display', display });
		});
};

export default function Vim({ setText, text, setInputText, disabled, tmuxState, tmuxDispatch }) {
	const [isAboutHover, setAboutHover] = useState(false);
	const [isThingsHover, setThingsHover] = useState(false);
	const [isContactHover, setContactHover] = useState(false);
	const [isBlogHover, setBlogHover] = useState(false);
	const linkClassName = `focus:outline-none inline-block py-2 px-4 text-blue-700${disabled ? ' cursor-not-allowed' : ' hover:border hover:border-blue-700 hover:bg-blue-700 hover:text-white'}`;
	const activeLinkClassName = 'focus:outline-none inline-block py-2 px-4 text-white bg-blue-600 border-blue-600 hover:border-blue-700 hover:bg-blue-700';
	const whitespaceClassName = 'text-gray-500 select-none';
	const hoverWhitespaceClassName = `${disabled ? 'text-gray-500' : 'text-blue-700'} select-none`;
	const tokenClassName = 'text-blue-800';
	const tokenHoverClassName = disabled ? 'text-blue-800' : 'text-white';
	const activeTokenClassName = 'text-white';
	const activeWhitespaceClassName = 'text-blue-600';

	const isAboutMeActive = tmuxState.display === displays.aboutMe;
	const isThingsActive = tmuxState.display === displays.things;
	const isContactMeActive = tmuxState.display === displays.contact;

	const getWhitespaceeClass = (hover, active = false) => {
		if (hover) {
			return hoverWhitespaceClassName;
		}

		if (active) {
			return activeWhitespaceClassName;
		}

		return whitespaceClassName;
	};
	const getTokenClass = (hover, active = false) => {
		if (hover) {
			return tokenHoverClassName;
		}

		if (active) {
			return activeTokenClassName;
		}

		return tokenClassName;
	};

	return <div className="h-full max-h-full">
		<ul className="flex flex-col font-mono text-lg">
			<li className="mr-10">
				<button
					className={ isAboutMeActive ? activeLinkClassName :  linkClassName }
					onMouseEnter={() => {
						setAboutHover(true);
						if (disabled) {
							return;
						}

						if (isAboutMeActive) {
							return
						}

						const newLines = [
							<>about-me --help</>,
							<>A short bit if information about myself.</>,
						];
						typeAnimation(setText, text, setInputText, newLines);
					}}
					onMouseLeave={(e) => {
						e.target.blur();
						setAboutHover(false);
					}}
					onClick={(e) => {
						e.target.blur();
						const newLines = [
							<>about-me</>,
							<>Displaying "About Me" in another pane...</>
						];
						toggleDisplay(displays.aboutMe, setText, text, setInputText, tmuxState, tmuxDispatch, newLines);
					}}
				>
					<span className={getWhitespaceeClass(isAboutHover, isAboutMeActive)}>&middot;&middot;&middot;&middot;</span>
					<span className={getTokenClass(isAboutHover, isAboutMeActive)}>##</span>
					<span className={getWhitespaceeClass(isAboutHover, isAboutMeActive)}>&middot;</span>
					About
					<span className={getWhitespaceeClass(isAboutHover, isAboutMeActive)}>&middot;</span>
					Me
					<span className={getWhitespaceeClass(isAboutHover, isAboutMeActive)}>$</span>
				</button>
			</li>
			<li className="mr-10">
				<a
					href="https://medium.com/@shawn.mcginty"
					className={ linkClassName }
					onMouseEnter={() => {
						setBlogHover(true);
						if (disabled) {
							return;
						}

						const newLines = [
							<>blog --help</>,
							<>Check out my profile at medium.com.</>,
						];
						typeAnimation(setText, text, setInputText, newLines);
					}}
					onMouseLeave={(e) => {
						e.target.blur();
						setBlogHover(false);
					}}
				>
					<span className={getWhitespaceeClass(isBlogHover, false)}>&middot;&middot;&middot;&middot;</span>
					<span className={getTokenClass(isBlogHover, false)}>##</span>
					<span className={getWhitespaceeClass(isBlogHover, false)}>&middot;</span>
					Blog
					<span className={getWhitespaceeClass(isBlogHover, false)}>$</span>
				</a>
			</li>
			
			<li className="mr-10">
				<button
					className={ isThingsActive ? activeLinkClassName : linkClassName }
					onMouseEnter={() => {
						if (disabled) {
							return;
						}

						setThingsHover(true);

						if (isThingsActive) {
							return
						}

						const newLines = [
							<>things-i-like --help</>,
							<>Technologies that I love to work with.</>,
						];
						typeAnimation(setText, text, setInputText, newLines);
					}}
					onMouseLeave={(e) => {
						e.target.blur();
						setThingsHover(false);
					}}
					onClick={(e) => {
						e.target.blur();
						const newLines = [
							<>things-i-like</>,
							<>Displaying "Things I Like" in another pane...</>
						];
						toggleDisplay(displays.things, setText, text, setInputText, tmuxState, tmuxDispatch, newLines);
					}}
				>
					<span className={getWhitespaceeClass(isThingsHover, isThingsActive)}>&middot;&middot;&middot;&middot;</span>
					<span className={getTokenClass(isThingsHover, isThingsActive)}>##</span>
					<span className={getWhitespaceeClass(isThingsHover, isThingsActive)}>&middot;</span>
					Things
					<span className={getWhitespaceeClass(isThingsHover, isThingsActive)}>&middot;</span>
					I
					<span className={getWhitespaceeClass(isThingsHover, isThingsActive)}>&middot;</span>
					Like
					<span className={getWhitespaceeClass(isThingsHover, isThingsActive)}>$</span>
				</button>
			</li>
			<li className="mr-10">
				<button
					className={ isContactMeActive ? activeLinkClassName : linkClassName }
					onMouseEnter={() => {
						if (disabled) {
							return;
						}

						setContactHover(true);

						if (isContactMeActive) {
							return
						}

						const newLines = [
							<>contact-me --help</>,
							<>Some of my contact info is available here.</>,
							<>Please feel free to DM me.</>,
						];
						typeAnimation(setText, text, setInputText, newLines);
					}}
					onMouseLeave={(e) => {
						e.target.blur();
						setContactHover(false);
					}}
					onClick={(e) => {
						e.target.blur();
						const newLines = [
							<>contact-me</>,
							<>Displaying "Contact Me" in another pane...</>
						];
						toggleDisplay(displays.contact, setText, text, setInputText, tmuxState, tmuxDispatch, newLines);
					}}
				>
					<span className={getWhitespaceeClass(isContactHover, isContactMeActive)}>&middot;&middot;&middot;&middot;</span>
					<span className={getTokenClass(isContactHover, isContactMeActive)}>##</span>
					<span className={getWhitespaceeClass(isContactHover, isContactMeActive)}>&middot;</span>
					Contact
					<span className={getWhitespaceeClass(isContactHover, isContactMeActive)}>&middot;</span>
					Me
					<span className={getWhitespaceeClass(isContactHover, isContactMeActive)}>$</span>
				</button>
			</li>
		</ul>
		<span className={whitespaceClassName}>EOF</span>
	</div>;
};
