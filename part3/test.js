var Observer = (function(){
  var _message = [];
  return {
    regist:function(type,fn){
      //判断是否有当前事件类型
      if(typeof _message[type] === 'undefined'){
        _message[type]=[]
      }
        _message[type].push(fn)
    },
    fire:function(type,args){
      if(typeof _message[type] === 'undefined'){
        return
      }
      var event = {
        type:typem,
        args:args||{}
      }
      for(let fn in _message[type]){
        _message[type][fn].call(this,event)
      }
    },
    remove:function(type,fn){
      if(_message[type] instanceof Array){
        for(let list in _message[type]){
          _message[type][list]===fn && _message[type][list].splice(list,1)
        }
     }
    },
  }
})()

//使用
Observer.regis('test',(e)=>{console.log(e)})
Observer.fire('test')