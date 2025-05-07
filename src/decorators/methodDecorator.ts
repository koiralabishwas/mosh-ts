function Log(target : any , methodName : string , descriptor : PropertyDescriptor){
  const original = descriptor.value as Function // has the original method
  // dont use arrow function () => when redefining methods 
  descriptor.value = function (...args : any) {
    console.log('Before');
    original.call(this, ...args);
    console.log('New Implementation');
  };
}

class PPerson {
  @Log
  say (message  : string) {
    console.log('Person says ' + message)
  }
}
