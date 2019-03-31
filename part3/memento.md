```js
//备忘录模式，缓存数据
var Page = function(){
  var cache = [];
  return function(page,fn){
    if(cache[page]){
      showPage(page,cache[page]);
      fn&&fn();
    }else{
      //请求数据 数据data
      showPage(page,res.data)
      cache[page]=res.data;
      fn&&fn();
    }
  }
}

```