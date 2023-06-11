# crypto

AES 加密解密，详见[crypto-js](https://github.com/brix/crypto-js)。

```js
import { crypto } from '@baberat/utils/t'
```

## 使用

### encrypt(word: string)

加密

```js
const password = 'test@123'

const cryptText = crypto.encrypt(password)
```

### decrypt(word: string)

解密

```js
crypto.decrypt(cryptText)

// => test@123
```
