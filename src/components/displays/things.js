import React from 'react';

import Sp from './space';
import Br from './lineBreak';
import Tab from './tab';
import EOF from './eof';

export default function Things() {
	return <p>
		<strong>Things<Sp/>I<Sp/>Like</strong><Br/>
		<span className="text-blue-700 font-semibold">=============</span><Br/>
		<Br/>
		<span className="text-blue-800">1.</span><Sp/><span className="text-blue-700 font-semibold">__Concepts__</span><Br/>
		<Tab/><span className="text-blue-800">*</span><Sp/>TDD<Br/>
		<Tab/><span className="text-blue-800">*</span><Sp/>Functional<Sp/>Programming<Br/>
		<Tab/><span className="text-blue-800">*</span><Sp/>Automation<Sp/>(CI/CD)<Br/>
		<Br/>
		<span className="text-blue-800">2.</span><Sp/><span className="text-blue-700 font-semibold">__Languages__</span><Br/>
		<Tab/><span className="text-blue-800">*</span><Sp/>JavaScript/TypeScript<Sp/>(front<Sp/>and<Sp/>back)<Br/>
		<Tab/><Tab/><span className="text-blue-800">*</span><Sp/>NodeJS<Br/>
		<Tab/><Tab/><span className="text-blue-800">*</span><Sp/>Vue<Br/>
		<Tab/><Tab/><span className="text-blue-800">*</span><Sp/>React<Br/>
		<Tab/><span className="text-blue-800">*</span><Sp/>OCaml<Sp/>(also<Sp/>ReScript)<Br/>
		<Tab/><span className="text-blue-800">*</span><Sp/>Erlang<Sp/>(also<Sp/>Elixir)<Br/>
		<Tab/><span className="text-blue-800">*</span><Sp/>C<Br/>
		<Tab/><span className="text-blue-800">*</span><Sp/>Go<Br/>
		<Br/>
		<span className="text-blue-800">3.</span><Sp/><span className="text-blue-700 font-semibold">__RDBMS__</span><Br/>
		<Tab/><span className="text-blue-800">*</span><Sp/>MySQL<Br/>
		<Tab/><span className="text-blue-800">*</span><Sp/>Postgres<Br/>
		<Br/>
		<span className="text-blue-800">4.</span><Sp/><span className="text-blue-700 font-semibold">__Other<Sp/>Technologies__</span><Br/>
		<Tab/><span className="text-blue-800">*</span><Sp/>Docker<Br/>
		<Tab/><span className="text-blue-800">*</span><Sp/>ElasticSearch<Br/>
		<Tab/><span className="text-blue-800">*</span><Sp/>GraphQL<Br/>
		<EOF/>
	</p>;
};
