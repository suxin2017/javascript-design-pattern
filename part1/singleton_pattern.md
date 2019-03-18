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
```
这样就不会污染其他模块的方法