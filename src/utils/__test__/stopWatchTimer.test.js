import { assert, describe, it, vi } from 'vitest'
import { StopWatchTimer } from '..'

describe('StopWatchTimer', () => {
    vi.useFakeTimers()
    it('秒表计时器', () => {
        let minutes = 0
        let seconds = 0
        let milliseconds = 0

        const stopWatch = new StopWatchTimer()
        stopWatch.start()
        stopWatch.onChange = (option) => {
            minutes = option.minutes
            seconds = option.seconds
            milliseconds = option.milliseconds
        }
        setTimeout(() => {
            assert(minutes === 0)
            assert(seconds === 30)
            assert(milliseconds === 0)
            stopWatch.stop()
        }, 30 * 1000)
        vi.advanceTimersByTime(30 * 1000)

        vi.runAllTimers()
    })

    it('暂停与继续', () => {
        let obj = { minutes: 0, seconds: 0, milliseconds: 0 }

        const stopWatch = new StopWatchTimer()
        stopWatch.start()

        stopWatch.onChange = (option) => {
            obj = option
        }

        // 10s 后暂停
        setTimeout(() => {
            assert(obj.seconds === 10)
            stopWatch.pause()
        }, 10 * 1000)

        // 30s 后继续
        setTimeout(() => {
            assert(obj.seconds === 10)
            stopWatch.resume()
        }, 30 * 1000)

        // 多次点击无效
        setTimeout(() => {
            assert(obj.seconds === 10)
            stopWatch.resume()
        }, 31 * 1000)

        setTimeout(() => {
            assert(obj.seconds === 11)
            stopWatch.resume()
        }, 32 * 1000)

        // 60s 后停止
        setTimeout(() => {
            assert(obj.seconds === 39)
            stopWatch.stop()
        }, 60 * 1000)

        vi.advanceTimersByTime(60 * 1000)

        vi.runAllTimers()
    })

    it('复位', () => {
        let obj = { minutes: 0, seconds: 0, milliseconds: 0 }

        const stopWatch = new StopWatchTimer()
        stopWatch.start()

        stopWatch.onChange = (option) => {
            obj = option
        }

        setTimeout(() => {
            assert(obj.minutes === 1)
            assert(obj.seconds === 2)
            stopWatch.stop()
            assert(obj.seconds === 2)
            stopWatch.reset()
            assert(obj.minutes === 0)
            assert(obj.seconds === 0)
        }, 62 * 1000)

        vi.advanceTimersByTime(62 * 1000)

        vi.runAllTimers()
    })

    it('格式化', () => {
        let obj = { minutes: 0, seconds: 0, milliseconds: 0 }

        const stopWatch = new StopWatchTimer()
        stopWatch.start()

        stopWatch.onChange = (option) => {
            obj = option
        }

        setTimeout(() => {
            assert(obj.minutes === 1)
            assert(obj.seconds === 12)
            assert(StopWatchTimer.format(obj.minutes) === '01')
            assert(StopWatchTimer.format(obj.seconds) === '12')
            stopWatch.stop()
        }, 72 * 1000)

        vi.advanceTimersByTime(72 * 1000)

        vi.runAllTimers()
    })
})
