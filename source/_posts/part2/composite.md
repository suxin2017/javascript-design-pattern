```js
//顺手重温继承
//类继承
function Super(){}
Super.prototype.super = ()=>{console.log(super)}
function Sub(){}
Sub.prototype =new Super();
Sub.prototype.sub=()=>{console.log(sub)}
//构造函数继承
function Super1(){
  this.attribute = 'super'
}
function Sub1(){
  Super1.call(this)
}
//组合继承
function Super2(){
  this.attribute = 'super'
}
function Sub2(){
  Super2.call(this)
}
Sub2.prototype=new Super2()
//原型链继承
var inheritObject = function(sup){
   var _P =function(){}
   //创建一个新的原型
   _P.prototype = sup;
   return new _P();
}
//寄生继承
var createSub = function(sup){
  var sub = inheritObject(sup)
  //拓展新对象
  sub.attribute = 'sub'
  //some code
  return sub
}
//组合寄生继承
function inheritPrototype(sub,sup){
  var p = inheritObject(sup.prototype)
  //把构造函数
  p.constructor = sub;
  sub.prototype = p;
}

//正文组合模式

//1. 创建约定类
//2. 创建组合容器
//3. 创建子嘞

var News = function(){
  this.children = [];
  this.element = null;
}
News.prototype = {
  init:function(){
    throw new Errot('没初始化')
  },
  add:function(){
    throw new Errot('没添加')
  },
  show:function(){
    throw new Errot('没展示')
  }
}

var Container = function(){
	News.call(this)
}
inheritPrototype(Container,News);

Container.prototype = {
    init:function(){
    //创建容器初始化代码
    return this;
  },
  add:function(child){
    this.children.push(child)
    return this;
  },
  show:function(){
    console.log(this.children)
  }
}
var A = function(){
}
var B = function(){
}
var C = function(){
}
var container = new Container().init();
container.add(new A()).add(new B()).add(new C()).show()
```