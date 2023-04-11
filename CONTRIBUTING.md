# How to Contribute

We'd love to accept your patches and contributions to this project. There are
just a few small guidelines you need to follow.

## Contributor License Agreement

Contributions to this project must be accompanied by a Contributor License
Agreement. You (or your employer) retain the copyright to your contribution,
this simply gives us permission to use and redistribute your contributions as
part of the project. Head over to <https://cla.developers.google.com/> to see
your current agreements on file or to sign a new one.

You generally only need to submit a CLA once, so if you've already submitted one
(even if it was for a different project), you probably don't need to do it
again.

## Code reviews

All submissions, including submissions by project members, require review. We
use GitHub pull requests for this purpose. Consult [GitHub
Help](https://help.github.com/articles/about-pull-requests/) for more
information on using pull requests.

## Community Guidelines

This project follows [Google's Open Source Community
Guidelines](https://opensource.google.com/conduct/).

## Debugging Quicklink

The [`test/fixtures/` folder](test/fixtures/) contains several test cases.
Make sure to create a new test when building a new feature.

Here's an example of how to debug the library by using one of these tests:
[test/fixtures/test-basic-usage.html](test/fixtures/test-basic-usage.html).

1. Comment the following block of code at `test/fixtures/test-basic-usage.html`:

    ```js
    <script src="../../dist/quicklink.umd.js"></script>
    <script>
      quicklink.listen();
    </script>
    ```

2. Add the following snippet in its place, to import the module from its
   source file:

    ```js
    <script type="module">
      import { listen } from '../../src/index.mjs';
      listen();
    </script>
    ```

3. Open [src/index.mjs](src/index.mjs) for edit and replace the following line:

    ```js
    import throttle from 'throttles';
    ```

    By:

    ```js
    import throttle from '../node_modules/throttles/dist/index.mjs'
    ```

4. Build the project: `npm run build`.

5. Start a local server: `npm start`. By default, this will start the local server at
   `https://localhost:8080`.

6. Open the file where the modifications where made:
   `http://localhost:8080/test/fixtures/test-basic-usage.html`.

7. Open Chrome DevTools and go the **Sources** tab.

8. Under `localhost:8080/src` you can find the unminified versions of the
   `Quicklink` files. Now you can use breakpoints and inspect variables to
   debug the library.
