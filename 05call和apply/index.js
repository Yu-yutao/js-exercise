/* 

    call() 方法在使用一个指定的 this 值和若干个指定的参数值的前提下调用某个函数或方法。

*/

var foo = function () {
    console.log(this.value)
}

var obj = {
    value: 3
}

//  foo();  // undefined

//  foo.call(obj); // 3


/*

试想当调用 call 的时候，把 foo 对象改造成如下：

var foo = {
    value: 1,
    bar: function() {
        console.log(this.value)
    }
};

foo.bar(); // 1

所以我们模拟的步骤可以分为：

1、将函数设为对象的属性
2、执行该函数
3、删除该函数

*/

// Function.prototype.call2 =  function(context) {
//     // 获取调用call的函数
//     context.fn = this;
//     context.fn();
//     delete context.fn();
// }

//  foo.call2(obj);


/*

    进一步优化，函数可以传入多个参数
    如果传入null，this指向window

*/

Function.prototype.call2 = function(context){
    var context = context || window;
    context.fn = this;

    var args = [];
    for(var i = 1; i < arguments.length; i ++){
        args.push('arguments['+i+']');
    }

    var result = eval('context.fn('+args+')')
    delete context.fn;
    return result;
}

// 测试一下
var value = 2;

var obj = {
    value: 1
}

function bar(name, age) {
    console.log(this.value);
    return {
        value: this.value,
        name: name,
        age: age
    }
}

bar.call2(null); // 2


/*
    apply实现类似
*/

Function.prototype.apply = function (context, arr) {
    var context = Object(context) || window;
    context.fn = this;

    var result;
    if (!arr) {
        result = context.fn();
    }
    else {
        var args = [];
        for (var i = 0, len = arr.length; i < len; i++) {
            args.push('arr[' + i + ']');
        }
        result = eval('context.fn(' + args + ')')
    }

    delete context.fn
    return result;
}