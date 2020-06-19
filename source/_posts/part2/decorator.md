```js
//装饰模式分两步
//1. 找到装饰对象
//2. 拓展装饰对象
var Decorator = function(obj,fn){
  //拓展对象的tostring
  var _fn = obj.prototype.toString;
  obj.prototype.toString = function(){
    fn()
    //这个this 指的是运行时候的obj
  
	  return _fn.call(this)
  }
}

new Decorator(Array,()=>{console.log('被拓展了')})
console.log(Array(1,2,3,4).toString())
```