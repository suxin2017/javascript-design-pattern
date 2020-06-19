```js
// 观察者模式特点
//   有一个缓存消息的集合
//   提供注册方法
//   提供注销方法
  //可想想js 的事件绑定
//观察者
var mediator = (function(){
  var _message = [];
  return {
    regist:function(type,fn){
      //判断是否有当前事件类型
      if(typeof _message[type] === 'undefined'){
        _message[type]=[]
      }
        _message[type].push(fn)
    },
     send:function(type,args){
      if(typeof _message[type] === 'undefined'){
        return
      }
      var event = {
        type:type,
        args:args||{}
      }
      for(let fn in _message[type]){
        _message[type][fn].call(this,event)
      }
    },
  }
})()

//使用
mediator.regist('test',(e)=>{console.log(e)})
mediator.send('test')


//A
mediator.regist('test',(e)=>{console.log(e)})
//B
mediator.send('test')

```