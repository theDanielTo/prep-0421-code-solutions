const person = {
  firstName: 'Daniel',
  lastName: 'To',
  hobby: 'Fishing'
};
console.log(person);

const fullName = person.firstName + ' ' + person.lastName;
console.log("This person's full name is " + fullName + '.');

person.job = 'Professional sushi eater';
console.log("This person's current job is " + person.job + '.');
person.previousJob = 'Amateur sushi eater';
console.log("This person's previous job is " + person.previousJob + '.');
console.log(person);

const myCar = {
  make: 'Honda',
  model: 'Civic',
  year: '2009'
};
myCar['owner'] = fullName;
const carOwner = myCar['owner'] + ' owns a ' + myCar['year'] + ' ' + myCar['make'] + ' ' + myCar['model'] + '.';
console.log(carOwner);
myCar['color'] = 'white';
console.log(myCar);
