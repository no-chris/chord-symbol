import './Rendered.scss';

import React from 'react';
import CodeBlock from '@theme/CodeBlock';

import ChordTable from '../../ChordTable';

const Rendered = ({ renderedChordTxt, renderedChordRaw }) => {
	return (
		<div>
			<div className={'Rendered_Symbol'}>
				<code className={'chordSymbol-h2'}>{renderedChordTxt}</code>
			</div>

			<ChordTable parsedChord={renderedChordRaw} />

			<details className={'Json_Details'}>
				<summary>
					JSON representation of the rendered chord (&quot;Raw&quot;
					printer)
				</summary>
				<CodeBlock language="json">
					{JSON.stringify(renderedChordRaw || {}, null, 2)}
				</CodeBlock>
			</details>
		</div>
	);
};

export default Rendered;
