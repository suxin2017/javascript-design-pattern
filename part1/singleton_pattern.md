模块之间区分开
比如

```js
var baidu = {}
var tengxun = {}

//或者
var util = {
  get:function(){

  },
  set:function(){

  }
}
//懒加载 
//通过闭包保存变量
var getsingle = (function (){
  let _instance;
  function Single(){
    return {
      a:function(){
        //some code
      },
      b:function(){
        //some code 
      }
    }
  }
  return function(){
    if(!_instance){
      _instance = Single();
    }
    return _instance;
  }
})()
```
这样就不会污染其他模块的方法