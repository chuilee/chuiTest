'use strict'

var obj = { stu1: {name: 'jay'}, stu2:{name: 'may day'}, stu3: {name: 'jolin'}}
var arr = [1,2,3,4,5]
var set = new Set()

console.log(set)

set.add({stu3: {name: 'hebe'}})

set.add(obj)

console.log(set)

for (let key of set) {
	console.log(key)
}

var string = 'it is a fucking day'
for (let chart of string) {
	console.log(chart)
}

let iterable = new Uint8Array([0x00, 0xff]);

console.log(iterable)

var reg = /ab/ 
console.log('_.property: ' + _.property(reg))