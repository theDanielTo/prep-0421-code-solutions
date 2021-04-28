function addTwoNumbers(x, y) {
  return x + y;
}

var sum = addTwoNumbers(4, 4);
console.log('addTwoNumbers(4, 4)', sum);

function convertHoursToMinutes(hours) {
  return hours * 60;
}
const minutes = convertHoursToMinutes(3.5);
console.log('3.5 hours is ' + minutes);

function getGreeting(name) {
  return 'Hello ' + name + '!';
}
console.log("getGreeting('World)", getGreeting('World'));

function addAndMultiplyBy5(num1, num2) {
  return (num1 + num2) * 5;
}
console.log('addAndMultiplyBy5(10, 5)', addAndMultiplyBy5(10, 5));

function multiplyAndDivideBy5(num1, num2) {
  return num1 * num2 / 5;
}
console.log('multiplyAndDivideBy5(35, 10)', multiplyAndDivideBy5(35, 10));

function subtractTwoNumbers(num1, num2) {
  return num1 - num2;
}
console.log('subtractTwoNumbers(22, 7)', subtractTwoNumbers(22, 7));

function getCircleCircumference(radius) {
  return 2 * Math.PI * radius;
}
console.log('getCircleCircumference(5)', getCircleCircumference(5));

function getFullName(firstName, lastName) {
  return firstName + ' ' + lastName;
}
console.log("getFullName('Daniel', 'To')", getFullName('Daniel', 'To'));

function cube(number) {
  return number ** 3;
}
console.log('cube(5)', cube(5));
