let Name = "Василий";
(typeof(Name) === 'string') ? console.log('Привет, ' + Name) : console.log('Ошибка, не тот тип данных');

Name = 123;
let result = '';

(typeof(Name) === 'string') ? result = `Привет, ${Name}`: result ='Ошибка, не тот тип данных';

console.log(result);



console.log(typeof(123)); // number
console.log(typeof(NaN) ); // number
console.log(typeof('String') ); // string
console.log(typeof(true) ); // boolean
console.log(typeof({name: 'Sally'}) ); // object
console.log(typeof(null) ); // object
console.log(typeof(undefined) ); // undefined