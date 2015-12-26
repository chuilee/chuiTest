'use strict';
var _ = require('../../../node_modules/underscore');

var _arr = [1, 2, 3, 4, 5, 6];
var _2arr = [
	0,
    [1, 2],
    [3, 4],
    [6, [5]]
];
var _oarr = [{
    name: 'CHUI'
}, {
    name: 'LEE'
}, {
    name: 'CHUI',
    age: '20'
}, {
    name: 'LEE',
    age: '21'
}];

// compact remove value == false;
var _arrCompact = _.compact(_2arr);
console.log(_arrCompact);

// flatlen 
var _arrFlatten = _.flatten(_2arr, true);
console.log(_arrFlatten);

// 