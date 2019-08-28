---
title: basic.ts
nav_order: 1
parent: Modules
---

# Overview

Baisc Compare Function

---

<h2 class="text-delta">Table of contents</h2>

- [between (function)](#between-function)
- [eq (function)](#eq-function)
- [gt (function)](#gt-function)
- [gte (function)](#gte-function)
- [lt (function)](#lt-function)
- [lte (function)](#lte-function)
- [not_eq (function)](#not_eq-function)

---

# between (function)

between low and hi

**Signature**

```ts

export const between = <A = number | string>({ low, hi }: { low: A, hi: A }) => (x: A) => ...

```

**Example**

```ts
import { between } from 'macoolka-predicate'
assert(between({ hi: 'c', low: 'a' })('b'))
assert(between({ hi: 'c', low: 'a' })('a'))
assert(between({ hi: 'c', low: 'a' })('c'))
assert(!between({ hi: 'c', low: 'a' })('d'))
assert(between({ hi: 3, low: 1 })(2))
assert(between({ hi: 3, low: 1 })(3))
assert(between({ hi: 3, low: 1 })(1))
assert(!between({ hi: 3, low: 1 })(4))
```

Added in v0.2.0

# eq (function)

Baisc Compare Function

**Signature**

```ts

export const eq = <A = number | string | boolean>(y: A) => (x: A) => ...

```

**Example**

```ts
import { eq } from 'macoolka-predicate'
assert(eq('a')('a'))
assert(eq(1)(1))
assert(eq(true)(true))
assert(!eq('a')('b'))
assert(!eq(1)(2))
assert(!eq(true)(false))
```

Added in v0.2.0

# gt (function)

greater than

**Signature**

```ts

export const gt = <A = number | string>(y: A) => (x: A) => ...

```

**Example**

```ts
import { gt } from 'macoolka-predicate'
assert(!gt('b')('a'))
assert(!gt(2)(1))
assert(!gt('a')('a'))
assert(gt('a')('b'))
assert(!gt(1)(1))
assert(gt(1)(2))
```

Added in v0.2.0

# gte (function)

greater than Or equals

**Signature**

```ts

export const gte = <A = number | string>(y: A) => (x: A) => ...

```

**Example**

```ts
import { gte } from 'macoolka-predicate'
assert(!gte('b')('a'))
assert(!gte(2)(1))
assert(gte('a')('a'))
assert(gte('a')('b'))
assert(gte(1)(1))
assert(gte(1)(2))
```

Added in v0.2.0

# lt (function)

less than

**Signature**

```ts

export const lt = <A = number | string>(y: A) => (x: A) => ...

```

**Example**

```ts
import { lt } from 'macoolka-predicate'
assert(lt('b')('a'))
assert(lt(2)(1))
assert(!lt('a')('a'))
assert(!lt('a')('b'))
assert(!lt(1)(1))
assert(!lt(1)(2))
```

Added in v0.2.0

# lte (function)

less than Or equals

**Signature**

```ts

export const lte = <A = number | string>(y: A) => (x: A) => ...

```

**Example**

```ts
import { lte } from 'macoolka-predicate'
assert(lte('b')('a'))
assert(lte(2)(1))
assert(lte('a')('a'))
assert(!lte('a')('b'))
assert(lte(1)(1))
assert(!lte(1)(2))
```

Added in v0.2.0

# not_eq (function)

non equals

**Signature**

```ts

export const not_eq = <A = number | string | boolean>(y: A) => (x: A) => ...

```

**Example**

```ts
import { not_eq } from 'macoolka-predicate'
assert(!not_eq('a')('a'))
assert(!not_eq(1)(1))
assert(!not_eq(true)(true))
assert(not_eq('a')('b'))
assert(not_eq(1)(2))
assert(not_eq(true)(false))
```

Added in v0.2.0
