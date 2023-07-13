# `prismjs-huff`

[Huff](https://huff.sh/) syntax highlighting for [react-syntax-highlighter](https://github.com/react-syntax-highlighter/react-syntax-highlighter#readme).

Huff is a low level assembly language for the EVM. See [documatation](https://docs.huff.sh/)

## Installation

```bash
npm install prismjs-huff
```

## Usage

```javascript
import { PrismLight } from 'react-syntax-highlighter';
import huff from 'prismjs-huff';

PrismLight.registerLanguage('huff', huff);
```

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Contributing

Contributions are welcome. Please check the issues to see how you can help.
