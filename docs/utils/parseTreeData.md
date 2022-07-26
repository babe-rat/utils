---
title: parseTreeData
group:
    title: utils
    path: /utils
    order: 3
---

# parseTreeData

```ts
interface TreeNode {
    [key: string]: any;
    children?: TreeNode[];
}

interface ParseTreeDataOption {
    // 指定子节点字段，默认为 children
    children?: string;
    // 自定义节点数据，返回一个新的节点数据
    renderNode?: (node: TreeNode) => TreeNode;
    // 过滤节点数据，返回true or false，返回 false 代表过滤数据
    filterNode?: (node: TreeNode) => boolean;
    // 是否过滤空节点
    filterEmptyNodes?: boolean;
}

parseTreeData(treeData: TreeNode[], options: ParseTreeDataOption)
```

解析树形结构数据，支持自定义节点数据和过滤数据

## 参数

1. `treeData: TreeNode[]` 树形结构数据，必填
2. `options?.children` 指定子节点字段，默认解析字段为 `children`，非必填
3. `options?.renderNode` 自定义节点数据，返回一个新的节点数据，非必填
4. `options?.filterNode` 过滤节点数据，返回 `true` or `false`，返回 `false` 代表过滤数据，非必填
5. `options?.filterEmptyNodes` 是否过滤空节点 `children: [] => children: undefined`

## 返回

_(TreeNode[])_: 返回一个新的树形结构数据

## 例子

```js
import { parseTreeData } from '@baberat/utils'
const treeData = [
    {
        id: 1,
        label: '一级 1',
        child: [
            {
                id: 11,
                label: '二级 1-1',
                child: [
                    {
                        id: 111,
                        label: '三级 1-1-1',
                    },
                ],
            },
        ],
    },
    {
        id: 2,
        label: '一级 2',
        child: [
            {
                id: 21,
                label: '二级 2-1',
                child: [
                    {
                        id: 211,
                        label: '三级 2-1-1',
                    },
                ],
            },
            {
                id: 22,
                label: '二级 2-2',
                child: [
                    {
                        id: 221,
                        label: '三级 2-2-1',
                    },
                ],
            },
        ],
    },
]

parseTreeData(treeData, {
    children: 'child',
    renderNode(node) {
        const { id, ...rest } = node
        return { ...rest, key: id, disabled: node.label === '一级 1' }
    },
    filterNode(node) {
        return node.label.includes('1-1')
    },
})
```

Result

```js
;[
    {
        key: 1,
        label: '一级 1',
        disabled: true,
        children: [
            {
                key: 11,
                label: '二级 1-1',
                disabled: false,
                children: [
                    {
                        key: 111,
                        label: '三级 1-1-1',
                        disabled: false,
                    },
                ],
            },
        ],
    },
    {
        key: 2,
        label: '一级 2',
        disabled: false,
        children: [
            {
                key: 21,
                label: '二级 2-1',
                disabled: false,
                children: [
                    {
                        key: 211,
                        label: '三级 2-1-1',
                        disabled: false,
                    },
                ],
            },
        ],
    },
]
```
