---
title: home/fastspeeed/mocoolka/core/mocoolka-predicate/src/string.ts
nav_order: 3
parent: Modules
---

# Overview

String predicate collection.

---

<h2 class="text-delta">Table of contents</h2>

- [isEmail (constant)](#isemail-constant)
- [isIpV4 (constant)](#isipv4-constant)
- [isIpV6 (constant)](#isipv6-constant)
- [isUUID (constant)](#isuuid-constant)
- [isUrl (constant)](#isurl-constant)
- [contains (function)](#contains-function)
- [endsIn (function)](#endsin-function)
- [endsInOption (function)](#endsinoption-function)
- [endsWith (function)](#endswith-function)
- [endsWithOption (function)](#endswithoption-function)
- [ins (function)](#ins-function)
- [match (function)](#match-function)
- [maxLength (function)](#maxlength-function)
- [minLength (function)](#minlength-function)
- [notContains (function)](#notcontains-function)
- [notEndsWith (function)](#notendswith-function)
- [notIn (function)](#notin-function)
- [notStartsWith (function)](#notstartswith-function)
- [startsWith (function)](#startswith-function)

---

# isEmail (constant)

Determines whether the given string is `Email`.

**Signature**

```ts

export const isEmail: (a: string) => boolean = ...

```

**Example**

```ts
import { isEmail } from 'mocoolka-predicate'
import * as assert from 'assert'
assert(isEmail('a@mail.com'))
assert(!isEmail('12'))
```

Added in v0.2.0

# isIpV4 (constant)

Determines whether the given string is `IPV4`.

**Signature**

```ts

export const isIpV4: (a: string) => boolean = ...

```

**Example**

```ts
import { isIpV4 } from 'mocoolka-predicate'
import * as assert from 'assert'
assert(isIpV4('8.8.8.8'))
assert(!isIpV4('12'))
```

Added in v0.2.0

# isIpV6 (constant)

Determines whether the given string is `IPV6`.

**Signature**

```ts

export const isIpV6: (a: string) => boolean = ...

```

**Example**

```ts
import { isIpV6 } from 'mocoolka-predicate'
import * as assert from 'assert'
assert(isIpV6('2409:8a15:244a:a780:b0f5:8e9a:2c2e:5ce2'))
assert(!isIpV6('8.8.8.8'))
```

Added in v0.2.0

# isUUID (constant)

Determines whether the given string is `UUID`.

**Signature**

```ts

export const isUUID: (a: string) => boolean = ...

```

**Example**

```ts
import { isUrl } from 'mocoolka-predicate'
import * as assert from 'assert'
assert(isUUID('00000000-0000-0000-0000-000000000000'))
assert(!isUUID('8.8.8.8'))
```

Added in v0.2.0

# isUrl (constant)

Determines whether the given string is `Url`.

**Signature**

```ts

export const isUrl: (a: string) => boolean = ...

```

**Example**

```ts
import { isUrl } from 'mocoolka-predicate'
import * as assert from 'assert'
expect(isUrl('http://bing.com'))
expect(!isUrl('8.8.8.8'))
```

Added in v0.2.0

# contains (function)

Determines whether the given string contain passed string.

**Signature**

```ts

export const contains = (substring: string) => (str: string) => ...

```

**Example**

```ts
import { contains } from 'mocoolka-predicate'
import * as assert from 'assert'
assert(contains('firstColorHover')('firstColorHover'))
assert(contains('Color')('firstColorHover'))
assert(contains('er')('firstColorHover'))
assert(contains('fi')('firstColorHover'))
assert(!contains('abc')('firstColorHover'))
```

Added in v0.2.0

# endsIn (function)

Determines whether the given string ends with given suffix array.

**Signature**

```ts

export const endsIn = (suffix: Array<string>) => (str: string) =>
    suffix.some(a => ...

```

**Example**

```ts
import { endsIn } from 'mocoolka-predicate'
import * as assert from 'assert'
assert(endsIn(['start_with', 'end_with'])('a_start_with'))
assert(endsIn(['start_with', 'end_with'])('a_end_with'))
assert(!endsIn(['start_with', 'end_with'])('a_endwith'))
assert(!endsIn(['start_with', 'end_with'])(''))
```

Added in v0.2.0

# endsInOption (function)

Determines whether the given string ends with given suffix array.
split given string when ture

**Signature**

```ts

export const endsInOption = (suffix: Array<string>) => (str: string) => ...

```

**Example**

```ts
import { endsInOption } from 'mocoolka-predicate'
import * as assert from 'assert'
assert(endsInOption(['_start_with', '_end_with'])('') == none)
expect(endsInOption(['_start_with', '_end_with'])('a_start_with')).toEqual(some({ start: 'a', end: '_start_with' }))
expect(endsInOption(['_start_with', '_end_with'])('a_end_with')).toEqual(some({ start: 'a', end: '_end_with' }))
expect(endsInOption(['_start_with', '_end_with'])('a_endwith') == none)
```

Added in v0.2.0

# endsWith (function)

Determines whether the given string ends with given suffix.

**Signature**

```ts

export const endsWith = (suffix: string) => (str: string) => ...

```

**Example**

```ts
import { endsWith } from 'mocoolka-predicate'
import * as assert from 'assert'
assert(endsWith('b')('ab'))
assert(endsWith('b')('ab1') === false)
```

Added in v0.2.0

# endsWithOption (function)

Determines whether the given string ends with given suffix.
remove given suffix when ture

**Signature**

```ts

export const endsWithOption = (suffix: string) => (str: string) => ...

```

**Example**

```ts
import { endsWithOption } from 'mocoolka-predicate'
import * as assert from 'assert'
expect(endsWithOption('firstColorHover')('firstColorHover')).toEqual(some(''))
expect(endsWithOption('b')('ab')).toEqual(some('a'))
assert(endsWithOption('b')('ab1') === none)
```

Added in v0.2.0

# ins (function)

Determines whether the given string be contained in with passed string array.

**Signature**

```ts

export const ins = (v: Array<string>) => (str: string) => ...

```

**Example**

```ts

import { ins } from 'mocoolka-predicate'
import * as assert from 'assert'
assert(ins(['firstColorHover', 'b'])('firstColorHover'));
assert(!ins(['firstColorHover1', 'b'])('firstColorHover'))
});

```

Added in v0.2.0

# match (function)

Determines whether the given string match `regexp`.

**Signature**

```ts

export const match = (reg: RegExp) => (a: string) => ...

```

**Example**

```ts
import { match } from 'mocoolka-predicate'
import * as assert from 'assert'
assert(match(/^A/)('AB'))
assert(!match(/^A/)('12'))
```

Added in v0.2.0

# maxLength (function)

Determines whether the given string length less equals than given value.

**Signature**

```ts

export const maxLength = (length: number) => (a: string) => ...

```

**Example**

```ts
import { maxLength } from 'mocoolka-predicate'
import * as assert from 'assert'
assert(maxLength(3)('123'))
assert(!maxLength(3)('1234'))
```

Added in v0.2.0

# minLength (function)

Determines whether the given string length great equals than given value.

**Signature**

```ts

export const minLength = (length: number) => (a: string) => ...

```

**Example**

```ts
import { minLength } from 'mocoolka-predicate'
import * as assert from 'assert'
assert(minLength(3)('123'))
assert(!minLength(3)('12'))
```

Added in v0.2.0

# notContains (function)

Determines whether the given string non contain passed string.

**Signature**

```ts

export const notContains = (substring: string) => ...

```

**Example**

```ts
import { notContains } from 'mocoolka-predicate'
import * as assert from 'assert'
assert(!notContains('firstColorHover')('firstColorHover'))
assert(!notContains('Color')('firstColorHover'))
assert(!notContains('er')('firstColorHover'))
```

Added in v0.2.0

# notEndsWith (function)

Determines whether the given string non ends with given suffix.

**Signature**

```ts

export const notEndsWith = (substring: string) => ...

```

**Example**

```ts
import { notEndsWith } from 'mocoolka-predicate'
import * as assert from 'assert'
assert(!notEndsWith('firstColorHover')('firstColorHover'))
assert(!notEndsWith('Hover')('firstColorHover'))
assert(notEndsWith('b')('firstColorHover'))
```

Added in v0.2.0

# notIn (function)

Determines whether the given string be not contained in with passed string array.

**Signature**

```ts

export const notIn = (a: Array<string>) => (str: string) => ...

```

**Example**

```ts
import { notIn } from 'mocoolka-predicate'
import * as assert from 'assert'
assert(!notIn(['firstColorHover', 'b'])('firstColorHover'))
assert(notIn(['firstColorHover1', 'b'])('firstColorHover'))
```

Added in v0.2.0

# notStartsWith (function)

Determines whether the given string non start with given suffix.

**Signature**

```ts

export const notStartsWith = (substring: string) => ...

```

**Example**

```ts
import { notStartsWith } from 'mocoolka-predicate'
import * as assert from 'assert'
assert(notStartsWith('firstColorHove')('firstColorHover') === false)
assert(notStartsWith('b')('firstColorHover'))
```

Added in v0.2.0

# startsWith (function)

Determines whether the given string start with given suffix.

**Signature**

```ts

export const startsWith = (suffix: string) => (str: string) => ...

```

**Example**

```ts
import { startsWith } from 'mocoolka-predicate'
import * as assert from 'assert'
assert(startsWith('a')('ab'))
assert(startsWith('a')('ba') === false)
assert(startsWith('b')('firstColorHover') === false)
```

Added in v0.2.0
