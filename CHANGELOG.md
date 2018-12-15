## 1.0.0 (2018-12-14)

* release(package.json): bump to 1.0.0 ([bd82a6c](https://github.com/addyosmani/quicklink/commit/bd82a6c))
* infra(prefetch.mjs): add jsdoc for third-arg to prefetcher ([c5ed343](https://github.com/addyosmani/quicklink/commit/c5ed343))
* infra(tests): fix linting for spec ([ba74f11](https://github.com/addyosmani/quicklink/commit/ba74f11))
* docs: clarify Network Information API browser support ([ac5f7d9](https://github.com/addyosmani/quicklink/commit/ac5f7d9))
* docs: describe “ignores” & add recipe ([26a126c](https://github.com/addyosmani/quicklink/commit/26a126c))
* docs: describe new opts w/ recipes ([d2a7870](https://github.com/addyosmani/quicklink/commit/d2a7870))
* docs(README.md): clarify layered support ([0025caa](https://github.com/addyosmani/quicklink/commit/0025caa))
* test: add “ignores” suite ([b89faf0](https://github.com/addyosmani/quicklink/commit/b89faf0))
* test: add origins & sameOrigin suites ([21f601b](https://github.com/addyosmani/quicklink/commit/21f601b))
* fix: add "unpkg" entry ([3a0d97c](https://github.com/addyosmani/quicklink/commit/3a0d97c))
* fix: drop `sameOrigin` but move to same origin default; ([11af301](https://github.com/addyosmani/quicklink/commit/11af301))
* fix: remove `typeof document` check; ([c578c32](https://github.com/addyosmani/quicklink/commit/c578c32))
* fix: rename “filter” -> “ignores” ([a1544da](https://github.com/addyosmani/quicklink/commit/a1544da))
* fix: retain RegExp caller context ([53f5169](https://github.com/addyosmani/quicklink/commit/53f5169))
* fix: revert `options` inlining; ([194881f](https://github.com/addyosmani/quicklink/commit/194881f))
* feat: add “opt.origins” for inspecting before queue; ([1074d46](https://github.com/addyosmani/quicklink/commit/1074d46))
* feat: add flexible `filter` option; ([4e64ca1](https://github.com/addyosmani/quicklink/commit/4e64ca1))
* feat: add option to restrict same origin; ([2a31aee](https://github.com/addyosmani/quicklink/commit/2a31aee))
* feat(index.mjs): normalize URLs being prefetched (#27) ([1da37f4](https://github.com/addyosmani/quicklink/commit/1da37f4)), closes [#27](https://github.com/addyosmani/quicklink/issues/27)
* add test & recipe for all origins ([ab6375a](https://github.com/addyosmani/quicklink/commit/ab6375a))
* fixed polyfilling ([92e11ed](https://github.com/addyosmani/quicklink/commit/92e11ed))
* new URL(...): add location.href as second parameter ([d8ed5f9](https://github.com/addyosmani/quicklink/commit/d8ed5f9))
* tests(test-static-url-list): expand prefetch URL paths ([3027c72](https://github.com/addyosmani/quicklink/commit/3027c72))
* golf: compress `support` helper; ([9df00ff](https://github.com/addyosmani/quicklink/commit/9df00ff))
* golf: inline `options.priority` default; ([36cc199](https://github.com/addyosmani/quicklink/commit/36cc199))
* golf: inline `options` defaults; ([fe5f735](https://github.com/addyosmani/quicklink/commit/fe5f735))
* golf: inline `withCredentials` assignment; ([1c94262](https://github.com/addyosmani/quicklink/commit/1c94262))
* golf: only use `document.head` for append; ([189984a](https://github.com/addyosmani/quicklink/commit/189984a))
* golf: save `navigator.connection` to var; ([5f95309](https://github.com/addyosmani/quicklink/commit/5f95309))



## <small>0.1.2 (2018-12-12)</small>

* release(package.json): bump release ([de41a3c](https://github.com/addyosmani/quicklink/commit/de41a3c))
* Fix wrong operator precedence: negation vs 'in' ([c2864b0](https://github.com/addyosmani/quicklink/commit/c2864b0))
* fixes #5: localize and fix network-idle-callback deps ([807e8ad](https://github.com/addyosmani/quicklink/commit/807e8ad)), closes [#5](https://github.com/addyosmani/quicklink/issues/5)
* docs(README.md): add demo details (for #12) ([842f92a](https://github.com/addyosmani/quicklink/commit/842f92a)), closes [#12](https://github.com/addyosmani/quicklink/issues/12)
* docs(README.md): minor clean-up of demo text ([4c03801](https://github.com/addyosmani/quicklink/commit/4c03801))
* docs(readme): correct a small typo ([93814e2](https://github.com/addyosmani/quicklink/commit/93814e2))



## <small>0.1.1 (2018-12-12)</small>

* release(package.json): bump version ([25b7cc7](https://github.com/addyosmani/quicklink/commit/25b7cc7))
* Readme: Fix Guessjs website link ([0a32e19](https://github.com/addyosmani/quicklink/commit/0a32e19))
* fix: amend incorrect `querySelector` call ([e330066](https://github.com/addyosmani/quicklink/commit/e330066))



## 0.1.0 (2018-12-11)

* 0.1.0 ([a76eade](https://github.com/addyosmani/quicklink/commit/a76eade))
* Clean up promises ([e4923ee](https://github.com/addyosmani/quicklink/commit/e4923ee))
* feat(prefetch links scrolling into viewport) for #6 ([d1e825d](https://github.com/addyosmani/quicklink/commit/d1e825d)), closes [#6](https://github.com/addyosmani/quicklink/issues/6)
* fix typo~ ([0c791bf](https://github.com/addyosmani/quicklink/commit/0c791bf))
* Improve basic demo ([04fa0d0](https://github.com/addyosmani/quicklink/commit/04fa0d0))
* infra(lint-fixes) for index and prefetch ([c8c47f8](https://github.com/addyosmani/quicklink/commit/c8c47f8))
* Make it proper IUU ([e6ffca9](https://github.com/addyosmani/quicklink/commit/e6ffca9))
* Revert logic changes, but keep refactors ([a9d2216](https://github.com/addyosmani/quicklink/commit/a9d2216))
* revert multi-if statement ([cbe616a](https://github.com/addyosmani/quicklink/commit/cbe616a))
* docs(CONTRIBUTING.md): add contribution guidelines ([4a3da7b](https://github.com/addyosmani/quicklink/commit/4a3da7b))
* docs(README): add link to gatsby guess plugin + prefetch notes ([d67a31a](https://github.com/addyosmani/quicklink/commit/d67a31a))
* docs(README): add logo and badges ([ec2b87c](https://github.com/addyosmani/quicklink/commit/ec2b87c))
* docs(README): changes for new boolean priority ([7ba57a6](https://github.com/addyosmani/quicklink/commit/7ba57a6))
* docs(README): fix references to GoogleChomeLabs ([9056abe](https://github.com/addyosmani/quicklink/commit/9056abe))
* docs(README): minor tweaks ([2c04988](https://github.com/addyosmani/quicklink/commit/2c04988))
* release(package.json): bump due to priority now being Boolean ([d3c3806](https://github.com/addyosmani/quicklink/commit/d3c3806))
* release(package.json): bump version ([5064745](https://github.com/addyosmani/quicklink/commit/5064745))
* infra(eslint): bump to ecma 9 ([6336333](https://github.com/addyosmani/quicklink/commit/6336333))
* infra(linting): fix linting issues from #15 ([e6c90d8](https://github.com/addyosmani/quicklink/commit/e6c90d8)), closes [#15](https://github.com/addyosmani/quicklink/issues/15)
* infra(tests): add test for links scrolled into viewport ([7b7e5ff](https://github.com/addyosmani/quicklink/commit/7b7e5ff))
* infra(tests): minor rename ([62b60cd](https://github.com/addyosmani/quicklink/commit/62b60cd))
* infra(travis): attempt to fix server perms ([fdbabff](https://github.com/addyosmani/quicklink/commit/fdbabff))
* infra(travis): config for tests ([2f0631b](https://github.com/addyosmani/quicklink/commit/2f0631b))
* infra(travis): revert ports ([972eacc](https://github.com/addyosmani/quicklink/commit/972eacc))
* fix: match long ternary style ([06a9a0a](https://github.com/addyosmani/quicklink/commit/06a9a0a))
* fix: move puppeteer to devdeps ([d98cec8](https://github.com/addyosmani/quicklink/commit/d98cec8))
* golf: assert against `Map.get` existence; ([2cd1daf](https://github.com/addyosmani/quicklink/commit/2cd1daf))
* golf: combine `nav.connection` if-statements; ([34e9718](https://github.com/addyosmani/quicklink/commit/34e9718))
* golf: hoist shared “prefetcher” helper; ([2a5f63b](https://github.com/addyosmani/quicklink/commit/2a5f63b))
* golf: inline `isIntersecting` filter; ([1037e38](https://github.com/addyosmani/quicklink/commit/1037e38))
* golf: observe link & update Map in same loop; ([47b370d](https://github.com/addyosmani/quicklink/commit/47b370d))
* golf: remove `return` within observer; ([0e569a3](https://github.com/addyosmani/quicklink/commit/0e569a3))
* golf: remove duplicate `typeof document` check; ([1662c0c](https://github.com/addyosmani/quicklink/commit/1662c0c))
* golf: skip `setAttribute` & assign directly; ([f7cb14e](https://github.com/addyosmani/quicklink/commit/f7cb14e))
* golf: use `Array.from` to gather URL values; ([5def7dd](https://github.com/addyosmani/quicklink/commit/5def7dd))
* golf: use `doc.head` & `doc.querySelector`; ([53b7d15](https://github.com/addyosmani/quicklink/commit/53b7d15))
* golf: use Object.assign for defaults; ([11c4369](https://github.com/addyosmani/quicklink/commit/11c4369))
* golf: use Promise instead of AsyncFunction; ([84a0468](https://github.com/addyosmani/quicklink/commit/84a0468))
* golf: use Set & share `prefetch` caller; ([d221c51](https://github.com/addyosmani/quicklink/commit/d221c51))
* golf: use ternary within prefetch functions; ([be441dc](https://github.com/addyosmani/quicklink/commit/be441dc))
* golf(breaking): use Boolean for `priority` option; ([e478a47](https://github.com/addyosmani/quicklink/commit/e478a47))



## <small>0.0.3 (2018-12-05)</small>

* release(package.json) bump to 0.0.3 ([2d46f53](https://github.com/addyosmani/quicklink/commit/2d46f53))
* Docs(README): add browser support and typo fix ([d2e18ad](https://github.com/addyosmani/quicklink/commit/d2e18ad))
* Docs(README): minor revisions (why, support, projects) ([59d23d4](https://github.com/addyosmani/quicklink/commit/59d23d4))
* docs(prefetch): add missing jsdoc comments ([cada9d4](https://github.com/addyosmani/quicklink/commit/cada9d4))
* docs(README.md): link to APIs used ([a9af442](https://github.com/addyosmani/quicklink/commit/a9af442))
* docs(README): add note about timeoutFn ([46b0874](https://github.com/addyosmani/quicklink/commit/46b0874))
* docs(README): add notes on unpkg and initializing ([3609ac9](https://github.com/addyosmani/quicklink/commit/3609ac9))
* docs(README): add why and related projects. ([8799aca](https://github.com/addyosmani/quicklink/commit/8799aca))
* docs(README): further revisions to browser support ([2e49f1f](https://github.com/addyosmani/quicklink/commit/2e49f1f))
* refactor(index.mjs): fix timeoutFn fallbacks ([bfa8917](https://github.com/addyosmani/quicklink/commit/bfa8917))
* feat(bundlesize): add initial setup ([61012b4](https://github.com/addyosmani/quicklink/commit/61012b4))
* demos(basic.html): add simplest usage demo ([e51781b](https://github.com/addyosmani/quicklink/commit/e51781b))
* demos(network-idle): add network-idle-callback demo ([d4ae22d](https://github.com/addyosmani/quicklink/commit/d4ae22d))
* core(index.mjs): add support for timeoutFn ([524b72e](https://github.com/addyosmani/quicklink/commit/524b72e))
* infra(package.json): server->start, add demos to linting ([783a1b5](https://github.com/addyosmani/quicklink/commit/783a1b5))



## <small>0.0.2 (2018-11-27)</small>

* 0.0.1 ([cddf434](https://github.com/addyosmani/quicklink/commit/cddf434))
* 0.0.2 ([eb5c15e](https://github.com/addyosmani/quicklink/commit/eb5c15e))
* Drop private ([fadf8b3](https://github.com/addyosmani/quicklink/commit/fadf8b3))
* fix test typos ([f3f3f9b](https://github.com/addyosmani/quicklink/commit/f3f3f9b))
* release(pkg.json): bump ([200d528](https://github.com/addyosmani/quicklink/commit/200d528))
* tests(bootstrap): extend timeout to 20000 ([e5bf3f3](https://github.com/addyosmani/quicklink/commit/e5bf3f3))
* docs(README): add API, polyfills, expand recipes ([9205c20](https://github.com/addyosmani/quicklink/commit/9205c20))
* docs(README): add installation instructions, some better jobs. ([b2ffa41](https://github.com/addyosmani/quicklink/commit/b2ffa41))
* docs(README): fix typo ([43306cf](https://github.com/addyosmani/quicklink/commit/43306cf))
* docs(README): minor tweaks. ([baa9ec0](https://github.com/addyosmani/quicklink/commit/baa9ec0))
* feat(index.mjs): add support for rIC timeout customisation ([18bea81](https://github.com/addyosmani/quicklink/commit/18bea81))
* feat(tests refactoring): add mocha, chai tests with puppeteer ([d0b8911](https://github.com/addyosmani/quicklink/commit/d0b8911))
* feat(tests): add initial testing ([fd81b71](https://github.com/addyosmani/quicklink/commit/fd81b71))
* feat(tests): improve test coverage ([3ee52bd](https://github.com/addyosmani/quicklink/commit/3ee52bd))
* feat(tests): move /demo to tests directory ([9d8ff74](https://github.com/addyosmani/quicklink/commit/9d8ff74))



## <small>0.0.1 (2018-11-24)</small>

* (tidy) clean-up demo directory ([dc6bc58](https://github.com/addyosmani/quicklink/commit/dc6bc58))
* (tidy) index.mjs: JSDoc comments ([e0d0afe](https://github.com/addyosmani/quicklink/commit/e0d0afe))
* 0.0.1 ([9ad703b](https://github.com/addyosmani/quicklink/commit/9ad703b))
* Add babelrc and travis configuration ([d417c9c](https://github.com/addyosmani/quicklink/commit/d417c9c))
* Add demo directory ([67784f7](https://github.com/addyosmani/quicklink/commit/67784f7))
* Add dist to gitignore ([3eb7f8c](https://github.com/addyosmani/quicklink/commit/3eb7f8c))
* Add handling for effectiveconnectiontype ([47dbaf5](https://github.com/addyosmani/quicklink/commit/47dbaf5))
* Add microbundle and configuration to package ([6571ff0](https://github.com/addyosmani/quicklink/commit/6571ff0))
* Add package.json ([fd6149b](https://github.com/addyosmani/quicklink/commit/fd6149b))
* Add saveData handling ([32902a7](https://github.com/addyosmani/quicklink/commit/32902a7))
* Adds index: initial implementation ([ce0aa40](https://github.com/addyosmani/quicklink/commit/ce0aa40))
* Clean-up source ([ecbd70f](https://github.com/addyosmani/quicklink/commit/ecbd70f))
* clean(index, prefetch): move connection logic to prefetcher ([a7cafa4](https://github.com/addyosmani/quicklink/commit/a7cafa4))
* clean(index.mjs, prefetch.mjs) move prefetching logic to one place ([6e5d9fb](https://github.com/addyosmani/quicklink/commit/6e5d9fb))
* clean(src/index.mjs, src/prefetch.mjs): further reshuffling ([9fe6036](https://github.com/addyosmani/quicklink/commit/9fe6036))
* docs(pkg, README): more tweaks. ([c1e66c5](https://github.com/addyosmani/quicklink/commit/c1e66c5))
* feat(index, prefetch) Add support for higher prio fetches ([c4fb77a](https://github.com/addyosmani/quicklink/commit/c4fb77a))
* fix(demo/index.html): Reference UMD build ([6e7a838](https://github.com/addyosmani/quicklink/commit/6e7a838))
* Initial commit ([869ce69](https://github.com/addyosmani/quicklink/commit/869ce69))
* Lots of ESLint fixes ([5d0af3d](https://github.com/addyosmani/quicklink/commit/5d0af3d))
* minor(index, prefetch): renaming ([2c03bba](https://github.com/addyosmani/quicklink/commit/2c03bba))
* tidy(demo/index.html): drop unused script reference ([4aecc0f](https://github.com/addyosmani/quicklink/commit/4aecc0f))
* docs(package.json): get consistent with description ([c2f00ed](https://github.com/addyosmani/quicklink/commit/c2f00ed))
* docs(README): add how it works, usage and recipes. ([0a26a65](https://github.com/addyosmani/quicklink/commit/0a26a65))
* fix(src): Add license headers ([adf645e](https://github.com/addyosmani/quicklink/commit/adf645e))



