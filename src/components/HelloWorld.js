import React from 'react';
import '../styles/App.css';
function HelloWorld() {
  return <div>
    <h1>Le Minh Truong</h1>
  </div>;
}
export default HelloWorld;
class Person {
    constructor(name, age) {
      this.name = name;
      this.age = age;
    }
  
    sayHello() {
      console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
    }
  }
  
  const person = new Person("Le Minh Truong", 20);
  person.sayHello();
