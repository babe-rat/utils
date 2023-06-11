---
realPath: docs/utils/StopWatchTimer.md
---
# StopWatchTimer

秒表计时器

```ts
new StopWatchTimer({ isMillisecond: boolean })
```

## Constructor

```js
// 创建一个秒表计数器，精度精确到秒
const stopWatchTimer = new StopWatchTimer()
```

```js
// 创建一个毫秒计时器，精度精确到毫秒
const stopWatchTimer = new StopWatchTimer({ isMillisecond: true })
```

## 实例方法

### stopWatchTimer.start

启动秒表计时器

```js
stopWatchTimer.start()
```

### stopWatchTimer.pause

暂停秒表计时器

```js
stopWatchTimer.pause()
```

### stopWatchTimer.resume

继续秒表计时器

```js
stopWatchTimer.resume()
```

### stopWatchTimer.stop

停止秒表计时器

```js
stopWatchTimer.stop()
```

### stopWatchTimer.reset

重置秒表计时器

```js
stopWatchTimer.reset()
```

### stopWatchTimer.onChange

秒表时间变更的回调函数

```js
const stopWatchTimer = new StopWatchTimer()

stopWatchTimer.onChange(({ minutes, seconds, milliseconds }) => {
    console.log(minutes, seconds, milliseconds)
})
```

## 静态方法

### StopWatchTimer.format

格式化时间

```ts
StopWatchTimer.format(val: number, maxLength = 2, fillString = '0')

StopWatchTimer.format(1) // => '01'
StopWatchTimer.format(21) // => '21'
StopWatchTimer.format(1, 3) // => '001'
StopWatchTimer.format(1, 3, '#') // => '##1'
```
