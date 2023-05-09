/* 
The following is called an object literal notation, where you create an object 
with properties that are functions. You can then access these functions by using 
the dot notation or the bracket notation, like functions.getAge or functions[‘addNum’]. 
You can also export this object to use it in other modules with module.exports = functions.
*/

const functions = {
    getAge: (name, age) => {
        return `${name} is ${age} years old.`
    },
    addNum: (num1, num2) => num1 + num2,
    isNull: () => null,
    isUndefined: () => undefined,
    myStringCapitalised: (myString) => myString.toUpperCase()
}

module.exports = functions