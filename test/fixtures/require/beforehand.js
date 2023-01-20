'use strict';

var request = require('postman-request');
var rp = require('../../../');

var requestHasNoThen = request('http://localhost:4000/200').then === undefined;
var rpHasThen = rp('http://localhost:4000/200').then !== undefined;

console.log('request: ' + requestHasNoThen + ', rp: ' + rpHasThen);
