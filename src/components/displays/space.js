import React from 'react';

export default function Space({ className }) {
	return <span className={className || 'text-gray-400 select-none'}>&middot;&#8203;</span>;
}