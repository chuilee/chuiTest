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
    name: 'LEE',
    age: "68"
}, {
    name: 'CHUI',
    age: '20'
}, {
    name: 'LEE',
    age: '21'
}];

var obj = { name: "CHUILEE", age: "26"};

function GetUserInfo(){
    console.log(this.name + " is " + this.age + "years old !");
};

var userInfo = _.bind(GetUserInfo, obj);
userInfo();
// new GetUserInfo();
