/*
Good morning! Here's your coding interview problem for today.
This problem was recently asked by Google.
Given a list of numbers and a number k, return whether any two numbers from the list add up to k.
For example, given [10, 15, 3, 7] and k of 17, return true since 10 + 7 is 17.

**/


const numArray = [10, 15, 3, 7, 2]
const k = 17

const addNumber = (array, k) => {
    array.forEach(element => {
        array.forEach(element2 => {
            if (element + element2 === k) {
                console.log(`${element} and ${element2} add together to make 17.`)
            }
        })
    });
}

addNumber(numArray, k)