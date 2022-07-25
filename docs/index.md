---
title: 快速使用
order: 1
---

# 快速使用

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
