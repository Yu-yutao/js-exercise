/*

这就要说到 JavaScript 的可执行代码(executable code)的类型有哪些了？

其实很简单，就三种，全局代码、函数代码、eval代码。

举个例子，当执行到一个函数的时候，就会进行准备工作，这里的“准备工作”，让我们用个更专业一点的说法，就叫做"执行上下文(execution context)"。

*/


/*

试想当 JavaScript 开始要解释执行代码的时候，最先遇到的就是全局代码，
所以初始化的时候首先就会向执行上下文栈压入一个全局执行上下文，
我们用 globalContext 表示它，并且只有当整个应用程序结束的时候，
ECStack 才会被清空，所以程序结束之前， ECStack 最底部永远有个 globalContext：

ECStack = [
    globalContext
];

*/


function fun3() {
    console.log('fun3')
}

function fun2() {
    fun3();
}

function fun1() {
    fun2();
}

fun1();

/*

// 伪代码

// fun1()
ECStack.push(<fun1> functionContext);

// fun1中竟然调用了fun2，还要创建fun2的执行上下文
ECStack.push(<fun2> functionContext);

// 擦，fun2还调用了fun3！
ECStack.push(<fun3> functionContext);

// fun3执行完毕
ECStack.pop();

// fun2执行完毕
ECStack.pop();

// fun1执行完毕
ECStack.pop();

// javascript接着执行下面的代码，但是ECStack底层永远有个globalContext

*/




/*

var scope = "global scope";
function checkscope(){
    var scope = "local scope";
    function f(){
        return scope;
    }
    return f();
}
checkscope();

ECStack.push(<checkscope> functionContext);
ECStack.push(<f> functionContext);
ECStack.pop();
ECStack.pop();



var scope = "global scope";
function checkscope(){
    var scope = "local scope";
    function f(){
        return scope;
    }
    return f;
}
checkscope()();

ECStack.push(<checkscope> functionContext);
ECStack.pop();
ECStack.push(<f> functionContext);
ECStack.pop();

*/