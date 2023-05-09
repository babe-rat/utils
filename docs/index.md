---
title: utils - 工具库
hero:
    title: utils
    description: 工具库
    actions:
        - text: 立即上手
          link: https://babe-rat.github.io/utils/utils/convert-file-size
        - text: Github
          link: https://github.com/babe-rat/utils
---

## 安装

```shell
yarn add @baberat/utils -S
```

## 使用

```js
import { parseTreeData } from '@baberat/utils'
```

## 按需加载

`@baberat/utils` 默认支持基于 ES modules 的 tree shaking，对于 js 部分，直接引入 `import { parseTreeData } from '@baberat/utils'` 就会有按需加载的效果。
