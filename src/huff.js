function defineHuffGrammar(hljs) {
	return {
		case_insensitive: true,
		keywords: {
			keyword: 'define function event macro fn takes returns constant error view pure payable nonpayable indexed',
			built_in: '__FUNC_SIG __EVENT_HASH __ERROR',
			jump_label: 'JUMPDEST'
		},
		contains: [
			hljs.COMMENT('#', '$'),
			hljs.QUOTE_STRING_MODE,
			hljs.NUMBER_MODE,
			{
				className: 'meta',
				begin: '^#',
				end: '$',
				keywords: {
					'meta-keyword': 'define function event macro fn takes returns constant error',
					'meta-jump_label': 'JUMPDEST'
				},
				contains: [hljs.QUOTE_STRING_MODE, hljs.NUMBER_MODE]
			}
		]
	};
}

module.exports = defineHuffGrammar;
