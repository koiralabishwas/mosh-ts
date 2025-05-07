
type CComponentOptions = {
  selector : string
}

function PPComponent(options : CComponentOptions) {
  return  (constructor : Function) => {
    console.log('component decorator called')
    constructor.prototype.options = options;
    constructor.prototype.uniqueId = Date.now()
    constructor.prototype.insertInDom = () => {
      console.log('inserting the component in the dom')
      console.log(options.selector) // not used エラー回避用
    }
  }
}


function Pipe(constructor : Function) {
  console.log('Pipe decorator called')
  constructor.prototype.pipe = true
}

@PPComponent({selector : "#myprofile"}) 
@Pipe // pipe will be called first 
class CProfileComponent{

}
