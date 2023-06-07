// huff grammar
const { defineHuffGrammar } = require('./huff.js');

module.exports = function (hljs) {
	hljs.registerLanguage('huff', defineHuffGrammar);
};

module.exports.huff = defineHuffGrammar;
