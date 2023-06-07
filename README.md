# `highlightjs-huff`

Huff syntax highlighting for [highlight.js](https://highlightjs.org/).

## Installation

```bash
npm install highlightjs-huff
```

> Please note that this package requires `highlight.js` as a peer dependency.

## Usage

```javascript
import hljs from 'highlight.js';
import huff from 'highlightjs-huff';

hljs.registerLanguage('huff', huff);
hljs.highlightAll();
```

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Contributing

Contributions are welcome. Please check the issues to see how you can help.
