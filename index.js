// Function that takes a callback function as an argument and calls it
function receivesAFunction(callback) {
    callback();
  }
  
// Function that returns a named function
  
  function returnsANamedFunction() {
    
    const namedFunction = function(){
      
    }
    
    return namedFunction;
  }
  
// Function that returns an anonymous function
  function returnsAnAnonymousFunction() {
    
    return function() {
      
    };
  }
  