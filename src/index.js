// huff grammar
function huff(Prism) {
	Prism.languages.huff = {
		comment: [
			{
				pattern: /(^|[^\\:])\/\/.*/,
				lookbehind: true,
				greedy: true
			},
			{
				pattern: /\/\*[\s\S]*?\*\//,
				greedy: true
			}
		],
		string: {
			pattern: /(["'])(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/,
			greedy: true
		},
		keyword: {
			pattern:
				/\b(?:define|function|event|macro|fn|takes|returns|constant|error|view|pure|payable|nonpayable|indexed|include)\b/,
			greedy: true
		},
		'built-in': {
			pattern: /\b(?:__FUNC_SIG|__EVENT_HASH|__ERROR|mint|burn|stop|dup1|revert)\b/,
			greedy: true
		},
		number: /\b(?:0x[\da-fA-F]+|\d+)\b/,
		operator: /[-+*\/%!^]=?|=[=>]?|&[&=]?|\|[|=]?|<<?=?|>>?=?|[@?]/,
		punctuation: /[{}[\];(),:]/,
		'jump-label': {
			pattern: /\bJUMPDEST\b/,
			alias: 'function',
			greedy: true
		}
	};
}

huff.displayName = 'huff';

module.exports = huff;
