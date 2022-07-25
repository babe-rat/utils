---
title: eventBus
group:
    title: t
    path: /t
    order: 4
---

# eventBus

事件总线，[详见](https://www.npmjs.com/package/tiny-emitter)

## 使用

```ts
import { eventBus } from '@gauss/utils/t'

eventBus.$on('some-event', function (arg1, arg2, arg3) {
    // TODO
})

eventBus.$emit('some-event', 'arg1 value', 'arg2 value', 'arg3 value')
```

## Methods

### eventBus.$on(event, callback[, context])

订阅事件

-   `event` - the name of the event to subscribe to
-   `callback` - the function to call when event is emitted
-   `context` - (OPTIONAL) - the context to bind the event callback to

### eventBus.$once(event, callback[, context])

只订阅一次事件

-   `event` - the name of the event to subscribe to
-   `callback` - the function to call when event is emitted
-   `context` - (OPTIONAL) - the context to bind the event callback to

### eventBus.$off(event[, callback])

取消订阅一个事件或所有事件。 如果没有提供回调，它将取消您对所有事件的订阅。

-   `event` - the name of the event to unsubscribe from
-   `callback` - the function used when binding to the event

### eventBus.$emit(event[, arguments...])

触发已订阅的事件

-   `event` - the event name to emit
-   `arguments...` - any number of arguments to pass to the event subscribers
