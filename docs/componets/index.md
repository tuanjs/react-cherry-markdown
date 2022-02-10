---
title: 基础示例
---

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
