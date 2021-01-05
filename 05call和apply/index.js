/* 

    call() 方法在使用一个指定的 this 值和若干个指定的参数值的前提下调用某个函数或方法。

*/

var foo = function () {
    console.log(this.value)
}

var obj = {
    value: 3
}

foo();  // undefined

foo.call(obj); // 3


/*

试想当调用 call 的时候，把 foo 对象改造成如下：

var foo = {
    value: 1,
    bar: function() {
        console.log(this.value)
    }
};

foo.bar(); // 1

*/