'use strict';
var _ = require('../../../node_modules/underscore');

var _arr = [1, 2, 3, 4, 5, 6];
var _2arr = [
	0,
    [1, 2],
    [3, 4],
    [6, [5]],
    [1,2],
    0,
    1,
    2
];
var _oarr = [{
    name: 'CHUI'
}, {
    name: 'LEE',
    age: "68"
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

// without 使用 === 测试;
var _arrWithout = _.without(_arr, 1,2,3);
console.log("without", _arrWithout);

// var _2arrWithout = _.without(_2arr, [1,2],0);
// console.log("_2arrWithout", _2arrWithout);

// var _2arrWithout1 = _.without.apply(_, _2arr, [1,2], 0);
// console.log("_2arrWithout1", _2arrWithout1);


// object 
var _arrObject = _.object(_arr, _oarr);
console.log(_arrObject);

// sortedIndex
var _arrSortedIndex = _.sortedIndex(_arr, "3");
console.log(_arrSortedIndex);

//uniq  返回array去重后副本, 使用 === 作比较
var _2arrUniq = _.uniq(_2arr);
console.log(_2arrUniq);