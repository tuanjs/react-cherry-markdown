# react-cherry-markdown

![GitHub Pages](https://github.com/dangojs/react-cherry-markdown/actions/workflows/docs-deployment.yml/badge.svg)

## Getting Started

Install dependencies,

```bash
npm i @sjognad/react-cherry-markdown
```

Start the dev server,

```bash
npm start
```

Build documentation,

```bash
npm run docs:build
```

Run test,

```bash
npm test
```

Build library via `father-build`,

```bash
npm run build
```

## Example

```tsx
import React from 'react';
import { CherryEditor } from '@sjognad/react-cherry-markdown';
import * as echarts from 'echarts';
import MathJax from 'mathjax/es5/tex-svg';

export default () => {
  const md = '## Hello react-cherry-markdown!';
  return (
    <CherryEditor
      engine={{
        syntax: {
          table: {
            enableChart: true,
          },
          // mathBlock: {
          //   engine: 'katex',
          // },
          // inlineMath: {
          //   engine: 'katex',
          // },
        },
      }}
      externals={{
        echarts,
        MathJax,
      }}
      value={md}
    />
  );
};
```
