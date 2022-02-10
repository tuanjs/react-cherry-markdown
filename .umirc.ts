import { defineConfig } from 'dumi';

export default defineConfig({
  title: 'react-cherry-markdown',
  favicon:
    'https://user-images.githubusercontent.com/9554297/83762004-a0761b00-a6a9-11ea-83b4-9c8ff721d4b8.png',
  logo: 'https://user-images.githubusercontent.com/9554297/83762004-a0761b00-a6a9-11ea-83b4-9c8ff721d4b8.png',
  outputPath: 'docs-dist',
  publicPath: process.env.NODE_ENV === 'production' ? '/react-cherry-markdown/' : '/',
  base: process.env.NODE_ENV === 'production' ? '/react-cherry-markdown/' : '/',
  mode: 'site',
  // more config: https://d.umijs.org/config
  mfsu: {},
  externals: {
    jsdom: 'var {}',
  },
});
