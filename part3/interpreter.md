```js
//xpath解释器
var Interoerter = (function(){
  function getSublingName(node){
    if(node.previousSibling){
      var name = '',count=1,nodeName =node.nodeName,sibling = node.previousSibling;
      while(slibing){
        if(sibling.nodeType==1 && sibling.nodeType===node.nodeType && sibling.nodeName){
          if(nodeName==sibling.nodeName){
            name+=++count;
          }else{
            count = 1;
            name +='|'+sibling.nodeName.toUpperCase();
          }
          sibling = sibling.perviousSibling;
        }
        return name
      }else{
        return '';
      }
    }
  }

  return function(node,wrap){
    var path = [].
    wrap=wrap||document;
    if(node === wrap){
      if(wrap.nodeType === 1){
      path.push(wrap.nodeName.toUpperCase());
    }
    return path;
    }
    if(node.parentNode !== wrap){
      path = arguments.callee(node.parentNode,wrap)
    }else{
      if(wrap.nodeType==1){
        path.push(wrap.nodeName.toUpperCase())
      }
    }
    var sublingsNames = getSublingName(node);
    if(node.nodeType==1){
      path.push(node.nodeName.toUpperCase()+sublingsNames)
    }
    return path;
  
  }

})()
```