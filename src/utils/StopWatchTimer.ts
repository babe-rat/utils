// eslint-disable-next-line @typescript-eslint/no-empty-function
const noop = () => {}
const _change = Symbol('change')
const _clearTimer = Symbol('clearTimer')
const _handleStopWatch = Symbol('handleStopWatch')
const SecondInterval = 1000
const MillisecondInterval = 10

export class StopWatchTimer {
    public isMillisecond?: boolean

    private intervalId?: number

    private elapsedTime: number

    private running: boolean

    public onChange: ({
        minutes,
        seconds,
        milliseconds,
    }: {
        minutes: number
        seconds: number
        milliseconds: number
    }) => void

    public onend: () => void

    constructor({ isMillisecond }: { isMillisecond?: boolean } = {}) {
        this.intervalId = undefined
        this.isMillisecond = isMillisecond
        this.onChange = noop
        this.onend = noop
        this.elapsedTime = 0
        this.running = false
    }

    [_change](minutes: number, seconds: number, milliseconds: number) {
        this.onChange({
            minutes,
            seconds,
            milliseconds,
        })
    }

    // 清除定时器
    [_clearTimer]() {
        this.running = false
        const { intervalId } = this
        intervalId && clearInterval(intervalId)
        this.onend()
    }

    [_handleStopWatch]() {
        this.running = true
        const startTime = Date.now()
        const { isMillisecond } = this
        const lastElapsedTime = this.elapsedTime
        this.intervalId = setInterval(
            () => {
                const elapsedTime = Date.now() - startTime + lastElapsedTime
                const minutes = Math.floor(elapsedTime / 60000)
                const seconds = Math.floor((elapsedTime % 60000) / 1000)
                const milliseconds = isMillisecond ? elapsedTime % 1000 : 0
                this[_change](minutes, seconds, milliseconds)
                this.elapsedTime = elapsedTime
            },
            isMillisecond ? MillisecondInterval : SecondInterval,
        )
    }

    // 启动
    start() {
        this.reset()
        this[_handleStopWatch]()
    }

    // 暂停
    pause() {
        this[_clearTimer]()
    }

    // 继续
    resume() {
        if (!this.running) {
            this[_handleStopWatch]()
        }
    }

    // 停止
    stop() {
        this[_clearTimer]()
        this.elapsedTime = 0
    }

    // 重置
    reset() {
        this[_clearTimer]()
        // 复位
        this[_change](0, 0, 0)
        this.elapsedTime = 0
    }

    // 数据格式化
    static format(val: number, maxLength = 2, fillString = '0') {
        return String(val).padStart(maxLength, fillString)
    }
}
