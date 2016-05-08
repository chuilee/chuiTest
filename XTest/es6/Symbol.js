(() => {

  // module scoped symbol
  var key = Symbol("key");

  function MyClass(privateData) {

    console.log(typeof key)

    this.key = privateData;
  }

  MyClass.prototype = {
    doStuff: function() {
      // ... this[key] ...
    }
  };

  var c = new MyClass("hello");

  var time1 = Date();
  var time2 = Date();

  console.log()

  console.log(c.key)
})();

