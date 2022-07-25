import { v4 as uuidv4 } from 'uuid'

/**
 * 生成 RFC4122 V4 版本的 UUID
 * @see https://www.npmjs.com/package/uuid
 */
export function uuid(): string {
    return uuidv4()
}
