// TASK 1

function foo() {
	// TODO: Write your code here
}

foo();				// without "new"
new foo();		// with "new"

----------------------------

// TASK 2

function Animal() {}

export const dog1 = new Animal();

-----

class Animal{}

export const dog2 = new Animal();

-----
  
import { dog1 } from '...';
import { dog2 } from '...';

// TODO: Write your code here

--------------------------

// TASK 3

  Promise.resolve(1)
    .then(arg => {
  		// Option 1
  		return arg;
      // Option 2
  		return Promise.resolve(arg);
		.then(arg => {
  		console.log(arg);
		})
		;

