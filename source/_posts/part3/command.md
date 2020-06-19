```js
//1. 建立请求实现模块
var viewCommand = function(){
  var Action = {
    create:function(){},
    display:function(){}
  }
  return function excute(){}
}
var viewCommand = (function(){
  var tpl = {
    product:[
      '<div>',
        '<img src={#text#}/>',
      '</div>'
    ]
  }
  html = '';
  function formateString(str,obj){
    return str.replace(/{#(\w+)#}/g,function(match,key){
      return obj[key]
    })
  }
  var Action = {
    create:function(data,view){
      for(let i in data){
        html += formateString(tpl[view],data)
      }
    }
    display:function(container,data,view){
      if(data){
        this.create(data,view)
      }
      document.getElementsById(container).innerHTML = html;
      html=""
    }
  }
  return function execute(msg){
    Action[msg.command].apply(Applay,msg.param)
  }
})()


```