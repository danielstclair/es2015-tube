import '../styles/main.scss';
import '../../index.html';

import $ from 'jquery';
import API_KEY from './api_key';
import initRender from './initRender';

initRender();


var person = {
  firstName: 'Daniel',
  lastName: 'St. Clair',
  interest: {
    sports: ['football', 'basketball', 'soccer', 'baseball'],
    food: ['pizza', 'sushi']
  },
  saySomething() {
    console.log(this);
    this.interest.sports.map((sport) => {
      console.log(`Hi my name is ${this.firstName} and my favorite sports are ${sport}`);
    });
  }
}

// person.saySomething();

var arr1 = [1, 'Steve', 'Batman', 45];

var arr2 = ['Superman', 35, 'Metropolis'];


(function(){
  // console.log(this);
})();

function twoArgs(a = 'frankenstein', b = 'is awesome') {
  console.log(a, b);
}

twoArgs();

// function comments(...arr) {
  // console.log(arr);
  // for (var i = 0; i <= arr; i++) {

  // }
// }

// comments(...arr1, ...arr2);

// arr1 = [...arr1, ...arr2];
// console.log('arr1 ' , arr1);

// for (var i = 0; i < arr2.length; i++) {
//   arr1.push(arr2[i]);
// }
// console.log('arr1 ' , arr1);


// const { firstName, 
//   lastName, 
//   interest: {sports}} = person;
// const [a, , c] = sports;
// console.log('c ' , c);
// console.log('a ' , a);
// console.log('sports ' , sports);



console.log(`Hi my name is ${person.firstName} ${person.lastName} and I like to play guitar`)