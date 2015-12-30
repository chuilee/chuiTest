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

var User = {age: 12};

// invert 将 key 与 value 对调; value必须可被转换为字符串且惟一;
var invertObj = _.invert(obj);
console.log("invert", invertObj);


// create 创建且有给定原型的新对象
var createObj = _.create(User.prototype, {name: "chui"});
console.log("create", createObj);
