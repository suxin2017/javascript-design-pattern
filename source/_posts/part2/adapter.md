```js
//适配相识框架
window.A = A = JQuery
//适配不相似框架
var A = A || {}
A.g = function(id){
  return document.getElementById(id)
}
A.g = function(id){
  return $(id).get(0)
}
//参数适配器
function someThing(obj){
  var _obj = {
    name:'defaultName'
    value:'defaultValue'
  }
  for(var i in obj){
    _obj[i] = obj[i] || _obj[i];
  }
  //do some thing
}

```