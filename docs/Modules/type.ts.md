---
title: type.ts
nav_order: 4
parent: Modules
---

# Overview

Type Predicate

---

<h2 class="text-delta">Table of contents</h2>

- [PredicateOption (interface)](#predicateoption-interface)
- [isArguments (constant)](#isarguments-constant)
- [getTypeName (function)](#gettypename-function)
- [isArray (function)](#isarray-function)
- [isArrayLike (function)](#isarraylike-function)
- [isBoolean (function)](#isboolean-function)
- [isDate (function)](#isdate-function)
- [isEmpty (function)](#isempty-function)
- [isEmptyArray (function)](#isemptyarray-function)
- [isEmptyRecord (function)](#isemptyrecord-function)
- [isError (function)](#iserror-function)
- [isFinite (function)](#isfinite-function)
- [isFunction (function)](#isfunction-function)
- [isInteger (function)](#isinteger-function)
- [isIterable (function)](#isiterable-function)
- [isIterator (function)](#isiterator-function)
- [isMaybe (function)](#ismaybe-function)
- [isNaN (function)](#isnan-function)
- [isNull (function)](#isnull-function)
- [isNumber (function)](#isnumber-function)
- [isObject (function)](#isobject-function)
- [isRegExp (function)](#isregexp-function)
- [isSameType (function)](#issametype-function)
- [isString (function)](#isstring-function)
- [isSymbol (function)](#issymbol-function)
- [isTypeName (function)](#istypename-function)
- [isUndefined (function)](#isundefined-function)
- [notEmpty (function)](#notempty-function)
- [notEmptyArray (function)](#notemptyarray-function)
- [notEmptyRecord (function)](#notemptyrecord-function)
- [notMaybe (function)](#notmaybe-function)
- [Predicate (export)](#predicate-export)

---

# PredicateOption (interface)

**Signature**

```ts
interface PredicateOption {}
```

# isArguments (constant)

Determines whether the passed value is Argument.

**Signature**

```ts

export const isArguments: Refinement<unknown, unknown> = ...

```

Added in v0.2.0

# getTypeName (function)

get type name

**Signature**

```ts

export const getTypeName = (value: unknown): string => ...

```

**Example**

```ts
import { getTypeName } from 'macoolka-predicate'
assert(getTypeName({}) === 'Object')
```

Added in v0.2.0

# isArray (function)

Determines whether the passed value is Array.

**Signature**

```ts

export const isArray = <T>(a: unknown): a is Array<T> => ...

```

**Example**

```ts
import { isArray } from 'macoolka-predicate'

assert(isArray([]))
assert(!isArray({}))
```

Added in v0.2.0

# isArrayLike (function)

Determines whether the passed value is ArrayLike.

**Signature**

```ts

export const isArrayLike = (value: any) => ...

```

**Example**

```ts
import { isArrayLike } from 'macoolka-predicate'
assert(isArrayLike([]))
assert(isArrayLike({ length: 8 }))
assert(!isArrayLike({}))
```

Added in v0.2.0

# isBoolean (function)

Determines whether the passed value is Boolean.

**Signature**

```ts

export const isBoolean: Refinement<unknown, boolean> =
    (a: unknown): a is boolean => ...

```

**Example**

```ts
import { isBoolean } from 'macoolka-predicate'
assert(isBoolean(true))
assert(!isBoolean(1))
```

Added in v0.2.0

# isDate (function)

Determines whether the passed value is Date.

**Signature**

```ts

export const isDate: Refinement<unknown, Date> = (a: unknown): a is Date => ...

```

**Example**

```ts
import { isDate } from 'macoolka-predicate'
assert(isDate(new Date()))
assert(!isDate('a'))
```

Added in v0.2.0

# isEmpty (function)

Determines whether the passed value is Empty.

**Example**

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

Added in v0.2.0

# isEmptyArray (function)

Determines whether the passed value is Empty Array.

**Signature**

```ts

export const isEmptyArray = (val: unknown): boolean => ...

```

**Example**

```ts
import { isEmptyArray } from 'macoolka-predicate'
assert(isEmptyArray([]))
assert(isEmptyArray(undefined))
assert(isEmptyArray(null))
assert(!isEmptyArray(['1']))
```

Added in v0.2.0

# isEmptyRecord (function)

Determines whether the passed value is Empty Record.

**Signature**

```ts

export const isEmptyRecord = (val: unknown): boolean => ...

```

**Example**

```ts
import { isEmptyRecord } from 'macoolka-predicate'
assert(isEmptyRecord({}))
assert(isEmptyRecord(undefined))
assert(isEmptyRecord(null))
assert(!isEmptyRecord({ a: 1 }))
```

Added in v0.2.0

# isError (function)

Determines whether the passed value is Error.

**Signature**

```ts

export const isError: Refinement<unknown, Error> =
    (a: unknown): a is Error => ...

```

**Example**

```ts
import { isError } from 'macoolka-predicate'
assert(isError(new Error('')))
assert(!isError(''))
```

Added in v0.2.0

# isFinite (function)

Determines whether the passed value is Finite.

**Signature**

```ts

export const isFinite: Predicate<unknown> = (val) => ...

```

**Example**

```ts
import { isFinite } from 'macoolka-predicate'
assert(isFinite(Number.MAX_VALUE))
assert(isFinite(Number.MIN_VALUE))
assert(isFinite('1'))
assert(!isFinite('a'))
```

Added in v0.2.0

# isFunction (function)

Determines whether the passed value is Function.

**Signature**

```ts

export const isFunction: Refinement<unknown, Function> =
    (a: unknown): a is Function => ...

```

**Example**

```ts
import { isFunction } from 'macoolka-predicate'
assert(isFunction(() => void 0))
assert(!isFunction(1))
```

Added in v0.2.0

# isInteger (function)

Determines whether the passed value is Integer.

**Signature**

```ts

export const isInteger: Predicate<unknown> = (val: unknown) => ...

```

**Example**

```ts
import { isInteger } from 'macoolka-predicate'
assert(isInteger(1))
assert(!isInteger(1.1))
```

Added in v0.2.0

# isIterable (function)

Determines whether the passed value is Iterable.

**Signature**

```ts

export const isIterable: Refinement<unknown, Iterable<unknown>> =
    (a: unknown): a is Iterable<unknown> => ...

```

**Example**

```ts
import { isIterable } from 'macoolka-predicate'
assert(isIterable([]))
assert(!isIterable({}))
```

Added in v0.2.0

# isIterator (function)

Determines whether the passed value is Iterator.

**Signature**

```ts

export const isIterator: Refinement<any, Iterator<unknown>> =
    <T>(a: any): a is Iterator<T> => ...

```

**Example**

```ts
import { isIterator } from 'macoolka-predicate'
assert(isIterator({ next: () => void 0 }))
assert(!isIterator({}))
```

Added in v0.2.0

# isMaybe (function)

Determines whether the passed value is null or undefined.

**Example**

```ts
import { isMaybe } from 'macoolka-predicate'
import * as assert from 'assert'

assert(isMaybe(undefined))
assert(isMaybe(null))
assert(!isMaybe(''))
```

Added in v0.2.0

# isNaN (function)

Determines whether the passed value is NaN.

**Signature**

```ts

export const isNaN = (val: unknown) => ...

```

**Example**

```ts
import { isNaN } from 'macoolka-predicate'
assert(isNaN('a'))
assert(!isNaN(1))
```

Added in v0.2.0

# isNull (function)

Determines whether the passed value is null.

**Signature**

```ts

export const isNull = <T>(val: T | null): val is null => ...

```

**Example**

```ts
import { isNull } from 'macoolka-predicate'
import * as assert from 'assert'
assert(isNull(null))
assert(!isNull(undefined))
```

Added in v0.2.0

# isNumber (function)

Determines whether the passed value is number.

**Signature**

```ts

export const isNumber: Refinement<unknown, number> = (a: unknown): a is number => ...

```

**Example**

```ts
import { isObject } from 'macoolka-predicate'
assert(isNumber(1))
assert(!isNumber('1'))
```

Added in v0.2.0

# isObject (function)

Determines whether the passed value is a object.

**Signature**

```ts

export const isObject = (a: unknown): a is object => ...

```

**Example**

```ts
import { isObject } from 'macoolka-predicate'
assert(isObject({}))
assert(isObject({ a: 1 }))
assert(!isObject(2))
```

Added in v0.2.0

# isRegExp (function)

Determines whether the passed value is a RegExp.

**Signature**

```ts

export const isRegExp: Refinement<unknown, RegExp> = (a): a is RegExp => ...

```

**Example**

```ts
import { isRegExp } from 'macoolka-predicate'
assert(isRegExp(/^a/))
assert(!isRegExp(1))
```

Added in v0.2.0

# isSameType (function)

Determines whether the passed value is same type

**Signature**

```ts

export const isSameType = (a: unknown, b: unknown) => ...

```

**Example**

```ts
import { isString } from 'macoolka-predicate'

assert(isSameType('a', '3'))
assert(isSameType({ a: 1 }, { b: 2 }))
assert(!isSameType('a', { b: 2 }))
assert(!isSameType(1, false))
```

Added in v0.2.0

# isString (function)

Determines whether the passed value is a string

**Signature**

```ts

export const isString: Refinement<unknown, string> = (a: unknown): a is string => ...

```

**Example**

```ts
import { isString } from 'macoolka-predicate'
assert(isString('a'))
assert(!isString(1))
```

Added in v0.2.0

# isSymbol (function)

Determines whether the passed value is symbol.

**Signature**

```ts

export const isSymbol: Refinement<unknown, symbol> =
    (a: unknown): a is symbol => ...

```

**Example**

```ts
import { isSymbol } from 'macoolka-predicate'
const a = Symbol('A')
assert(isSymbol(a))
assert(!isSymbol('b'))
```

Added in v0.2.0

# isTypeName (function)

Determines whether the passed value is given typen name.

**Signature**

```ts

export const isTypeName = <T>(strTypeName: string): Refinement<unknown, T> =>
    (a: unknown): a is T => ...

```

**Example**

```ts
import { isTypeName } from 'macoolka-predicate'
assert(isTypeName('Object')({}))
```

Added in v0.2.0

# isUndefined (function)

Determines whether the passed value is a undefined .

**Signature**

```ts

export const isUndefined: Refinement<unknown, undefined> = (val): val is undefined => ...

```

**Example**

```ts
import { isUndefined } from 'macoolka-predicate'
import * as assert from 'assert'

assert(isUndefined(undefined))
assert(!isUndefined(null))
```

Added in v0.2.0

# notEmpty (function)

Determines whether the passed value is non Empty.

**Example**

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

Added in v0.2.0

# notEmptyArray (function)

Determines whether the passed value is Non Empty Array.

**Signature**

```ts

export const notEmptyArray = <T>(val: unknown): val is NonEmptyArray<T> => ...

```

**Example**

```ts
import { notEmptyArray } from 'macoolka-predicate'
assert(!notEmptyArray([]))
assert(!notEmptyArray(undefined))
assert(!notEmptyArray(null))
assert(notEmptyArray(['1']))
```

Added in v0.2.0

# notEmptyRecord (function)

Determines whether the passed value is Non Empty Record.

**Signature**

```ts

export const notEmptyRecord = <T>(val: Maybe<T>): val is AtLeastOne<T> => ...

```

**Example**

```ts
import { notEmptyRecord } from 'macoolka-predicate'
assert(!notEmptyRecord({}))
assert(!notEmptyRecord(undefined))
assert(!notEmptyRecord(null))
assert(notEmptyRecord({ a: 1 }))
```

Added in v0.2.0

# notMaybe (function)

Determines whether the passed value is not null or undefined.

**Example**

```ts
import { notMaybe } from 'macoolka-predicate'
import * as assert from 'assert'
assert(!notMaybe(undefined))
assert(!notMaybe(null))
assert(notMaybe(''))
```

Added in v0.2.0

# Predicate (export)

**Signature**

```ts
any
```
