function sayHello() {
    return 'hello';
  }
  
  function sayGoodbye() {
    // Under the hood, JSX are just JavaScript objects
    // -> therefore they can be assigned to variables
    let g = <p>Goodbye world</p>;
    return g;
  }

  export {sayHello, sayGoodbye};