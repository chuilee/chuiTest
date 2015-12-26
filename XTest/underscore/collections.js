var _ = require("../../../node_modules/underscore");

var _arr = [1,2,3,4,5,6, "chuilee"];
var _2arr = [[1,2],[3,4],[6,5]];
var _oarr = [{name: "CHUI"}, {name: "LEE"}, {name: "CHUI", age: "20"}, {name: "LEE", age: "21"}]; 

// reduce 返回叠代结果; Alias: inject, foldl;
var _arrReduce = _.reduce(_arr, function(memo, item, index, arr){
	return memo + item;
}, 0);
console.log("reduce",_arrReduce);

// reduceRight 从右侧开始组合元素; Alias: foldr;
var _arrReduceRight = _.reduceRight(_2arr, function(memo, item, index, arr){
	return memo.concat(item);
}, ["a"]);
console.log("reduceRight",_arrReduceRight);

// return array;
var _arrWhere = _.where(_oarr, {name: "CHUI"});
console.log("where",_arrWhere);

// contains 注意: 因为使用 === 比较, 所以只能检测 非引用类型;`
var _arrContains = _.contains(_arr, "chuilee");
console.log(_arrContains);

// invoke();
var _2arrReverse = _.invoke(_2arr, "sort");
console.log("invoke", _2arrReverse);