## 2.2.0 (2021-06-18)

This release includes support for a new `threshold` option [PR](https://github.com/GoogleChromeLabs/quicklink/pull/214) to allow users select the % of link areas that entered the viewport before prefetching. This can reduce the number of links to prefetch at a time, and ultimately reduce the impact on CDNs and servers. 

Thanks to [@verlock](https://github.com/verlok) from YNAP for this contribution.

* Added `threshold` option to allow users select the % of link areas that entered the viewport before  ([d3746e1](https://github.com/GoogleChromeLabs/quicklink/commit/d3746e1)), closes [#214](https://github.com/GoogleChromeLabs/quicklink/issues/214)
* Add Magento Quicklink module (Readme + Site) (#216) ([c77e057](https://github.com/GoogleChromeLabs/quicklink/commit/c77e057)), closes [#216](https://github.com/GoogleChromeLabs/quicklink/issues/216)
* Instructions to debug Quicklink ([2b3dc21](https://github.com/GoogleChromeLabs/quicklink/commit/2b3dc21))

## 2.1.0 (2021-02-07)

* [docs] Add React SPA demos to repo and site (#179) ([179cb56](https://github.com/GoogleChromeLabs/quicklink/commit/179cb56)), closes [#179](https://github.com/GoogleChromeLabs/quicklink/issues/179)
* [docs] drop highlightjs reference and link up prism styles ([b91872b](https://github.com/GoogleChromeLabs/quicklink/commit/b91872b))
* [docs] Fix quicklink logo ([25829de](https://github.com/GoogleChromeLabs/quicklink/commit/25829de))
* [docs] minor tweak to header text ([cd31382](https://github.com/GoogleChromeLabs/quicklink/commit/cd31382))
* [docs] refactor api docs syntax highlighting ([59f7eca](https://github.com/GoogleChromeLabs/quicklink/commit/59f7eca))
* [docs] refactor copy-snippets syntax highlighting ([5445a8b](https://github.com/GoogleChromeLabs/quicklink/commit/5445a8b))
* [docs] refactor measure docs syntax highlighting ([eaa87ac](https://github.com/GoogleChromeLabs/quicklink/commit/eaa87ac))
* [docs] refactor over-prefetching docs syntax highlighting ([6ec1287](https://github.com/GoogleChromeLabs/quicklink/commit/6ec1287))
* [docs] refactor react docs syntax highlighting ([ba5984d](https://github.com/GoogleChromeLabs/quicklink/commit/ba5984d))
* [docs] refactor usage docs syntax highlighting ([25367f4](https://github.com/GoogleChromeLabs/quicklink/commit/25367f4))
* [docs] remainder of syntax highlighting fixes ([cf32a85](https://github.com/GoogleChromeLabs/quicklink/commit/cf32a85))
* [docs] remove highlightjs ([7ff8c8f](https://github.com/GoogleChromeLabs/quicklink/commit/7ff8c8f))
* [docs] Update CHANGELOG ([c4a4726](https://github.com/GoogleChromeLabs/quicklink/commit/c4a4726))
* [docs] various style theme improvements ([06786fb](https://github.com/GoogleChromeLabs/quicklink/commit/06786fb))
* [feat] (options): Add a `hrefFn` option to build the URL to prefetch. (#201) ([ee072d4](https://github.com/GoogleChromeLabs/quicklink/commit/ee072d4)), closes [#201](https://github.com/GoogleChromeLabs/quicklink/issues/201)
* [feat] `delay` option to reduce impact on CDNs and servers [alternative without data-attributes] (#2 ([5cdf569](https://github.com/GoogleChromeLabs/quicklink/commit/5cdf569)), closes [#217](https://github.com/GoogleChromeLabs/quicklink/issues/217)
* [infra] add eleventy syntax highlighting ([b48f80d](https://github.com/GoogleChromeLabs/quicklink/commit/b48f80d))
* [infra] Add site to firebase hosting config ([fe43486](https://github.com/GoogleChromeLabs/quicklink/commit/fe43486))
* [infra] bump version to 2.1.0 ([81232e8](https://github.com/GoogleChromeLabs/quicklink/commit/81232e8))
* Added Ray-Ban and Oakley from Luxxotica to trustedByLogos section (#202) ([b4494b0](https://github.com/GoogleChromeLabs/quicklink/commit/b4494b0)), closes [#202](https://github.com/GoogleChromeLabs/quicklink/issues/202)
* Correct typo, duplicate "passing" (#185) ([932f655](https://github.com/GoogleChromeLabs/quicklink/commit/932f655)), closes [#185](https://github.com/GoogleChromeLabs/quicklink/issues/185)
* Fix issues typo in 'network-idle.js' (#218) ([534e7b3](https://github.com/GoogleChromeLabs/quicklink/commit/534e7b3)), closes [#218](https://github.com/GoogleChromeLabs/quicklink/issues/218)
* New demo page (#205) ([5205d62](https://github.com/GoogleChromeLabs/quicklink/commit/5205d62)), closes [#205](https://github.com/GoogleChromeLabs/quicklink/issues/205)
* update homepage url in package.json (#184) ([172275b](https://github.com/GoogleChromeLabs/quicklink/commit/172275b)), closes [#184](https://github.com/GoogleChromeLabs/quicklink/issues/184)
* Updating broken link ([224df77](https://github.com/GoogleChromeLabs/quicklink/commit/224df77))
* Fix: Cannot read property 'then' of undefined (#188) ([a8872b8](https://github.com/GoogleChromeLabs/quicklink/commit/a8872b8)), closes [#188](https://github.com/GoogleChromeLabs/quicklink/issues/188)
* chore(deps): bump http-proxy from 1.18.0 to 1.18.1 (#200) ([0aa5157](https://github.com/GoogleChromeLabs/quicklink/commit/0aa5157)), closes [#200](https://github.com/GoogleChromeLabs/quicklink/issues/200)



## 2.0.0 (2020-05-07)

* [infra] Add site updates for 2.0.0 (#178) ([8aa512b](https://github.com/GoogleChromeLabs/quicklink/commit/8aa512b)), closes [#178](https://github.com/GoogleChromeLabs/quicklink/issues/178)
* [infra] Bump versions to 2.0.0 ([08d9a39](https://github.com/GoogleChromeLabs/quicklink/commit/08d9a39))
* 2.0.0 ([735caf6](https://github.com/GoogleChromeLabs/quicklink/commit/735caf6))



## 2.0.0-beta (2020-04-24)

* [core] Adds withQuicklink HOC (#172) ([89cd6a9](https://github.com/GoogleChromeLabs/quicklink/commit/89cd6a9)), closes [#172](https://github.com/GoogleChromeLabs/quicklink/issues/172) [#175](https://github.com/GoogleChromeLabs/quicklink/issues/175) [#176](https://github.com/GoogleChromeLabs/quicklink/issues/176) [#177](https://github.com/GoogleChromeLabs/quicklink/issues/177)
* [core] Introduce prefetch chunks build (#171) ([301aedb](https://github.com/GoogleChromeLabs/quicklink/commit/301aedb)), closes [#171](https://github.com/GoogleChromeLabs/quicklink/issues/171) [#168](https://github.com/GoogleChromeLabs/quicklink/issues/168) [#169](https://github.com/GoogleChromeLabs/quicklink/issues/169)
* [docs] Add initial site ([e934a2b](https://github.com/GoogleChromeLabs/quicklink/commit/e934a2b))
* [docs] Add notes on double-keyed caching ([03d3c97](https://github.com/GoogleChromeLabs/quicklink/commit/03d3c97))
* [docs] Added Newegg to trustedByLogos section (#153) ([453a661](https://github.com/GoogleChromeLabs/quicklink/commit/453a661)), closes [#153](https://github.com/GoogleChromeLabs/quicklink/issues/153)
* [docs] Bugfix/syntax highlighting site (#147) ([0f644e7](https://github.com/GoogleChromeLabs/quicklink/commit/0f644e7)), closes [#147](https://github.com/GoogleChromeLabs/quicklink/issues/147)
* [docs] Compress site resources w/ImageOptim ([179e18e](https://github.com/GoogleChromeLabs/quicklink/commit/179e18e))
* [docs] Measuring impact of QuickLink in sites guide (#146) ([2ce99e3](https://github.com/GoogleChromeLabs/quicklink/commit/2ce99e3)), closes [#146](https://github.com/GoogleChromeLabs/quicklink/issues/146)
* [docs] New section "Quicklink extension" for home page. (#150) ([468c231](https://github.com/GoogleChromeLabs/quicklink/commit/468c231)), closes [#150](https://github.com/GoogleChromeLabs/quicklink/issues/150)
* [docs] Over-prefetching section for home page (#148) ([75aa643](https://github.com/GoogleChromeLabs/quicklink/commit/75aa643)), closes [#148](https://github.com/GoogleChromeLabs/quicklink/issues/148)
* [docs] Update the Angular logo (#158) ([836f170](https://github.com/GoogleChromeLabs/quicklink/commit/836f170)), closes [#158](https://github.com/GoogleChromeLabs/quicklink/issues/158)
* [infra] Add firebase deployment ([89ab866](https://github.com/GoogleChromeLabs/quicklink/commit/89ab866))
* [infra] Fix tests (#142) ([6644860](https://github.com/GoogleChromeLabs/quicklink/commit/6644860)), closes [#142](https://github.com/GoogleChromeLabs/quicklink/issues/142)
* [infra] Publish dist directory (#98) ([9cdf06f](https://github.com/GoogleChromeLabs/quicklink/commit/9cdf06f)), closes [#98](https://github.com/GoogleChromeLabs/quicklink/issues/98)
* 2.0.0-beta ([185d1e8](https://github.com/GoogleChromeLabs/quicklink/commit/185d1e8))
* Add support for Quicklink 2.0.0-alpha ([7c7c917](https://github.com/GoogleChromeLabs/quicklink/commit/7c7c917))
* Add twitter metadata ([74d3224](https://github.com/GoogleChromeLabs/quicklink/commit/74d3224))
* Adding SPA section to README.md  ([ea3229a](https://github.com/GoogleChromeLabs/quicklink/commit/ea3229a))
* Fix typo on README (#127) ([5acb27e](https://github.com/GoogleChromeLabs/quicklink/commit/5acb27e)), closes [#127](https://github.com/GoogleChromeLabs/quicklink/issues/127)
* package.json: bump version to 2.0.0-alpha ([d5d5ca5](https://github.com/GoogleChromeLabs/quicklink/commit/d5d5ca5))
* Updates to initial site (#144) ([3f796f6](https://github.com/GoogleChromeLabs/quicklink/commit/3f796f6)), closes [#144](https://github.com/GoogleChromeLabs/quicklink/issues/144)
* chore(deps): bump acorn from 6.4.0 to 6.4.1 (#167) ([8b62949](https://github.com/GoogleChromeLabs/quicklink/commit/8b62949)), closes [#167](https://github.com/GoogleChromeLabs/quicklink/issues/167)



## 2.0.0-alpha (2019-09-25)

* (docs) update to remove TODOs from README ([8cd1183](https://github.com/GoogleChromeLabs/quicklink/commit/8cd1183))
* Update docs with ad-related considerations (#122) ([7ac672f](https://github.com/GoogleChromeLabs/quicklink/commit/7ac672f)), closes [#122](https://github.com/GoogleChromeLabs/quicklink/issues/122)
* Major: Rework exports; Add `throttle` and `limit` options (#120) ([4044de0](https://github.com/GoogleChromeLabs/quicklink/commit/4044de0)), closes [#120](https://github.com/GoogleChromeLabs/quicklink/issues/120) [#1](https://github.com/GoogleChromeLabs/quicklink/issues/1)



## <small>1.0.1 (2019-08-17)</small>

* (demo) Introduce new demos for basic + workbox usage ([9eb7fa0](https://github.com/GoogleChromeLabs/quicklink/commit/9eb7fa0))
* (demos) Add new demos to README ([85729aa](https://github.com/GoogleChromeLabs/quicklink/commit/85729aa))
* (docs) Update README: note on session stitching ([ba9795c](https://github.com/GoogleChromeLabs/quicklink/commit/ba9795c))
* (infra) Bump version to 1.0.1 ([d75188d](https://github.com/GoogleChromeLabs/quicklink/commit/d75188d))
* A few quick size optimizations ([201c217](https://github.com/GoogleChromeLabs/quicklink/commit/201c217))
* Add homepage and bugs links to package.json (#116) ([002645b](https://github.com/GoogleChromeLabs/quicklink/commit/002645b)), closes [#116](https://github.com/GoogleChromeLabs/quicklink/issues/116)
* Add note to README about Drupal module. ([d94ff80](https://github.com/GoogleChromeLabs/quicklink/commit/d94ff80))
* Check if `requestIdleCallback` exists in `window` (#112) ([089da91](https://github.com/GoogleChromeLabs/quicklink/commit/089da91)), closes [#112](https://github.com/GoogleChromeLabs/quicklink/issues/112)
* Create .editorconfig (#61) ([beae09b](https://github.com/GoogleChromeLabs/quicklink/commit/beae09b)), closes [#61](https://github.com/GoogleChromeLabs/quicklink/issues/61)
* Fail silently, don’t throw an error, when IntersectionObserver isn’t available (#113) ([32e5b61](https://github.com/GoogleChromeLabs/quicklink/commit/32e5b61)), closes [#113](https://github.com/GoogleChromeLabs/quicklink/issues/113)
* Fix ES Module import syntax ([a2b90ff](https://github.com/GoogleChromeLabs/quicklink/commit/a2b90ff))
* GitHub Issue Templates (#109) ([2e6401e](https://github.com/GoogleChromeLabs/quicklink/commit/2e6401e)), closes [#109](https://github.com/GoogleChromeLabs/quicklink/issues/109)
* HTML formatting tidy for Tests & Demos (#114) ([f4aef2e](https://github.com/GoogleChromeLabs/quicklink/commit/f4aef2e)), closes [#114](https://github.com/GoogleChromeLabs/quicklink/issues/114)
* HTTPS link to gruntjs.com (#100) ([47f49e7](https://github.com/GoogleChromeLabs/quicklink/commit/47f49e7)), closes [#100](https://github.com/GoogleChromeLabs/quicklink/issues/100)
* HTTPS link to nodejs.org (#110) ([cf9551e](https://github.com/GoogleChromeLabs/quicklink/commit/cf9551e)), closes [#110](https://github.com/GoogleChromeLabs/quicklink/issues/110)
* Mention instant.page as a related project ([0bc8aec](https://github.com/GoogleChromeLabs/quicklink/commit/0bc8aec))
* Mention Safari ≥ 12.1 working without polyfills (#111) ([b01e5bb](https://github.com/GoogleChromeLabs/quicklink/commit/b01e5bb)), closes [#111](https://github.com/GoogleChromeLabs/quicklink/issues/111)
* remove extraneous full stops / periods from comment (#105) ([23737af](https://github.com/GoogleChromeLabs/quicklink/commit/23737af)), closes [#105](https://github.com/GoogleChromeLabs/quicklink/issues/105)
* remove unneeded type="text/css"  from demo (#106) ([4dc74f1](https://github.com/GoogleChromeLabs/quicklink/commit/4dc74f1)), closes [#106](https://github.com/GoogleChromeLabs/quicklink/issues/106)
* remove unneeded type="text/css"  from demo page (#104) ([24919bd](https://github.com/GoogleChromeLabs/quicklink/commit/24919bd)), closes [#104](https://github.com/GoogleChromeLabs/quicklink/issues/104)
* Update link to Gatsby with Guess.js (#108) ([dc02d33](https://github.com/GoogleChromeLabs/quicklink/commit/dc02d33)), closes [#108](https://github.com/GoogleChromeLabs/quicklink/issues/108)
* Update microbundle to fix "missing JSX plugin" issue ([8f5cf22](https://github.com/GoogleChromeLabs/quicklink/commit/8f5cf22))
* Update repo path in package.json ([45e9bbd](https://github.com/GoogleChromeLabs/quicklink/commit/45e9bbd))
* Update the Readme and add a mention of the WordPress plugin ([0f15f45](https://github.com/GoogleChromeLabs/quicklink/commit/0f15f45))
* Use latest version of polyfill.io JS (#92) ([b15c8ba](https://github.com/GoogleChromeLabs/quicklink/commit/b15c8ba)), closes [#92](https://github.com/GoogleChromeLabs/quicklink/issues/92)
* fix: Attempt to address build issues (Travis) ([9755280](https://github.com/GoogleChromeLabs/quicklink/commit/9755280))
* fix: stop observing links once prefetched; ([ce0011c](https://github.com/GoogleChromeLabs/quicklink/commit/ce0011c))
* fix(README): use UMD file for <script> tags ([e735eb7](https://github.com/GoogleChromeLabs/quicklink/commit/e735eb7))
* docs(browser-support): add note for IE9-10 users (#67) ([aa40490](https://github.com/GoogleChromeLabs/quicklink/commit/aa40490)), closes [#67](https://github.com/GoogleChromeLabs/quicklink/issues/67)
* docs(README): add simplified Chinese version for README.md (#36) ([a3e0221](https://github.com/GoogleChromeLabs/quicklink/commit/a3e0221)), closes [#36](https://github.com/GoogleChromeLabs/quicklink/issues/36)
* docs(README): add URL fragments note about ignores (#52, #49) ([c28c002](https://github.com/GoogleChromeLabs/quicklink/commit/c28c002)), closes [#52](https://github.com/GoogleChromeLabs/quicklink/issues/52) [#49](https://github.com/GoogleChromeLabs/quicklink/issues/49)
* docs(README): address feedback (ignores) ([95ee730](https://github.com/GoogleChromeLabs/quicklink/commit/95ee730))
* docs(README): formatting -> recipe headings ([0073e2a](https://github.com/GoogleChromeLabs/quicklink/commit/0073e2a))
* docs(translated README): link to zh-CN MDN docs ([409cb2c](https://github.com/GoogleChromeLabs/quicklink/commit/409cb2c))
* ci: update Yarn with the recommended official commands ([1a92452](https://github.com/GoogleChromeLabs/quicklink/commit/1a92452))
* ci: use Yarn for all scripts ([4477ec6](https://github.com/GoogleChromeLabs/quicklink/commit/4477ec6))
* chore(release): add conventional-changelog-cli & changelog ([532b985](https://github.com/GoogleChromeLabs/quicklink/commit/532b985))



## 1.0.0 (2018-12-14)

* release(package.json): bump to 1.0.0 ([bd82a6c](https://github.com/GoogleChromeLabs/quicklink/commit/bd82a6c))
* infra(prefetch.mjs): add jsdoc for third-arg to prefetcher ([c5ed343](https://github.com/GoogleChromeLabs/quicklink/commit/c5ed343))
* infra(tests): fix linting for spec ([ba74f11](https://github.com/GoogleChromeLabs/quicklink/commit/ba74f11))
* docs: clarify Network Information API browser support ([ac5f7d9](https://github.com/GoogleChromeLabs/quicklink/commit/ac5f7d9))
* docs: describe “ignores” & add recipe ([26a126c](https://github.com/GoogleChromeLabs/quicklink/commit/26a126c))
* docs: describe new opts w/ recipes ([d2a7870](https://github.com/GoogleChromeLabs/quicklink/commit/d2a7870))
* docs(README.md): clarify layered support ([0025caa](https://github.com/GoogleChromeLabs/quicklink/commit/0025caa))
* test: add “ignores” suite ([b89faf0](https://github.com/GoogleChromeLabs/quicklink/commit/b89faf0))
* test: add origins & sameOrigin suites ([21f601b](https://github.com/GoogleChromeLabs/quicklink/commit/21f601b))
* fix: add "unpkg" entry ([3a0d97c](https://github.com/GoogleChromeLabs/quicklink/commit/3a0d97c))
* fix: drop `sameOrigin` but move to same origin default; ([11af301](https://github.com/GoogleChromeLabs/quicklink/commit/11af301))
* fix: remove `typeof document` check; ([c578c32](https://github.com/GoogleChromeLabs/quicklink/commit/c578c32))
* fix: rename “filter” -> “ignores” ([a1544da](https://github.com/GoogleChromeLabs/quicklink/commit/a1544da))
* fix: retain RegExp caller context ([53f5169](https://github.com/GoogleChromeLabs/quicklink/commit/53f5169))
* fix: revert `options` inlining; ([194881f](https://github.com/GoogleChromeLabs/quicklink/commit/194881f))
* feat: add “opt.origins” for inspecting before queue; ([1074d46](https://github.com/GoogleChromeLabs/quicklink/commit/1074d46))
* feat: add flexible `filter` option; ([4e64ca1](https://github.com/GoogleChromeLabs/quicklink/commit/4e64ca1))
* feat: add option to restrict same origin; ([2a31aee](https://github.com/GoogleChromeLabs/quicklink/commit/2a31aee))
* feat(index.mjs): normalize URLs being prefetched (#27) ([1da37f4](https://github.com/GoogleChromeLabs/quicklink/commit/1da37f4)), closes [#27](https://github.com/GoogleChromeLabs/quicklink/issues/27)
* add test & recipe for all origins ([ab6375a](https://github.com/GoogleChromeLabs/quicklink/commit/ab6375a))
* fixed polyfilling ([92e11ed](https://github.com/GoogleChromeLabs/quicklink/commit/92e11ed))
* new URL(...): add location.href as second parameter ([d8ed5f9](https://github.com/GoogleChromeLabs/quicklink/commit/d8ed5f9))
* tests(test-static-url-list): expand prefetch URL paths ([3027c72](https://github.com/GoogleChromeLabs/quicklink/commit/3027c72))
* golf: compress `support` helper; ([9df00ff](https://github.com/GoogleChromeLabs/quicklink/commit/9df00ff))
* golf: inline `options.priority` default; ([36cc199](https://github.com/GoogleChromeLabs/quicklink/commit/36cc199))
* golf: inline `options` defaults; ([fe5f735](https://github.com/GoogleChromeLabs/quicklink/commit/fe5f735))
* golf: inline `withCredentials` assignment; ([1c94262](https://github.com/GoogleChromeLabs/quicklink/commit/1c94262))
* golf: only use `document.head` for append; ([189984a](https://github.com/GoogleChromeLabs/quicklink/commit/189984a))
* golf: save `navigator.connection` to var; ([5f95309](https://github.com/GoogleChromeLabs/quicklink/commit/5f95309))



## <small>0.1.2 (2018-12-12)</small>

* release(package.json): bump release ([de41a3c](https://github.com/GoogleChromeLabs/quicklink/commit/de41a3c))
* Fix wrong operator precedence: negation vs 'in' ([c2864b0](https://github.com/GoogleChromeLabs/quicklink/commit/c2864b0))
* fixes #5: localize and fix network-idle-callback deps ([807e8ad](https://github.com/GoogleChromeLabs/quicklink/commit/807e8ad)), closes [#5](https://github.com/GoogleChromeLabs/quicklink/issues/5)
* docs(README.md): add demo details (for #12) ([842f92a](https://github.com/GoogleChromeLabs/quicklink/commit/842f92a)), closes [#12](https://github.com/GoogleChromeLabs/quicklink/issues/12)
* docs(README.md): minor clean-up of demo text ([4c03801](https://github.com/GoogleChromeLabs/quicklink/commit/4c03801))
* docs(readme): correct a small typo ([93814e2](https://github.com/GoogleChromeLabs/quicklink/commit/93814e2))



## <small>0.1.1 (2018-12-12)</small>

* release(package.json): bump version ([25b7cc7](https://github.com/GoogleChromeLabs/quicklink/commit/25b7cc7))
* Readme: Fix Guessjs website link ([0a32e19](https://github.com/GoogleChromeLabs/quicklink/commit/0a32e19))
* fix: amend incorrect `querySelector` call ([e330066](https://github.com/GoogleChromeLabs/quicklink/commit/e330066))



## 0.1.0 (2018-12-11)

* 0.1.0 ([a76eade](https://github.com/GoogleChromeLabs/quicklink/commit/a76eade))
* Clean up promises ([e4923ee](https://github.com/GoogleChromeLabs/quicklink/commit/e4923ee))
* feat(prefetch links scrolling into viewport) for #6 ([d1e825d](https://github.com/GoogleChromeLabs/quicklink/commit/d1e825d)), closes [#6](https://github.com/GoogleChromeLabs/quicklink/issues/6)
* fix typo~ ([0c791bf](https://github.com/GoogleChromeLabs/quicklink/commit/0c791bf))
* Improve basic demo ([04fa0d0](https://github.com/GoogleChromeLabs/quicklink/commit/04fa0d0))
* infra(lint-fixes) for index and prefetch ([c8c47f8](https://github.com/GoogleChromeLabs/quicklink/commit/c8c47f8))
* Make it proper IUU ([e6ffca9](https://github.com/GoogleChromeLabs/quicklink/commit/e6ffca9))
* Revert logic changes, but keep refactors ([a9d2216](https://github.com/GoogleChromeLabs/quicklink/commit/a9d2216))
* revert multi-if statement ([cbe616a](https://github.com/GoogleChromeLabs/quicklink/commit/cbe616a))
* docs(CONTRIBUTING.md): add contribution guidelines ([4a3da7b](https://github.com/GoogleChromeLabs/quicklink/commit/4a3da7b))
* docs(README): add link to gatsby guess plugin + prefetch notes ([d67a31a](https://github.com/GoogleChromeLabs/quicklink/commit/d67a31a))
* docs(README): add logo and badges ([ec2b87c](https://github.com/GoogleChromeLabs/quicklink/commit/ec2b87c))
* docs(README): changes for new boolean priority ([7ba57a6](https://github.com/GoogleChromeLabs/quicklink/commit/7ba57a6))
* docs(README): fix references to GoogleChomeLabs ([9056abe](https://github.com/GoogleChromeLabs/quicklink/commit/9056abe))
* docs(README): minor tweaks ([2c04988](https://github.com/GoogleChromeLabs/quicklink/commit/2c04988))
* release(package.json): bump due to priority now being Boolean ([d3c3806](https://github.com/GoogleChromeLabs/quicklink/commit/d3c3806))
* release(package.json): bump version ([5064745](https://github.com/GoogleChromeLabs/quicklink/commit/5064745))
* infra(eslint): bump to ecma 9 ([6336333](https://github.com/GoogleChromeLabs/quicklink/commit/6336333))
* infra(linting): fix linting issues from #15 ([e6c90d8](https://github.com/GoogleChromeLabs/quicklink/commit/e6c90d8)), closes [#15](https://github.com/GoogleChromeLabs/quicklink/issues/15)
* infra(tests): add test for links scrolled into viewport ([7b7e5ff](https://github.com/GoogleChromeLabs/quicklink/commit/7b7e5ff))
* infra(tests): minor rename ([62b60cd](https://github.com/GoogleChromeLabs/quicklink/commit/62b60cd))
* infra(travis): attempt to fix server perms ([fdbabff](https://github.com/GoogleChromeLabs/quicklink/commit/fdbabff))
* infra(travis): config for tests ([2f0631b](https://github.com/GoogleChromeLabs/quicklink/commit/2f0631b))
* infra(travis): revert ports ([972eacc](https://github.com/GoogleChromeLabs/quicklink/commit/972eacc))
* fix: match long ternary style ([06a9a0a](https://github.com/GoogleChromeLabs/quicklink/commit/06a9a0a))
* fix: move puppeteer to devdeps ([d98cec8](https://github.com/GoogleChromeLabs/quicklink/commit/d98cec8))
* golf: assert against `Map.get` existence; ([2cd1daf](https://github.com/GoogleChromeLabs/quicklink/commit/2cd1daf))
* golf: combine `nav.connection` if-statements; ([34e9718](https://github.com/GoogleChromeLabs/quicklink/commit/34e9718))
* golf: hoist shared “prefetcher” helper; ([2a5f63b](https://github.com/GoogleChromeLabs/quicklink/commit/2a5f63b))
* golf: inline `isIntersecting` filter; ([1037e38](https://github.com/GoogleChromeLabs/quicklink/commit/1037e38))
* golf: observe link & update Map in same loop; ([47b370d](https://github.com/GoogleChromeLabs/quicklink/commit/47b370d))
* golf: remove `return` within observer; ([0e569a3](https://github.com/GoogleChromeLabs/quicklink/commit/0e569a3))
* golf: remove duplicate `typeof document` check; ([1662c0c](https://github.com/GoogleChromeLabs/quicklink/commit/1662c0c))
* golf: skip `setAttribute` & assign directly; ([f7cb14e](https://github.com/GoogleChromeLabs/quicklink/commit/f7cb14e))
* golf: use `Array.from` to gather URL values; ([5def7dd](https://github.com/GoogleChromeLabs/quicklink/commit/5def7dd))
* golf: use `doc.head` & `doc.querySelector`; ([53b7d15](https://github.com/GoogleChromeLabs/quicklink/commit/53b7d15))
* golf: use Object.assign for defaults; ([11c4369](https://github.com/GoogleChromeLabs/quicklink/commit/11c4369))
* golf: use Promise instead of AsyncFunction; ([84a0468](https://github.com/GoogleChromeLabs/quicklink/commit/84a0468))
* golf: use Set & share `prefetch` caller; ([d221c51](https://github.com/GoogleChromeLabs/quicklink/commit/d221c51))
* golf: use ternary within prefetch functions; ([be441dc](https://github.com/GoogleChromeLabs/quicklink/commit/be441dc))
* golf(breaking): use Boolean for `priority` option; ([e478a47](https://github.com/GoogleChromeLabs/quicklink/commit/e478a47))



## <small>0.0.3 (2018-12-05)</small>

* release(package.json) bump to 0.0.3 ([2d46f53](https://github.com/GoogleChromeLabs/quicklink/commit/2d46f53))
* Docs(README): add browser support and typo fix ([d2e18ad](https://github.com/GoogleChromeLabs/quicklink/commit/d2e18ad))
* Docs(README): minor revisions (why, support, projects) ([59d23d4](https://github.com/GoogleChromeLabs/quicklink/commit/59d23d4))
* docs(prefetch): add missing jsdoc comments ([cada9d4](https://github.com/GoogleChromeLabs/quicklink/commit/cada9d4))
* docs(README.md): link to APIs used ([a9af442](https://github.com/GoogleChromeLabs/quicklink/commit/a9af442))
* docs(README): add note about timeoutFn ([46b0874](https://github.com/GoogleChromeLabs/quicklink/commit/46b0874))
* docs(README): add notes on unpkg and initializing ([3609ac9](https://github.com/GoogleChromeLabs/quicklink/commit/3609ac9))
* docs(README): add why and related projects. ([8799aca](https://github.com/GoogleChromeLabs/quicklink/commit/8799aca))
* docs(README): further revisions to browser support ([2e49f1f](https://github.com/GoogleChromeLabs/quicklink/commit/2e49f1f))
* refactor(index.mjs): fix timeoutFn fallbacks ([bfa8917](https://github.com/GoogleChromeLabs/quicklink/commit/bfa8917))
* feat(bundlesize): add initial setup ([61012b4](https://github.com/GoogleChromeLabs/quicklink/commit/61012b4))
* demos(basic.html): add simplest usage demo ([e51781b](https://github.com/GoogleChromeLabs/quicklink/commit/e51781b))
* demos(network-idle): add network-idle-callback demo ([d4ae22d](https://github.com/GoogleChromeLabs/quicklink/commit/d4ae22d))
* core(index.mjs): add support for timeoutFn ([524b72e](https://github.com/GoogleChromeLabs/quicklink/commit/524b72e))
* infra(package.json): server->start, add demos to linting ([783a1b5](https://github.com/GoogleChromeLabs/quicklink/commit/783a1b5))



## <small>0.0.2 (2018-11-27)</small>

* 0.0.1 ([cddf434](https://github.com/GoogleChromeLabs/quicklink/commit/cddf434))
* 0.0.2 ([eb5c15e](https://github.com/GoogleChromeLabs/quicklink/commit/eb5c15e))
* Drop private ([fadf8b3](https://github.com/GoogleChromeLabs/quicklink/commit/fadf8b3))
* fix test typos ([f3f3f9b](https://github.com/GoogleChromeLabs/quicklink/commit/f3f3f9b))
* release(pkg.json): bump ([200d528](https://github.com/GoogleChromeLabs/quicklink/commit/200d528))
* tests(bootstrap): extend timeout to 20000 ([e5bf3f3](https://github.com/GoogleChromeLabs/quicklink/commit/e5bf3f3))
* docs(README): add API, polyfills, expand recipes ([9205c20](https://github.com/GoogleChromeLabs/quicklink/commit/9205c20))
* docs(README): add installation instructions, some better jobs. ([b2ffa41](https://github.com/GoogleChromeLabs/quicklink/commit/b2ffa41))
* docs(README): fix typo ([43306cf](https://github.com/GoogleChromeLabs/quicklink/commit/43306cf))
* docs(README): minor tweaks. ([baa9ec0](https://github.com/GoogleChromeLabs/quicklink/commit/baa9ec0))
* feat(index.mjs): add support for rIC timeout customisation ([18bea81](https://github.com/GoogleChromeLabs/quicklink/commit/18bea81))
* feat(tests refactoring): add mocha, chai tests with puppeteer ([d0b8911](https://github.com/GoogleChromeLabs/quicklink/commit/d0b8911))
* feat(tests): add initial testing ([fd81b71](https://github.com/GoogleChromeLabs/quicklink/commit/fd81b71))
* feat(tests): improve test coverage ([3ee52bd](https://github.com/GoogleChromeLabs/quicklink/commit/3ee52bd))
* feat(tests): move /demo to tests directory ([9d8ff74](https://github.com/GoogleChromeLabs/quicklink/commit/9d8ff74))



## <small>0.0.1 (2018-11-24)</small>

* (tidy) clean-up demo directory ([dc6bc58](https://github.com/GoogleChromeLabs/quicklink/commit/dc6bc58))
* (tidy) index.mjs: JSDoc comments ([e0d0afe](https://github.com/GoogleChromeLabs/quicklink/commit/e0d0afe))
* 0.0.1 ([9ad703b](https://github.com/GoogleChromeLabs/quicklink/commit/9ad703b))
* Add babelrc and travis configuration ([d417c9c](https://github.com/GoogleChromeLabs/quicklink/commit/d417c9c))
* Add demo directory ([67784f7](https://github.com/GoogleChromeLabs/quicklink/commit/67784f7))
* Add dist to gitignore ([3eb7f8c](https://github.com/GoogleChromeLabs/quicklink/commit/3eb7f8c))
* Add handling for effectiveconnectiontype ([47dbaf5](https://github.com/GoogleChromeLabs/quicklink/commit/47dbaf5))
* Add microbundle and configuration to package ([6571ff0](https://github.com/GoogleChromeLabs/quicklink/commit/6571ff0))
* Add package.json ([fd6149b](https://github.com/GoogleChromeLabs/quicklink/commit/fd6149b))
* Add saveData handling ([32902a7](https://github.com/GoogleChromeLabs/quicklink/commit/32902a7))
* Adds index: initial implementation ([ce0aa40](https://github.com/GoogleChromeLabs/quicklink/commit/ce0aa40))
* Clean-up source ([ecbd70f](https://github.com/GoogleChromeLabs/quicklink/commit/ecbd70f))
* clean(index, prefetch): move connection logic to prefetcher ([a7cafa4](https://github.com/GoogleChromeLabs/quicklink/commit/a7cafa4))
* clean(index.mjs, prefetch.mjs) move prefetching logic to one place ([6e5d9fb](https://github.com/GoogleChromeLabs/quicklink/commit/6e5d9fb))
* clean(src/index.mjs, src/prefetch.mjs): further reshuffling ([9fe6036](https://github.com/GoogleChromeLabs/quicklink/commit/9fe6036))
* docs(pkg, README): more tweaks. ([c1e66c5](https://github.com/GoogleChromeLabs/quicklink/commit/c1e66c5))
* feat(index, prefetch) Add support for higher prio fetches ([c4fb77a](https://github.com/GoogleChromeLabs/quicklink/commit/c4fb77a))
* fix(demo/index.html): Reference UMD build ([6e7a838](https://github.com/GoogleChromeLabs/quicklink/commit/6e7a838))
* Initial commit ([869ce69](https://github.com/GoogleChromeLabs/quicklink/commit/869ce69))
* Lots of ESLint fixes ([5d0af3d](https://github.com/GoogleChromeLabs/quicklink/commit/5d0af3d))
* minor(index, prefetch): renaming ([2c03bba](https://github.com/GoogleChromeLabs/quicklink/commit/2c03bba))
* tidy(demo/index.html): drop unused script reference ([4aecc0f](https://github.com/GoogleChromeLabs/quicklink/commit/4aecc0f))
* docs(package.json): get consistent with description ([c2f00ed](https://github.com/GoogleChromeLabs/quicklink/commit/c2f00ed))
* docs(README): add how it works, usage and recipes. ([0a26a65](https://github.com/GoogleChromeLabs/quicklink/commit/0a26a65))
* fix(src): Add license headers ([adf645e](https://github.com/GoogleChromeLabs/quicklink/commit/adf645e))



