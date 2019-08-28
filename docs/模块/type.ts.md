---
title: type.ts
nav_order: 4
parent: 模块
---

# 概述

类型判断集合

---

<h2 class="text-delta">目录</h2>

- [PredicateOption (接口)](#predicateoption-%E6%8E%A5%E5%8F%A3)
- [isArguments (常量)](#isarguments-%E5%B8%B8%E9%87%8F)
- [getTypeName (函数)](#gettypename-%E5%87%BD%E6%95%B0)
- [isArray (函数)](#isarray-%E5%87%BD%E6%95%B0)
- [isArrayLike (函数)](#isarraylike-%E5%87%BD%E6%95%B0)
- [isBoolean (函数)](#isboolean-%E5%87%BD%E6%95%B0)
- [isDate (函数)](#isdate-%E5%87%BD%E6%95%B0)
- [isEmpty (函数)](#isempty-%E5%87%BD%E6%95%B0)
- [isEmptyArray (函数)](#isemptyarray-%E5%87%BD%E6%95%B0)
- [isEmptyRecord (函数)](#isemptyrecord-%E5%87%BD%E6%95%B0)
- [isError (函数)](#iserror-%E5%87%BD%E6%95%B0)
- [isFinite (函数)](#isfinite-%E5%87%BD%E6%95%B0)
- [isFunction (函数)](#isfunction-%E5%87%BD%E6%95%B0)
- [isInteger (函数)](#isinteger-%E5%87%BD%E6%95%B0)
- [isIterable (函数)](#isiterable-%E5%87%BD%E6%95%B0)
- [isIterator (函数)](#isiterator-%E5%87%BD%E6%95%B0)
- [isMaybe (函数)](#ismaybe-%E5%87%BD%E6%95%B0)
- [isNaN (函数)](#isnan-%E5%87%BD%E6%95%B0)
- [isNull (函数)](#isnull-%E5%87%BD%E6%95%B0)
- [isNumber (函数)](#isnumber-%E5%87%BD%E6%95%B0)
- [isObject (函数)](#isobject-%E5%87%BD%E6%95%B0)
- [isRegExp (函数)](#isregexp-%E5%87%BD%E6%95%B0)
- [isSameType (函数)](#issametype-%E5%87%BD%E6%95%B0)
- [isString (函数)](#isstring-%E5%87%BD%E6%95%B0)
- [isSymbol (函数)](#issymbol-%E5%87%BD%E6%95%B0)
- [isTypeName (函数)](#istypename-%E5%87%BD%E6%95%B0)
- [isUndefined (函数)](#isundefined-%E5%87%BD%E6%95%B0)
- [notEmpty (函数)](#notempty-%E5%87%BD%E6%95%B0)
- [notEmptyArray (函数)](#notemptyarray-%E5%87%BD%E6%95%B0)
- [notEmptyRecord (函数)](#notemptyrecord-%E5%87%BD%E6%95%B0)
- [notMaybe (函数)](#notmaybe-%E5%87%BD%E6%95%B0)
- [Predicate (导出)](#predicate-%E5%AF%BC%E5%87%BA)

---

# PredicateOption (接口)

**签名**

```ts
interface PredicateOption {}
```

# isArguments (常量)

判断是否输入值为`Argument`

**签名**

```ts

export const isArguments: Refinement<unknown, unknown> = ...

```

v0.2.0 中添加

# getTypeName (函数)

get type name

**签名**

```ts

export const getTypeName = (value: unknown): string => ...

```

**示例**

```ts
import { getTypeName } from 'macoolka-predicate'
assert(getTypeName({}) === 'Object')
```

v0.2.0 中添加

# isArray (函数)

判断是否输入值为`Array`

**签名**

```ts

export const isArray = <T>(a: unknown): a is Array<T> => ...

```

**示例**

```ts
import { isArray } from 'macoolka-predicate'

assert(isArray([]))
assert(!isArray({}))
```

v0.2.0 中添加

# isArrayLike (函数)

判断是否输入值为`ArrayLike`

**签名**

```ts

export const isArrayLike = (value: any) => ...

```

**示例**

```ts
import { isArrayLike } from 'macoolka-predicate'
assert(isArrayLike([]))
assert(isArrayLike({ length: 8 }))
assert(!isArrayLike({}))
```

v0.2.0 中添加

# isBoolean (函数)

判断是否输入值为`Boolean`

**签名**

```ts

export const isBoolean: Refinement<unknown, boolean> =
    (a: unknown): a is boolean => ...

```

**示例**

```ts
import { isBoolean } from 'macoolka-predicate'
assert(isBoolean(true))
assert(!isBoolean(1))
```

v0.2.0 中添加

# isDate (函数)

判断是否输入值为`Date`

**签名**

```ts

export const isDate: Refinement<unknown, Date> = (a: unknown): a is Date => ...

```

**示例**

```ts
import { isDate } from 'macoolka-predicate'
assert(isDate(new Date()))
assert(!isDate('a'))
```

v0.2.0 中添加

# isEmpty (函数)

判断是否输入值为`Empty`

**示例**

```ts
import { isEmpty } from 'macoolka-predicate'
assert(isEmpty(''))
assert(isEmpty(undefined))
assert(isEmpty(null))
assert(isEmpty({}))
assert(isEmpty([]))
assert(!isEmpty(['1']))
assert(!isEmpty({ a: 1 }))
```

v0.2.0 中添加

# isEmptyArray (函数)

判断是否输入值为`Empty Array`

**签名**

```ts

export const isEmptyArray = (val: unknown): boolean => ...

```

**示例**

```ts
import { isEmptyArray } from 'macoolka-predicate'
assert(isEmptyArray([]))
assert(isEmptyArray(undefined))
assert(isEmptyArray(null))
assert(!isEmptyArray(['1']))
```

v0.2.0 中添加

# isEmptyRecord (函数)

判断是否输入值为`Empty Record`

**签名**

```ts

export const isEmptyRecord = (val: unknown): boolean => ...

```

**示例**

```ts
import { isEmptyRecord } from 'macoolka-predicate'
assert(isEmptyRecord({}))
assert(isEmptyRecord(undefined))
assert(isEmptyRecord(null))
assert(!isEmptyRecord({ a: 1 }))
```

v0.2.0 中添加

# isError (函数)

判断是否输入值为`Error`

**签名**

```ts

export const isError: Refinement<unknown, Error> =
    (a: unknown): a is Error => ...

```

**示例**

```ts
import { isError } from 'macoolka-predicate'
assert(isError(new Error('')))
assert(!isError(''))
```

v0.2.0 中添加

# isFinite (函数)

判断是否输入值为`Finite`

**签名**

```ts

export const isFinite: Predicate<unknown> = (val) => ...

```

**示例**

```ts
import { isFinite } from 'macoolka-predicate'
assert(isFinite(Number.MAX_VALUE))
assert(isFinite(Number.MIN_VALUE))
assert(isFinite('1'))
assert(!isFinite('a'))
```

v0.2.0 中添加

# isFunction (函数)

判断是否输入值为`Function`

**签名**

```ts

export const isFunction: Refinement<unknown, Function> =
    (a: unknown): a is Function => ...

```

**示例**

```ts
import { isFunction } from 'macoolka-predicate'
assert(isFunction(() => void 0))
assert(!isFunction(1))
```

v0.2.0 中添加

# isInteger (函数)

判断是否输入值为`Integer`

**签名**

```ts

export const isInteger: Predicate<unknown> = (val: unknown) => ...

```

**示例**

```ts
import { isInteger } from 'macoolka-predicate'
assert(isInteger(1))
assert(!isInteger(1.1))
```

v0.2.0 中添加

# isIterable (函数)

判断是否输入值为`Iterable`

**签名**

```ts

export const isIterable: Refinement<unknown, Iterable<unknown>> =
    (a: unknown): a is Iterable<unknown> => ...

```

**示例**

```ts
import { isIterable } from 'macoolka-predicate'
assert(isIterable([]))
assert(!isIterable({}))
```

v0.2.0 中添加

# isIterator (函数)

判断是否输入值为`Iterator`

**签名**

```ts

export const isIterator: Refinement<any, Iterator<unknown>> =
    <T>(a: any): a is Iterator<T> => ...

```

**示例**

```ts
import { isIterator } from 'macoolka-predicate'
assert(isIterator({ next: () => void 0 }))
assert(!isIterator({}))
```

v0.2.0 中添加

# isMaybe (函数)

判断是否输入值是否为`null`或者`undefined`

**示例**

```ts
import { isMaybe } from 'macoolka-predicate'
import * as assert from 'assert'

assert(isMaybe(undefined))
assert(isMaybe(null))
assert(!isMaybe(''))
```

v0.2.0 中添加

# isNaN (函数)

判断是否输入值为`NaN`

**签名**

```ts

export const isNaN = (val: unknown) => ...

```

**示例**

```ts
import { isNaN } from 'macoolka-predicate'
assert(isNaN('a'))
assert(!isNaN(1))
```

v0.2.0 中添加

# isNull (函数)

判断是否输入值是否为`null`

**签名**

```ts

export const isNull = <T>(val: T | null): val is null => ...

```

**示例**

```ts
import { isNull } from 'macoolka-predicate'
import * as assert from 'assert'
assert(isNull(null))
assert(!isNull(undefined))
```

v0.2.0 中添加

# isNumber (函数)

判断是否输入值为`isNumber`

**签名**

```ts

export const isNumber: Refinement<unknown, number> = (a: unknown): a is number => ...

```

**示例**

```ts
import { isObject } from 'macoolka-predicate'
assert(isNumber(1))
assert(!isNumber('1'))
```

v0.2.0 中添加

# isObject (函数)

判断是否输入值为`Object`

**签名**

```ts

export const isObject = (a: unknown): a is object => ...

```

**示例**

```ts
import { isObject } from 'macoolka-predicate'
assert(isObject({}))
assert(isObject({ a: 1 }))
assert(!isObject(2))
```

v0.2.0 中添加

# isRegExp (函数)

判断是否输入值为`RegExp`

**签名**

```ts

export const isRegExp: Refinement<unknown, RegExp> = (a): a is RegExp => ...

```

**示例**

```ts
import { isRegExp } from 'macoolka-predicate'
assert(isRegExp(/^a/))
assert(!isRegExp(1))
```

v0.2.0 中添加

# isSameType (函数)

判断是否输入值为相同类型

**签名**

```ts

export const isSameType = (a: unknown, b: unknown) => ...

```

**示例**

```ts
import { isString } from 'macoolka-predicate'

assert(isSameType('a', '3'))
assert(isSameType({ a: 1 }, { b: 2 }))
assert(!isSameType('a', { b: 2 }))
assert(!isSameType(1, false))
```

v0.2.0 中添加

# isString (函数)

判断是否输入值是否为`string`

**签名**

```ts

export const isString: Refinement<unknown, string> = (a: unknown): a is string => ...

```

**示例**

```ts
import { isString } from 'macoolka-predicate'
assert(isString('a'))
assert(!isString(1))
```

v0.2.0 中添加

# isSymbol (函数)

判断是否输入值为`symbol`

**签名**

```ts

export const isSymbol: Refinement<unknown, symbol> =
    (a: unknown): a is symbol => ...

```

**示例**

```ts
import { isSymbol } from 'macoolka-predicate'
const a = Symbol('A')
assert(isSymbol(a))
assert(!isSymbol('b'))
```

v0.2.0 中添加

# isTypeName (函数)

判断是否输入值为指定的类型名

**签名**

```ts

export const isTypeName = <T>(strTypeName: string): Refinement<unknown, T> =>
    (a: unknown): a is T => ...

```

**示例**

```ts
import { isTypeName } from 'macoolka-predicate'
assert(isTypeName('Object')({}))
```

v0.2.0 中添加

# isUndefined (函数)

判断是否输入值是否为`undefined`

**签名**

```ts

export const isUndefined: Refinement<unknown, undefined> = (val): val is undefined => ...

```

**示例**

```ts
import { isUndefined } from 'macoolka-predicate'
import * as assert from 'assert'

assert(isUndefined(undefined))
assert(!isUndefined(null))
```

v0.2.0 中添加

# notEmpty (函数)

判断是否输入值为非空

**示例**

```ts
import { notEmpty } from 'macoolka-predicate'
assert(!notEmpty(''))
assert(!notEmpty(undefined))
assert(!notEmpty(null))
assert(!notEmpty({}))
assert(!notEmpty([]))
assert(notEmpty(['1']))
assert(notEmpty({ a: 1 }))
```

v0.2.0 中添加

# notEmptyArray (函数)

判断是否输入值为`Non Empty Array`

**签名**

```ts

export const notEmptyArray = <T>(val: unknown): val is NonEmptyArray<T> => ...

```

**示例**

```ts
import { notEmptyArray } from 'macoolka-predicate'
assert(!notEmptyArray([]))
assert(!notEmptyArray(undefined))
assert(!notEmptyArray(null))
assert(notEmptyArray(['1']))
```

v0.2.0 中添加

# notEmptyRecord (函数)

判断是否输入值为`Non Empty Record`

**签名**

```ts

export const notEmptyRecord = <T>(val: Maybe<T>): val is AtLeastOne<T> => ...

```

**示例**

```ts
import { notEmptyRecord } from 'macoolka-predicate'
assert(!notEmptyRecord({}))
assert(!notEmptyRecord(undefined))
assert(!notEmptyRecord(null))
assert(notEmptyRecord({ a: 1 }))
```

v0.2.0 中添加

# notMaybe (函数)

判断是否输入值不为`null`或者`undefined`

**示例**

```ts
import { notMaybe } from 'macoolka-predicate'
import * as assert from 'assert'
assert(!notMaybe(undefined))
assert(!notMaybe(null))
assert(notMaybe(''))
```

v0.2.0 中添加

# Predicate (导出)

**签名**

```ts
any
```
