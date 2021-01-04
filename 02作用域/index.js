var value = 2;

function foo(){
    console.log(value)
}

function bar(){
    var value = 4;
    foo();
}

bar();