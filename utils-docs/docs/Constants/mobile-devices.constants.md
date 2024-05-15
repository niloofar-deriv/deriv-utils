---
sidebar_position: 2
---

# mobile-devices

This utility module provides a regular expression and a set of valid codes to detect and validate Huawei device codes in a string.

### `huaweiDevicesRegex`

This regex matches standalone sequences of three uppercase letters followed by a hyphen, using global and case-insensitive search.

```typescript
import { huaweiDevicesRegex } from "@deriv-com/utils";

const isValid = huaweiDevicesRegex.test("ALP-"); // returns true
```

### `validCodes`

This is a set of valid Huawei device codes. It can be used to check if a detected code is a valid Huawei device code.

```typescript
import { validCodes } from "@deriv-com/utils";

const isValidCode = validCodes.has("ALP-"); // returns true
```

#### Note

These utilities can be used in conjunction with the `mobileOSDetectAsync` function to detect if a user is on a Huawei device running Android. If `mobileOSDetectAsync` returns "huawei", you can use `huaweiDevicesRegex` and `validCodes` to further validate the device code.
