```js
var Iterator = function(items,container){
  var splice = [].splice;
  return {
    first:function(),
    second:function(),
    pre:function(),
    next:function(),
    get:function(),
    dealEach:function(),
    dealItem:function(),
    exclusive:function(),
  }
}
```