import { toXML } from 'jstoxml/jstoxml';

import React from 'react';
import CodeBlock from '@theme/CodeBlock';

// https://gist.github.com/sente/1083506/d2834134cd070dbcc08bf42ee27dabb746a1c54d#gistcomment-3068708
function formatXml(xml) {
	const PADDING = ' '.repeat(2); // set desired indent size here
	const reg = /(>)(<)(\/*)/g;
	let pad = 0;

	xml = xml.replace(reg, '$1\r\n$2$3');

	return xml
		.split('\r\n')
		.map((node) => {
			let indent = 0;
			if (node.match(/.+<\/\w[^>]*>$/)) {
				indent = 0;
			} else if (node.match(/^<\/\w/) && pad > 0) {
				pad -= 1;
			} else if (node.match(/^<\w[^>]*[^/]>.*$/)) {
				indent = 1;
			} else {
				indent = 0;
			}

			pad += indent;

			return PADDING.repeat(pad - indent) + node;
		})
		.join('\r\n');
}

const Rendered = ({ renderedChordMusicXml }) => {
	if (!renderedChordMusicXml) {
		return (
			<pre>
				<code>-</code>
			</pre>
		);
	}
	const xml = toXML(renderedChordMusicXml.musicxml);
	return <CodeBlock language="xml">{formatXml(xml)}</CodeBlock>;
};

export default Rendered;
