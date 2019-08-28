---
title: string.ts
nav_order: 3
parent: 模块
---

# 概述

文本 predicate 函数集合

---

<h2 class="text-delta">目录</h2>

- [isEmail (常量)](#isemail-%E5%B8%B8%E9%87%8F)
- [isIpV4 (常量)](#isipv4-%E5%B8%B8%E9%87%8F)
- [isIpV6 (常量)](#isipv6-%E5%B8%B8%E9%87%8F)
- [isUUID (常量)](#isuuid-%E5%B8%B8%E9%87%8F)
- [isUrl (常量)](#isurl-%E5%B8%B8%E9%87%8F)
- [contains (函数)](#contains-%E5%87%BD%E6%95%B0)
- [endsIn (函数)](#endsin-%E5%87%BD%E6%95%B0)
- [endsInOption (函数)](#endsinoption-%E5%87%BD%E6%95%B0)
- [endsWith (函数)](#endswith-%E5%87%BD%E6%95%B0)
- [endsWithOption (函数)](#endswithoption-%E5%87%BD%E6%95%B0)
- [ins (函数)](#ins-%E5%87%BD%E6%95%B0)
- [match (函数)](#match-%E5%87%BD%E6%95%B0)
- [maxLength (函数)](#maxlength-%E5%87%BD%E6%95%B0)
- [minLength (函数)](#minlength-%E5%87%BD%E6%95%B0)
- [notContains (函数)](#notcontains-%E5%87%BD%E6%95%B0)
- [notEndsWith (函数)](#notendswith-%E5%87%BD%E6%95%B0)
- [notIn (函数)](#notin-%E5%87%BD%E6%95%B0)
- [notStartsWith (函数)](#notstartswith-%E5%87%BD%E6%95%B0)
- [startsWith (函数)](#startswith-%E5%87%BD%E6%95%B0)

---

# isEmail (常量)

Determines whether the given string is `Email`.

**签名**

```ts

export const isEmail: (a: string) => boolean = ...

```

**示例**

```ts
import { isEmail } from 'macoolka-predicate'
import * as assert from 'assert'
assert(isEmail('a@mail.com'))
assert(!isEmail('12'))
```

v0.2.0 中添加

# isIpV4 (常量)

Determines whether the given string is `IPV4`.

**签名**

```ts

export const isIpV4: (a: string) => boolean = ...

```

**示例**

```ts
import { isIpV4 } from 'macoolka-predicate'
import * as assert from 'assert'
assert(isIpV4('8.8.8.8'))
assert(!isIpV4('12'))
```

v0.2.0 中添加

# isIpV6 (常量)

判断文本是否为`IPV6`

**签名**

```ts

export const isIpV6: (a: string) => boolean = ...

```

**示例**

```ts
import { isIpV6 } from 'macoolka-predicate'
import * as assert from 'assert'
assert(isIpV6('2409:8a15:244a:a780:b0f5:8e9a:2c2e:5ce2'))
assert(!isIpV6('8.8.8.8'))
```

v0.2.0 中添加

# isUUID (常量)

判断文本是否为`UUID`

**签名**

```ts

export const isUUID: (a: string) => boolean = ...

```

**示例**

```ts
import { isUrl } from 'macoolka-predicate'
import * as assert from 'assert'
assert(isUUID('00000000-0000-0000-0000-000000000000'))
assert(!isUUID('8.8.8.8'))
```

v0.2.0 中添加

# isUrl (常量)

判断文本是否为`Url`

**签名**

```ts

export const isUrl: (a: string) => boolean = ...

```

**示例**

```ts
import { isUrl } from 'macoolka-predicate'
import * as assert from 'assert'
expect(isUrl('http://bing.com'))
expect(!isUrl('8.8.8.8'))
```

v0.2.0 中添加

# contains (函数)

Determines whether the given string contain passed string.

**签名**

```ts

export const contains = (substring: string) => (str: string) => ...

```

**示例**

```ts
import { contains } from 'macoolka-predicate'
import * as assert from 'assert'
assert(contains('firstColorHover')('firstColorHover'))
assert(contains('Color')('firstColorHover'))
assert(contains('er')('firstColorHover'))
assert(contains('fi')('firstColorHover'))
assert(!contains('abc')('firstColorHover'))
```

v0.2.0 中添加

# endsIn (函数)

Determines whether the given string ends with given suffix array.

**签名**

```ts

export const endsIn = (suffix: Array<string>) => (str: string) =>
    suffix.some(a => ...

```

**示例**

```ts
import { endsIn } from 'macoolka-predicate'
import * as assert from 'assert'
assert(endsIn(['start_with', 'end_with'])('a_start_with'))
assert(endsIn(['start_with', 'end_with'])('a_end_with'))
assert(!endsIn(['start_with', 'end_with'])('a_endwith'))
assert(!endsIn(['start_with', 'end_with'])(''))
```

v0.2.0 中添加

# endsInOption (函数)

Determines whether the given string ends with given suffix array.
split given string when ture

**签名**

```ts

export const endsInOption = (suffix: Array<string>) => (str: string) => ...

```

**示例**

```ts
import { endsInOption } from 'macoolka-predicate'
import * as assert from 'assert'
assert(endsInOption(['_start_with', '_end_with'])('') == none)
expect(endsInOption(['_start_with', '_end_with'])('a_start_with')).toEqual(some({ start: 'a', end: '_start_with' }))
expect(endsInOption(['_start_with', '_end_with'])('a_end_with')).toEqual(some({ start: 'a', end: '_end_with' }))
expect(endsInOption(['_start_with', '_end_with'])('a_endwith') == none)
```

v0.2.0 中添加

# endsWith (函数)

Determines whether the given string ends with given suffix.

**签名**

```ts

export const endsWith = (suffix: string) => (str: string) => ...

```

**示例**

```ts
import { endsWith } from 'macoolka-predicate'
import * as assert from 'assert'
assert(endsWith('b')('ab'))
assert(endsWith('b')('ab1') === false)
```

v0.2.0 中添加

# endsWithOption (函数)

Determines whether the given string ends with given suffix.
remove given suffix when ture

**签名**

```ts

export const endsWithOption = (suffix: string) => (str: string) => ...

```

**示例**

```ts
import { endsWithOption } from 'macoolka-predicate'
import * as assert from 'assert'
expect(endsWithOption('firstColorHover')('firstColorHover')).toEqual(some(''))
expect(endsWithOption('b')('ab')).toEqual(some('a'))
assert(endsWithOption('b')('ab1') === none)
```

v0.2.0 中添加

# ins (函数)

Determines whether the given string be contained in with passed string array.

**签名**

```ts

export const ins = (v: Array<string>) => (str: string) => ...

```

**示例**

```ts

import { ins } from 'macoolka-predicate'
import * as assert from 'assert'
assert(ins(['firstColorHover', 'b'])('firstColorHover'));
assert(!ins(['firstColorHover1', 'b'])('firstColorHover'))
});

```

v0.2.0 中添加

# match (函数)

判断文本是否匹配正则表达式

**签名**

```ts

export const match = (reg: RegExp) => (a: string) => ...

```

**示例**

```ts
import { match } from 'macoolka-predicate'
import * as assert from 'assert'
assert(match(/^A/)('AB'))
assert(!match(/^A/)('12'))
```

v0.2.0 中添加

# maxLength (函数)

判断文本长度是否小于等于输入的最大长度

**签名**

```ts

export const maxLength = (length: number) => (a: string) => ...

```

**示例**

```ts
import { maxLength } from 'macoolka-predicate'
import * as assert from 'assert'
assert(maxLength(3)('123'))
assert(!maxLength(3)('1234'))
```

v0.2.0 中添加

# minLength (函数)

判断文本长度是否大于等于输入的最小长度

**签名**

```ts

export const minLength = (length: number) => (a: string) => ...

```

**示例**

```ts
import { minLength } from 'macoolka-predicate'
import * as assert from 'assert'
assert(minLength(3)('123'))
assert(!minLength(3)('12'))
```

v0.2.0 中添加

# notContains (函数)

Determines whether the given string non contain passed string.

**签名**

```ts

export const notContains = (substring: string) => ...

```

**示例**

```ts
import { notContains } from 'macoolka-predicate'
import * as assert from 'assert'
assert(!notContains('firstColorHover')('firstColorHover'))
assert(!notContains('Color')('firstColorHover'))
assert(!notContains('er')('firstColorHover'))
```

v0.2.0 中添加

# notEndsWith (函数)

Determines whether the given string non ends with given suffix.

**签名**

```ts

export const notEndsWith = (substring: string) => ...

```

**示例**

```ts
import { notEndsWith } from 'macoolka-predicate'
import * as assert from 'assert'
assert(!notEndsWith('firstColorHover')('firstColorHover'))
assert(!notEndsWith('Hover')('firstColorHover'))
assert(notEndsWith('b')('firstColorHover'))
```

v0.2.0 中添加

# notIn (函数)

Determines whether the given string be not contained in with passed string array.

**签名**

```ts

export const notIn = (a: Array<string>) => (str: string) => ...

```

**示例**

```ts
import { notIn } from 'macoolka-predicate'
import * as assert from 'assert'
assert(!notIn(['firstColorHover', 'b'])('firstColorHover'))
assert(notIn(['firstColorHover1', 'b'])('firstColorHover'))
```

v0.2.0 中添加

# notStartsWith (函数)

Determines whether the given string non start with given suffix.

**签名**

```ts

export const notStartsWith = (substring: string) => ...

```

**示例**

```ts
import { notStartsWith } from 'macoolka-predicate'
import * as assert from 'assert'
assert(notStartsWith('firstColorHove')('firstColorHover') === false)
assert(notStartsWith('b')('firstColorHover'))
```

v0.2.0 中添加

# startsWith (函数)

Determines whether the given string start with given suffix.

**签名**

```ts

export const startsWith = (suffix: string) => (str: string) => ...

```

**示例**

```ts
import { startsWith } from 'macoolka-predicate'
import * as assert from 'assert'
assert(startsWith('a')('ab'))
assert(startsWith('a')('ba') === false)
assert(startsWith('b')('firstColorHover') === false)
```

v0.2.0 中添加
