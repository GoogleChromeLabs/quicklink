'use strict';

const {execFileSync} = require('child_process');
const {suite} = require('uvu');
const assert = require('uvu/assert');

const ssr = suite('server-side imports');

for (const directory of ['dist', 'dist/react']) {
  for (const file of ['quicklink.js', 'quicklink.umd.js', 'quicklink.mjs', 'quicklink.modern.mjs']) {
    ssr(`${directory}/${file} imports without browser globals`, () => {
      const path = require.resolve(`../${directory}/${file}`);
      const output = execFileSync(process.execPath, ['-e', `
        import(${JSON.stringify(path)}).then(namespace => {
          const module = namespace.default || namespace;
          if (typeof module.listen !== 'function' || typeof module.prefetch !== 'function') {
            throw new Error('Missing public exports');
          }
          process.stdout.write('imported');
        });
      `], {encoding: 'utf8'});
      assert.is(output, 'imported');
    });
  }
}

ssr('withQuicklink renders component props on the server', () => {
  const output = execFileSync(process.execPath, ['-e', `
    const React = require('react');
    const {renderToString} = require('react-dom/server');
    const {withQuicklink} = require('./dist/react/hoc.js');
    const Component = ({label}) => React.createElement('a', {href: '/next'}, label);
    process.stdout.write(renderToString(React.createElement(withQuicklink(Component), {label: 'Next'})));
  `], {cwd: require('path').resolve(__dirname, '..'), encoding: 'utf8'});
  assert.is(output, '<div><a href="/next">Next</a></div>');
});

ssr.run();
