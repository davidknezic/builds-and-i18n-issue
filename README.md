# Repro: Vercel `builds` and Next.js `i18n` issue

We make extensive use of Vercel's `builds` feature, which allows
us to build various API functions and our Next.js website all in
one swoop, always ensuring compatibility between these components.

The Vercel monorepo features currently can't guarantee that for us,
as deployments can finish at different times or failing, leaving
the components in an inconsistent state.

Enabling the Next.js `i18n` feature has however broken our current setup,
as all API function requests now return `404 Not Found`.

```diff
module.exports = {
  target: 'serverless',
+  i18n: {
+    locales: ['en', 'de'],
+    defaultLocale: 'en',
+  },
}
```

##  Deployment with "i18n" configured

https://builds-and-i18n-issue-8zwn7bpk7.vercel.app

* ✅ [`/`](https://builds-and-i18n-issue-8zwn7bpk7.vercel.app/)
* ❌ [`/api/test`](https://builds-and-i18n-issue-8zwn7bpk7.vercel.app/api/test)

## Deployment without "i18n" configured

https://builds-and-i18n-issue-1ksrl1uzn.vercel.app

* ✅ [`/`](https://builds-and-i18n-issue-1ksrl1uzn.vercel.app/)
* ✅ [`/api/test`](https://builds-and-i18n-issue-1ksrl1uzn.vercel.app/api/v1/test)
