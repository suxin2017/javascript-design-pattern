```js

var bind = function(context,fn,...args){
	return function(){
		return fn.call(context,...args)
	}
}

//这样就没改变contex然后获取新的操作方法
```