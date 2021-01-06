# Repro: Vercel `rewrites` and Next.js `i18n` issue

We use _Vercel_ `rewrites` quite a lot in our project.

We also have a Next.js site in our Vercel project.

Since we've activated the Next.js `i18n` feature, our _Vercel_ rewrites are broken.

```diff
module.exports = {
  target: 'serverless',
+  i18n: {
+    locales: ['en', 'de'],
+    defaultLocale: 'en',
+  },
}
```

## Try it

This project is deployed under [builds-and-i18n-issue.vercel.app](https://builds-and-i18n-issue.vercel.app/).

It consists of a Next.js and a `/function.js` build.

It also adds a rewrite from `/rewritten` to `/function.js`.

A call to `/rewritten` leads to 404 Not Found.

We'd expect it to return `It works!` from `/function.js`.
