'use strict';
var _ = require('../../../node_modules/underscore');

var obj = {
    name: "CHUILEE",
    age: "26",
    school: "CHUI MIDDLE SCHOOL",
    home: {
        address: "xeshan",
        tel: "0797-12345678"
    }
};

var arr = [1,2,3,4,5,{name: "CHUILEE"}];
var str = "I am from China!";

var User = {age: 12};

// invert 将 key 与 value 对调; value必须可被转换为字符串且惟一;
var invertObj = _.invert(obj);
console.log("invert", invertObj);


// create 创建且有给定原型的新对象
var createObj = _.create(User.prototype, {name: "chui"});
console.log("create", createObj);

// defautls 填充 obj 未定义的属性;
var objDefaults = _.defaults(obj, {family: "LEE"});
console.log(objDefaults);

// clone 浅拷贝
var cloneObj = _.clone(obj);
console.log(cloneObj === obj);

console.log("isEqual",_.isEqual(obj, cloneObj));

var cloneStr = _.clone(str);
console.log(cloneStr === str);

// property
var returnKey = _.property("name")(obj);
console.log(returnKey);

// isEqual
var equalObj1 = {name: "Chui", age: "12", months: [1,2,3,4]};
var equalObj2 = {name: "Chui", age: "12", months: [1,2,3,4]};
console.log("isEqual", _.isEqual(equalObj1, equalObj2));

// isMatch 与 contains
var isMatchObj = _.isMatch(obj, {name: "CHUILEE"});
console.log("isMatchObj", isMatchObj);
var containsObj = _.contains(obj, {name: "CHUILEE"});
console.log("containsObj",containsObj);
var isMatchArr = _.isMatch(arr, {name: "CHUILEE"});
console.log("isMatchArr", isMatchArr);

// isArguments
(function(){
	console.log("isArguments",_.isArguments(arguments),arguments[1]);
})(1,2,3);