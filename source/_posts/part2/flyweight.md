当年写了一个打飞机的小游戏[连接地址](https://www.jianshu.com/p/6008be0063e1)
但是不知道怎么回事运行一会就会很卡
现在想想不了解浏览器对于代码内存回收机制
  引用计数法
  还有就是没见到这个设计模式,频繁的创建子弹和敌方英雄导致浏览器吃不消
  
```js
    //分页需求
      //1. 创建共享资源
      //2. 
var Flyweight = function(){
  var pool = [];//资源池
  function crete(){
    var dom = document.createElements('div');
    //将元素放入资源池
    pool.push(dom)
    return dom;
  }
  return {
    getDiv:function(){
      if(pool.length<5){
        return create()
      }else{}
        //把第一个放到最后一个
        var div = created.shift();
        created.pish(div)
        return div;
    }
  }
}
```