import React from 'react'

export default function Header() {
	return <nav className="flex items-center justify-between flex-wrap bg-orange-700 p-0">
		<div className="flex flex-col items-start flex-shrink-0 text-white mr-6 ml-1">
			<p className="font-sans font-semibold text-5xl tracking-wide">
				SHAWN McGINTY
			</p>
			<p className="font-sans font-light text-gray-400 mb-1" style={{ marginTop: '-14px'}}>
				Full-stack Software Creator
			</p>
		</div>
	</nav>
};
