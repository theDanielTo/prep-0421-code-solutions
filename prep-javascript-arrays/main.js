const languageArray = ['html', 'css', 'javascript', 'react', 'node.js'];
console.log('Initial array declaration.');
console.log(languageArray);
console.log('Array length:');
console.log(languageArray.length);

languageArray.push('C#');
languageArray.push('php');
console.log('Added "C#" and "php":');
console.log(languageArray);

languageArray.pop();
console.log('Removed last element with pop():');
console.log(languageArray);

languageArray.unshift('C++');
console.log('Added "C++" to the beginning:');
console.log(languageArray);

languageArray.shift();
console.log('Removed first element:');
console.log(languageArray);

const thirdElement = languageArray[2];
console.log('Third element in the languageArray:');
console.log(thirdElement);

const arrayLength = languageArray.length;
console.log('Current length of languageArray:');
console.log(arrayLength);

const lastItem = languageArray[arrayLength - 1];
console.log('The last element in languageArray:');
console.log(lastItem);
