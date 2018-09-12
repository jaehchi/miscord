require('babel-polyfill');
require('babel-register');

const { readFileSync } = require('fs');
const { resolve } = require('path');
const env = require('dotenv');

if (!readFileSync(resolve(__dirname, '../.env'))) {
  // console.log('.env config file must exist in rest-server root');
  throw new Error('.env config file must exist in rest-server root')
}

env.config({
  path: resolve(__dirname, '../.env'),
});

require('../src');