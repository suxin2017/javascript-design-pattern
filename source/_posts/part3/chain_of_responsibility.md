```js 

//请求=>解析=>页面渲染
//第一步发送请求
var sendData = function(data,dealType,dom){
  var xhr = new XMLHttpRequest()
  url='getData'
  //传送完成
  xhr.onload = function(event){
    //检查状态码
    if((xhr.status>=200&&xhr.status<300)||xhr.status == 304){
      dealData(xhr.responseText,dealType,dom)
    }else{
      //失败代码
    }
  xhr.open('get',url,data)
  xhr.send(null)
  }
}

//解析返回数据
var dealData = function(data,dealType,dom){
  var dataType=Object.prorotype.toString.call(data)
  switch(dealType){
    case 'sug':
    if(dataType === "[object Array]"){
      return createSug(data,dom)
    }
    if(dataType === "[object Object]"){
      var newData = [];
      for(var i of data)newData.push(i)
      return createSug(newData,dom)
    }
    return createSug([data],dom)
    break;
  }
  case 'validate':
    return createValidataResult(data.dom);
    break;
}


//渲染
var createSug = function(data,dom){
  var i = 0,len=data.length,html='';
  for(;i<len;i++){
    html +='<li>'+data[i]+'</li>'
  }
  dom.parentNode.getElementsByTagName('ul')[0].innerHtml = html;
}
var createValidataResult = function(data,dom){
  dom.parentNode.getElementsByTagName('span')[0].innerHTML=data; 
}
```