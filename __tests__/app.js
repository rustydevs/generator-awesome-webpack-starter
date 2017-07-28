'use strict';
var path = require('path');
var assert = require('yeoman-assert');
var helpers = require('yeoman-test');

describe('generator-awesome-webpack-starter:app', () => {
  beforeAll(() => {
    return helpers.run(path.join(__dirname, '../generators/app'));
    // .withPrompts({someAnswer: true});
  });

  it('creates files', () => {
    assert.file([
      'package.json',
      'webpack.prod.js',
      'webpack.config.js',
      '.gitignore',
      // 'README.md',
      'webpack.dev.js',
      'yarn.lock',
      'src',
      'src/index.js',
      'src/scss',
      'src/scss/styles.scss'
    ]);
  });
});
