// sometime we need to pass arguments to out decorators

type ComponentOptions = {
  selector : string
}

function PComponent(options : ComponentOptions) {
  return  (constructor : Function) => {
    console.log('component decorator called')
    constructor.prototype.options = value;
    constructor.prototype.uniqueId = Date.now()
    constructor.prototype.insertInDom = () => {
      console.log('inserting the component in the dom')
      console.log(options.selector) // not used エラー回避用
    }
  }
}

// we can pass argument to decorator
@PComponent({selector : "#my-profile"})
class PProfileComponent {
  
}
