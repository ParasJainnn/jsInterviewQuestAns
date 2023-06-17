

//function declarations
// foo(); // 'FOOOOO'
// function foo() {
//   console.log('FOOOOO',);
// }


///functions expressions

foo(); // Uncaught TypeError: foo is not a function
var foo = function() {
  console.log('FOOOOO');
};