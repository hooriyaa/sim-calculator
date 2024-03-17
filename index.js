// import inquirer from "inquirer";
// const answer = await inquirer.prompt([
//   { message: "Enter your first number:", type: "number", name: "firstnumber" },
//   {
//     message: "Enter your second number:",
//     type: "number",
//     name: "secondnumber",
//   },
//   {
//     message: "please select any operator to perform operation",
//     type: "list",
//     name: "operators",
//     choices: ["ADDITION", "SUBSTRACTION", "MULTIPLICATION", "DIVISION"],
//   },
// ]);
// // conditional statement:
// if(answer.operators==='ADDITION'){
//     console.log(answer.firstnumber+answer.secondnumber);
// }
// else if(answer.operators==='SUBSTRACTION'){
//     console.log(answer.firstnumber-answer.secondnumber);
// }
// else if(answer.operators==='MULTIPLICATION'){
//     console.log(answer.firstnumber*answer.secondnumber);
// }
// else if(answer.operators==='DIVISION'){
//     console.log(answer.firstnumber/answer.secondnumber);
// }
// else{
//     console.log("please use a valid operator!")
// }
import inquirer from "inquirer";
const input1 = await inquirer.prompt([{
        name: 'num1',
        type: 'number',
        message: 'Enter yuor first number:',
    }]);
const input2 = await inquirer.prompt([{
        name: 'num2',
        type: 'number',
        message: 'Enter yuor second number:',
    }]);
const answer = await inquirer.prompt([{
        name: 'operators',
        type: 'list',
        message: 'please select any operator:',
        choices: ['ADDITION', 'SUBSTRACTION', 'MULTIPLICATION', 'DIVISION', 'MODULUS',],
    }]);
//  CONDITIONAL STATMENT:
if (answer.operators === 'ADDITION') {
    console.log(input1.num1 + input2.num2);
}
else if (answer.operators === 'SUBSTRACTION') {
    console.log(input1.num1 - input2.num2);
}
else if (answer.operators === 'MULTIPLICATION') {
    console.log(input1.num1 * input2.num2);
}
else if (answer.operators === 'DIVISION') {
    console.log(input1.num1 / input2.num2);
}
else if (answer.operators === 'MODULUS') {
    console.log(input1.num1 % input2.num2);
}
else {
    console.log('Please enter any valid operator!');
}
