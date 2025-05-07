// a decorator is just a funciton that gets called by javascript runtime 

function Component (constructor : Function) {
  console.log('component decorator called')
  constructor.prototype.uniqueId = Date.now()
  constructor.prototype.insertInDom = () => {
    console.log('inserting the component in the dom')
  }
}

@Component
class ProfileComponent {
  
}
