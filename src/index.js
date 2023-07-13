// huff grammar
function huff(Prism) {
	Prism.languages.huff = Prism.languages.extend('clike', {
		keyword:
			/\b(?:define|macro|fn|takes|returns|jumpi|revert|pop|continue|caller|calldataload|shr|sload|eq|jump|jumpdest|mstore|return|dup1|add|mul|log3|codecopy|mload|lt|err|calldata|callvalue|add|ASSERT)\b/,
		operator: /:=|=/,
		builtin:
			/\b(?:__ERROR|__EVENT_HASH|__FUNC_SIG|PanicError|Error|FREE_STORAGE_POINTER|__tablesize|__tablestart|__FUNC_SIG|__EVENT_HASH|__ERROR|__RIGHTPAD|__codesize)\b/,
		function: /\b\w+(?=\(.*\))/,
		number: /\b0x[\da-f]+\b|(?:\b\d+(?:\.\d*)?|\B\.\d+)(?:e[+-]?\d+)?/i,
		punctuation: /[{}[\];(),.:]/,
		comment: [
			{
				pattern: /(^|[^\\])\/\*[\s\S]*?(?:\*\/|$)/,
				lookbehind: true,
				greedy: true
			},
			{
				pattern: /(^|[^\\:])\/\/.*/,
				lookbehind: true,
				greedy: true
			}
		]
	});

	Prism.languages.insertBefore('huff', 'keyword', {
		directive: {
			pattern:
				/#(?:include|define function|define event|define constant|define macro| define test|define jumptable|define error|calldata|fn|table|test)\b/,
			inside: {
				punctuation: /#/
			}
		},
		constant: {
			pattern: /\[\w+\]/,
			inside: {
				punctuation: /\[|\]/
			}
		},
		jumplabel: {
			pattern: /\b\w+:/,
			inside: {
				punctuation: /:/
			}
		},
		'macro-arg': {
			pattern: /<\w+>/,
			inside: {
				punctuation: /<|>/
			}
		},
		table: {
			pattern: /\b\w+\s+\{[^}]+\}/,
			inside: {
				punctuation: /\{|\}/
			}
		},
		test: {
			pattern: /#\[[^\]]+\]/,
			inside: {
				punctuation: /#|\[|\]/
			}
		}
	});
}

huff.displayName = 'huff';

module.exports = huff;
