---
title: home/fastspeeed/mocoolka/core/mocoolka-predicate/src/basic.ts
nav_order: 5
parent: Modules
---

# 概述

基本的比较函数

---

<h2 class="text-delta">目录</h2>

- [between (函数)](#between-%E5%87%BD%E6%95%B0)
- [eq (函数)](#eq-%E5%87%BD%E6%95%B0)
- [gt (函数)](#gt-%E5%87%BD%E6%95%B0)
- [gte (函数)](#gte-%E5%87%BD%E6%95%B0)
- [lt (函数)](#lt-%E5%87%BD%E6%95%B0)
- [lte (函数)](#lte-%E5%87%BD%E6%95%B0)
- [not_eq (函数)](#not_eq-%E5%87%BD%E6%95%B0)

---

# between (函数)

大于等于 low，小于等于 hi

**签名**

```ts

export const between = <A = number | string>({ low, hi }: { low: A, hi: A }) => (x: A) => ...

```

**示例**

```ts
import { between } from 'mocoolka-predicate'
assert(between({ hi: 'c', low: 'a' })('b'))
assert(between({ hi: 'c', low: 'a' })('a'))
assert(between({ hi: 'c', low: 'a' })('c'))
assert(!between({ hi: 'c', low: 'a' })('d'))
assert(between({ hi: 3, low: 1 })(2))
assert(between({ hi: 3, low: 1 })(3))
assert(between({ hi: 3, low: 1 })(1))
assert(!between({ hi: 3, low: 1 })(4))
```

v0.2.0 中添加

# eq (函数)

相等

**签名**

```ts

export const eq = <A = number | string | boolean>(y: A) => (x: A) => ...

```

**示例**

```ts
import { eq } from 'mocoolka-predicate'
assert(eq('a')('a'))
assert(eq(1)(1))
assert(eq(true)(true))
assert(!eq('a')('b'))
assert(!eq(1)(2))
assert(!eq(true)(false))
```

v0.2.0 中添加

# gt (函数)

大于

**签名**

```ts

export const gt = <A = number | string>(y: A) => (x: A) => ...

```

**示例**

```ts
import { gt } from 'mocoolka-predicate'
assert(!gt('b')('a'))
assert(!gt(2)(1))
assert(!gt('a')('a'))
assert(gt('a')('b'))
assert(!gt(1)(1))
assert(gt(1)(2))
```

v0.2.0 中添加

# gte (函数)

大于等于

**签名**

```ts

export const gte = <A = number | string>(y: A) => (x: A) => ...

```

**示例**

```ts
import { gte } from 'mocoolka-predicate'
assert(!gte('b')('a'))
assert(!gte(2)(1))
assert(gte('a')('a'))
assert(gte('a')('b'))
assert(gte(1)(1))
assert(gte(1)(2))
```

v0.2.0 中添加

# lt (函数)

小于

**签名**

```ts

export const lt = <A = number | string>(y: A) => (x: A) => ...

```

**示例**

```ts
import { lt } from 'mocoolka-predicate'
assert(lt('b')('a'))
assert(lt(2)(1))
assert(!lt('a')('a'))
assert(!lt('a')('b'))
assert(!lt(1)(1))
assert(!lt(1)(2))
```

v0.2.0 中添加

# lte (函数)

小于等于

**签名**

```ts

export const lte = <A = number | string>(y: A) => (x: A) => ...

```

**示例**

```ts
import { lte } from 'mocoolka-predicate'
assert(lte('b')('a'))
assert(lte(2)(1))
assert(lte('a')('a'))
assert(!lte('a')('b'))
assert(lte(1)(1))
assert(!lte(1)(2))
```

v0.2.0 中添加

# not_eq (函数)

不相等

**签名**

```ts

export const not_eq = <A = number | string | boolean>(y: A) => (x: A) => ...

```

**示例**

```ts
import { not_eq } from 'mocoolka-predicate'
assert(!not_eq('a')('a'))
assert(!not_eq(1)(1))
assert(!not_eq(true)(true))
assert(not_eq('a')('b'))
assert(not_eq(1)(2))
assert(not_eq(true)(false))
```

v0.2.0 中添加
