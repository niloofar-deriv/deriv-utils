---
sidebar_position: 2
---

# CountryUtils

### getCountry

Fetches the country code based on Cloudflare's trace data or a fallback from cookies.
This function attempts to retrieve the country location by first fetching trace data from Cloudflare
and then falling back to the location stored in the cookies if the fetch fails.

It returns a string representing the country code in lowercase.

#### Example

```js
getCountry().then((country) => console.log(country));
```
