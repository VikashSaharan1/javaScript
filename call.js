/* Author: Vikash Saharan */
/* call or Function.prototype.call */
/* Call:- The call() method calls a function with a given this value and arguments provided individually. */

/* Syntax: function.call(thisArg, arg1, arg2) */

function Product(name, price) {
    this.name = name;
    this.price = price;
}

function Food(name, price) {
    Product.call(this, name, price);
    this.category = 'food';
}

function Toy(name, price) {
    Product.call(this, name, price)
    this.category = 'Toy';
}

var cheese = new Food('cheese', 5);
console.log(cheese); // Food { name: 'cheese', price: 5, category: 'food' }
var fun = new Toy('robot', 10);
console.log(fun);   // Toy { name: 'robot', price: 10, category: 'Toy' }

/* ----------------------------------------------------- End ---------------------------------------------------------------------*/
/* Without and with call method Example */
var person =  {
    firstname: "John",
    lastname: "Doe",
    fullName: function() {
        return this.firstname + " " + this.lastname;
    }
}

console.log(person.fullName()); // John Doe
var person = {
    fullName: function() {
        return this.firstname + " " + this.lastname;
    }
}
var person1 = {
    firstname: "John",
    lastname: "Doe"
};

var person2 = {
    firstname: "Mary",
    lastname: "Doe"
}

console.log(person.fullName.call(person1));   // John Doe
console.log(person.fullName(person2)) // undefined undefined
console.log(person.fullName.call(person2)); // Mary Doe

/* ----------------------------------------------------- End ---------------------------------------------------------------------*/
/* call() Method with Arguments */

var person = {
    fullName: function(city, country) {
        return this.firstname + " " + this.lastname + " " + this.city + " " + this.country;
    }
}

var person1 = {
    firstname: "John",
    lastname: "Doe"
}

person.fullName.call(person1);



