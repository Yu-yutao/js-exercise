function Person(){}

Person.prototype.name = "test";

/*
    1、prototype 是函数才会有的属性
    2、prototype 指向了一个对象，这个对象是
        调用该构造函数而创建的实例原型（p1）
    3、原型？
        你可以这样理解：每一个JavaScript对象(null除外)在创建的时候就会与之关联另一个对象，
        这个对象就是我们所说的原型，每一个对象都会从原型"继承"属性。

        [图： 构造函数和实例原型的关系]
    
*/

var p1 = new Person();

// p1.name = "Li Ming";

console.log(p1)

console.log(p1.name)

/*
    __proto__
    这是每一个JavaScript对象(除了 null )都具有的一个属性，叫__proto__，这个属性会指向该对象的原型。
    这里p1对象从Person的原型上创建，因此p1的__proto__指向Person的prototype
*/

console.log(p1.__proto__ === Person.prototype)

/*
    由此：关系图如下
    Person构造函数 ———含有———> Person.prototype
                  ————实例化———> p1 ——__proto__——> Person.prototype

    [图：三者关系图]
*/  


console.log(Person === Person.prototype.constructor); //true

/*
    constructor
    每个原型都有一个 constructor 属性指向关联的构造函数。

    [图：死者关系图]
*/



/*
    null 和 undefined 的区别

    typeof null === object
    typeof undefined === undefined

    JavaScript的最初版本是这样区分的：
    null是一个表示"无"的对象，转为数值时为0；
    undefined是一个表示"无"的原始值，转为数值时为NaN。

    null表示"没有对象"，即该处不应该有值。
    （1） 作为函数的参数，表示该函数的参数不是对象。
    （2） 作为对象原型链的终点。

    undefined表示"缺少值"，就是此处应该有一个值，但是还没有定义。
    （1）变量被声明了，但没有赋值时，就等于undefined。
    （2) 调用函数时，应该提供的参数没有提供，该参数等于undefined。  
    （3）对象没有赋值的属性，该属性的值为undefined。
    （4）函数没有返回值时，默认返回undefined。
 */