```js
var ResutlState = function(){
  var State = {
    state0:()=>{
      console.log('state0')
    },
    state1:()=>{
      console.log('state1')
    },
    state2:()=>{
      console.log('state2')
    },
    state3:()=>{
      console.log('state3')
    },
    state4:()=>{
      console.log('state4')
    }
  }
  function show(state){
    State[state]();
  }
  return{
    show:show
  }
}()
```