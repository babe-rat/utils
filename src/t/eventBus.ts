import emitter from 'tiny-emitter/instance'

/**
 * 事件总线
 * @see https://www.npmjs.com/package/tiny-emitter
 */
export const eventBus = {
    $on: (event: string, callback: Function, ctx?: any) => emitter.on(event, callback, ctx),
    $once: (event: string, callback: Function, ctx?: any) => emitter.once(event, callback, ctx),
    $off: (event: string, callback?: Function) => emitter.off(event, callback),
    $emit: (event: string, ...args: any[]) => emitter.emit(event, ...args),
}
