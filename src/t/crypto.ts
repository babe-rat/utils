import CryptoJS from 'crypto-js'

// 十六位十六进制数作为密钥
const key = CryptoJS.enc.Utf8.parse('1234123412ABCDEF')
// 十六位十六进制数作为密钥偏移量
const iv = CryptoJS.enc.Utf8.parse('ABCDEF1234123412')

// 解密方法
export function decrypt(word: string) {
    const encryptedHexStr = CryptoJS.enc.Hex.parse(word)
    const srcs = CryptoJS.enc.Base64.stringify(encryptedHexStr)
    const decrypt = CryptoJS.AES.decrypt(srcs, key, {
        iv,
        mode: CryptoJS.mode.CBC,
        padding: CryptoJS.pad.Pkcs7,
    })
    const decryptedStr = decrypt.toString(CryptoJS.enc.Utf8)
    return decryptedStr.toString()
}

// 加密方法
export function encrypt(word: string) {
    const srcs = CryptoJS.enc.Utf8.parse(word)
    const encrypted = CryptoJS.AES.encrypt(srcs, key, {
        iv,
        mode: CryptoJS.mode.CBC,
        padding: CryptoJS.pad.Pkcs7,
    })
    return encrypted.ciphertext.toString().toUpperCase()
}
