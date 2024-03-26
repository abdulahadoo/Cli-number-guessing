#! /usr/bin/env node
import inquirer from "inquirer";
// 1) computer will generate a random number -Done
// 2) user input for guesiing numbers -Done
// 3) campare user input with computr generated numbe and show result
const randomNumber = Math.floor(Math.random() * 10 + 1);
const answere = await inquirer.prompt([{
        name: "userGuessedNumber",
        type: "number",
        message: "please guess a number between 1-10:"
    }]);
if (answere.userGuessedNumber === randomNumber) {
    console.log("Congratulations! you guessed right number");
}
else {
    console.log("you guessed wrong number");
}
