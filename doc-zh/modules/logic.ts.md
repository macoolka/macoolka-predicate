---
title: home/fastspeeed/mocoolka/core/mocoolka-predicate/src/logic.ts
nav_order: 6
parent: Modules
---

# 概述

逻辑函数

---

<h2 class="text-delta">目录</h2>

- [and (函数)](#and-%E5%87%BD%E6%95%B0)
- [foldAND (函数)](#foldand-%E5%87%BD%E6%95%B0)
- [foldOR (函数)](#foldor-%E5%87%BD%E6%95%B0)
- [not (函数)](#not-%E5%87%BD%E6%95%B0)
- [or (函数)](#or-%E5%87%BD%E6%95%B0)

---

# and (函数)

用`and`连接`Predicate`

**签名**

```ts

export const and = <A>(p1: Predicate<A>, p2: Predicate<A>): Predicate<A> => ...

```

**示例**

```ts
import { and } from 'mocoolka-predicate'
interface A {
  name: string
  age: number
}
const as: A[] = [{ name: 'a1', age: 20 }, { name: 'a2', age: 20 }, { name: 'a3', age: 28 }]
const isName = (a: A) => a.name === 'a1'
const isAge = (a: A) => a.age === 20
expect(as.filter(and(isName, isAge)).length).toEqual(1)
```

v0.2.0 中添加

# foldAND (函数)

`fold` `Predicate` 数组用`and`

**签名**

```ts

export const foldAND = <A>(p: Array<Predicate<A>>): Predicate<A> => ...

```

**示例**

```ts
import { foldAND } from 'mocoolka-predicate'
interface A {
  name: string
  age: number
}
const as: A[] = [{ name: 'a1', age: 20 }, { name: 'a2', age: 20 }, { name: 'a3', age: 28 }]
const isName = (a: A) => a.name === 'a1'
const isAge = (a: A) => a.age === 20
expect(as.filter(foldAND([isName, isAge])).length).toEqual(1)
```

v0.2.0 中添加

# foldOR (函数)

`fold` `Predicate` 数组用`or`

**签名**

```ts

export const foldOR = <A>(p: Array<Predicate<A>>): Predicate<A> => ...

```

**示例**

```ts
import { foldOR } from 'mocoolka-predicate'
interface A {
  name: string
  age: number
}
const as: A[] = [{ name: 'a1', age: 20 }, { name: 'a2', age: 20 }, { name: 'a3', age: 28 }]
const isName = (a: A) => a.name === 'a1'
const isAge = (a: A) => a.age === 20
expect(as.filter(foldOR([isName, isAge])).length).toEqual(2)
```

v0.2.0 中添加

# not (函数)

`Predicate`结果取反

**示例**

```ts
import { and } from 'mocoolka-predicate'
interface A {
  name: string
  age: number
}
const as: A[] = [{ name: 'a1', age: 20 }, { name: 'a2', age: 20 }, { name: 'a3', age: 28 }]
const isName = (a: A) => a.name === 'a1'
const isAge = (a: A) => a.age === 20
expect(as.filter(and(isName, isAge)).length).toEqual(1)
```

v0.2.0 中添加

# or (函数)

用`or`连接`Predicate`

**示例**

```ts
import { or } from 'mocoolka-predicate'
interface A {
  name: string
  age: number
}
const as: A[] = [{ name: 'a1', age: 20 }, { name: 'a2', age: 20 }, { name: 'a3', age: 28 }]
const isName = (a: A) => a.name === 'a1'
const isAge = (a: A) => a.age === 20
expect(as.filter(or(isName, isAge)).length).toEqual(2)
```

v0.2.0 中添加
