```js
var One = function(){
  this.name = "one"
}
One.prototype = {
  sayOne:function(){
    console.log(this.name)
  }
}
var Two = function(){
  //绑定this 这个时候 this指向TWo One 内的this也指向Two
  //Two 就会有name 的属性
  One.call(this)
  //拓展
  this.nameTwo = 'Two'
}


var Three = function(){
  Two.call(this)
  this.nameThree = 'Three'
}

var EveryThing = function(){
  Three.call(this)
  this.everyThing = 'every thing'
}
```

⚠️JavaScript 没有类似于java父子相互继承的检测所以就会栈溢出
```js
function A(){
	B.call(this)
}

function B(){
	A.call(this)
}
```
```js
//原型继承
function prototypeExtend(){
  //定义缓存，每次执行都是一个新的缓存
  var F = function(){}
  var args = arguments;
  i = 0;
  len = args.length;
  for(; i < len;i++){
    // 遍历属性
    for(var j in args[i]){
      // 复制属性
      F.prototype[j] = arg[i][j];
    }
  }
  return new F();
}

var test = prototypeExtend({
  speed:20,
  swim:function(){
    console.log('速度',speed)
  }
})
var test1 = prototypeExtend({
  speed:30,
  swim:function(){
    console.log('速度',speed)
  }
})
test.swim()
test1.swim()

//这里有个问题，
```