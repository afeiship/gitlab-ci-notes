# mina-deploy
> Miniprogram deploy.

[![version][version-image]][version-url]
[![license][license-image]][license-url]
[![size][size-image]][size-url]
[![download][download-image]][download-url]

## installation
```shell
yarn add @jswork/mina-deploy miniprogram-ci --dev
```

## usage
```js
const minaDeploy = require('@jswork/mina-deploy');
const pkg = require('./package.json');
const arguments = process.argv.splice(2);
const robot = parseInt(arguments[0]);

// 1: 正式版 2: 开发版
void minaDeploy({
  appid: 'wx_ID',
  projectPath: './dist/build/mp-weixin',
  robot,
  version: pkg.gtcVersion
});
```

## license
Code released under [the MIT license](https://github.com/afeiship/mina-deploy/blob/master/LICENSE.txt).

[version-image]: https://img.shields.io/npm/v/@jswork/mina-deploy
[version-url]: https://npmjs.org/package/@jswork/mina-deploy

[license-image]: https://img.shields.io/npm/l/@jswork/mina-deploy
[license-url]: https://github.com/afeiship/mina-deploy/blob/master/LICENSE.txt

[size-image]: https://img.shields.io/bundlephobia/minzip/@jswork/mina-deploy
[size-url]: https://github.com/afeiship/mina-deploy/blob/master/dist/mina-deploy.min.js

[download-image]: https://img.shields.io/npm/dm/@jswork/mina-deploy
[download-url]: https://www.npmjs.com/package/@jswork/mina-deploy
