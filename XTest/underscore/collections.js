'use strict';
var _ = require('../../../node_modules/underscore');

var _arr = [1, 2, 3, 4, 5, 6];
var _2arr = [
    [1, 2],
    [3, 4],
    [6, 5]
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

// reduce 返回叠代结果; Alias: inject, foldl;
var _arrReduce = _.reduce(_arr, function(memo, item) {
    return memo + item;
}, 0);
console.log('reduce', _arrReduce);

// reduceRight 从右侧开始组合元素; Alias: foldr;
var _arrReduceRight = _.reduceRight(_2arr, function(memo, item) {
    return memo.concat(item);
}, ['a']);
console.log('reduceRight', _arrReduceRight);

// return array;
var _arrWhere = _.where(_oarr, {
    name: 'CHUI'
});
console.log('where', _arrWhere);

// contains 注意: 因为使用 === 比较, 所以只能检测 非引用类型;
var _arrContains = _.contains(_arr, 'chuilee');
console.log(_arrContains);

// invoke(lists, method, args);  args 为 method 的传参; 
var _2arrReverse = _.invoke(_2arr, 'sort', function(a, b) {
    return b - a;
});
console.log('invoke', _2arrReverse);

// max(lists, iterate)
var _arrMax = _.max(_oarr, function(obj) {
    return obj.age;
});
console.log('max', _arrMax);

// groupBy
var _arrGroupby = _.groupBy(_arr, function(arr){ return arr > 3});
console.log('groupBy', _arrGroupby);


// shuffle 随机排序;
var _oarrShuffle = _.shuffle(_oarr);
console.log(_oarrShuffle);

// sample 随机获取n项元素
var _arrSample = _.sample(_arr, 3);
console.log(_arrSample);

// partition
var _arrPartition = _.partition(_arr, function(item){ return item%2 == 0 });
console.log(_arrPartition);
