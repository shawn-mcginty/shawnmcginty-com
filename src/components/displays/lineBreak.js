import React from 'react';

export default function LineBreak({ className }) {
	return <><span className={className || 'text-gray-400 select-none'}>$</span><br/></>;
}