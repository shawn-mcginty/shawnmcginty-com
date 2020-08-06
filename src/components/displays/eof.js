import React from 'react';

export default function EOF({ className }) {
	return <span className={className || 'text-gray-400 select-none'}>EOF</span>;
}