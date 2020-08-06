import React from 'react';

import BashSymbol from '../components/bashSymbol';

const framesPerChar = 2;
const enterDelay = 40;

export default class TypeAnimator {
	_pendingAnimations = [];
	_cancelAnimation = false;
	_animating = false;

	static _animator;

	/**
	 * @returns {TypeAnimator}
	 */
	static getAnimator() {
		if (!TypeAnimator._animator) {
			TypeAnimator._animator = new TypeAnimator();
		}

		return TypeAnimator._animator;
	}
	
	async _push(animation) {
		this._pendingAnimations.push(animation);

		if (!this._animating) {
			this._animating = true;

			let lines;

			while (this._pendingAnimations.length > 0) {
				const nextAnimation = this._pendingAnimations.pop();
				lines = await nextAnimation(lines);
			}

			this._animating = false;
		}
	}

	cancel() {
		if (this._animating || this._pendingAnimations.length > 0) {
			this._cancelAnimation = true;
			this._pendingAnimations.length = 0;
		}
	}

	_typeAnimation(setText, text, setInputText, newLines) {
		let parentResolve;
		let parentReject;

		const removeCancel = () => {
			this._cancelAnimation = false;
		};
	
		const parentPromise = new Promise((resolve, reject) => {
			parentReject = reject;
			parentResolve = resolve;
		});

		const animationFn = (linesFromPrevious) => new Promise((resolve) => {
			if (linesFromPrevious) {
				text = linesFromPrevious;
			}

			const animate = (setInput, currentInputText, remainingInputText, framesToSkip) => {
				if (framesToSkip > 0 && !this._cancelAnimation) {
					window
						.requestAnimationFrame(() => animate(setInput, currentInputText, remainingInputText, framesToSkip - 1));
					return;
				}
		
				if (remainingInputText.length > 0 && !this._cancelAnimation) {
					const [ nextChar, ...restChars ] = remainingInputText;
					const newInputText = `${currentInputText}${nextChar}`;
					setInput(newInputText);
		
					if (restChars.length > 0) {
						window.requestAnimationFrame(() => animate(setInput, newInputText, restChars, framesPerChar));
						return;
					}
		
					window.requestAnimationFrame(() => animate(setInput, newInputText, restChars, enterDelay));
					return;
				} else if (remainingInputText.length > 0 && this._cancelAnimation) {
					setInput('');
					setText([...text, <><BashSymbol/>{currentInputText}</>, <>^C</>]);

					removeCancel();
					resolve([...text, <><BashSymbol/>{currentInputText}</>, <>^C</>]);
					parentReject(new Error('animation cancelled'));
					return;
				}
		
				setInput('');
				
				const [ cmd, ...restOfLines ] = newLines;
				const newSetOflines = [<><BashSymbol/>{cmd}</>, ...restOfLines];
				setText([...text, ...newSetOflines]);

				resolve([...text, ...newSetOflines]);
				parentResolve();
			};
		
			animate(setInputText, '', newLines[0].props.children, framesPerChar);
		});

		return [parentPromise, animationFn];
	}

	pushAnimation(setText, text, setInputText, newLines) {
		const [parentPromise, animationFn] = this._typeAnimation(setText, text, setInputText, newLines);
		this._push(animationFn);

		return parentPromise;
	}

	cancelAndAnimate(setText, text, setInputText, newLines) {
		const [parentPromise, animationFn] = this._typeAnimation(setText, text, setInputText, newLines);

		this.cancel();
		this._push(animationFn);

		return parentPromise;
	}
};
