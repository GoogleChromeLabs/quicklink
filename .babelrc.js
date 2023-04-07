'use strict';

module.exports = {
  presets: [
    '@babel/preset-react',
    [
      '@babel/preset-env',
      {
        loose: true,
        bugfixes: true
      }
    ]
  ]
};
