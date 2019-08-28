---
title: logic.ts
nav_order: 2
parent: Modules
---

# Overview

Logic function about predicate

---

<h2 class="text-delta">Table of contents</h2>

- [and (function)](#and-function)
- [foldAND (function)](#foldand-function)
- [foldOR (function)](#foldor-function)
- [not (function)](#not-function)
- [or (function)](#or-function)

---

# and (function)

Concat Predicate with and

**Signature**

```ts

export const and = <A>(p1: Predicate<A>, p2: Predicate<A>): Predicate<A> => ...

```

**Example**

```ts
import { and } from 'macoolka-predicate'
interface A {
  name: string
  age: number
}
const as: A[] = [{ name: 'a1', age: 20 }, { name: 'a2', age: 20 }, { name: 'a3', age: 28 }]
const isName = (a: A) => a.name === 'a1'
const isAge = (a: A) => a.age === 20
expect(as.filter(and(isName, isAge)).length).toEqual(1)
```

Added in v0.2.0

# foldAND (function)

fold Predicate with and

**Signature**

```ts

export const foldAND = <A>(p: Array<Predicate<A>>): Predicate<A> => ...

```

**Example**

```ts
import { foldAND } from 'macoolka-predicate'
interface A {
  name: string
  age: number
}
const as: A[] = [{ name: 'a1', age: 20 }, { name: 'a2', age: 20 }, { name: 'a3', age: 28 }]
const isName = (a: A) => a.name === 'a1'
const isAge = (a: A) => a.age === 20
expect(as.filter(foldAND([isName, isAge])).length).toEqual(1)
```

Added in v0.2.0

# foldOR (function)

fold Predicate with or

**Signature**

```ts

export const foldOR = <A>(p: Array<Predicate<A>>): Predicate<A> => ...

```

**Example**

```ts
import { foldOR } from 'macoolka-predicate'
interface A {
  name: string
  age: number
}
const as: A[] = [{ name: 'a1', age: 20 }, { name: 'a2', age: 20 }, { name: 'a3', age: 28 }]
const isName = (a: A) => a.name === 'a1'
const isAge = (a: A) => a.age === 20
expect(as.filter(foldOR([isName, isAge])).length).toEqual(2)
```

Added in v0.2.0

# not (function)

not a Predicate

**Example**

```ts
import { and } from 'macoolka-predicate'
interface A {
  name: string
  age: number
}
const as: A[] = [{ name: 'a1', age: 20 }, { name: 'a2', age: 20 }, { name: 'a3', age: 28 }]
const isName = (a: A) => a.name === 'a1'
const isAge = (a: A) => a.age === 20
expect(as.filter(and(isName, isAge)).length).toEqual(1)
```

Added in v0.2.0

# or (function)

Concat Predicate with or

**Example**

```ts
import { or } from 'macoolka-predicate'
interface A {
  name: string
  age: number
}
const as: A[] = [{ name: 'a1', age: 20 }, { name: 'a2', age: 20 }, { name: 'a3', age: 28 }]
const isName = (a: A) => a.name === 'a1'
const isAge = (a: A) => a.age === 20
expect(as.filter(or(isName, isAge)).length).toEqual(2)
```

Added in v0.2.0
