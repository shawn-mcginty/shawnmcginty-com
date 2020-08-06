import React from 'react';

import Sp from './space';

export default function Tab({ className }) {
	const cl = className || 'text-gray-500 select-none';
	return <><Sp className={cl}/><Sp className={cl}/><Sp className={cl}/><Sp className={cl}/></>;
}