#! /usr/bin/env node 
import inquirer from "inquirer";
import chalk from "chalk";
console.log(chalk.italic.rgb(226, 123, 67)('\n\t\tHELLO WELLCOME BACK !!\t\t\n'));
let myBalance = 50000;
let pinPassword = 9876;
let pinAnswer = await inquirer.prompt([
    {
        name: "pin",
        type: "number",
        message: chalk.cyanBright("Enter Your PinPassword? : "),
    }
]);
if (pinAnswer.pin === pinPassword) {
    console.log(chalk.greenBright("\n\tCORRECT PIN CODE !!!\n"));
    let options_Answer = await inquirer.prompt([
        {
            name: "options",
            type: "list",
            message: chalk.cyanBright("What Do You Want To Choose?"),
            choices: ["withdraw", "check balance", "fast cash"],
        }
    ]);
    if (options_Answer.options == "withdraw") {
        let amountAns = await inquirer.prompt([
            {
                name: "amount",
                type: "number",
                message: chalk.cyanBright("How Much Amount You Want To Withdraw:"),
            }
        ]);
        if (amountAns.amount > myBalance) {
            console.log(chalk.red("\n\t\tSORRY ! YOU HAVE UNSUFFICIANT AMOUNT\n"));
        }
        else {
            myBalance = myBalance - amountAns.amount;
            console.log(chalk.bold.yellow(` Now Your Remaining Balance Is : ${myBalance} `));
        }
    }
    else if (options_Answer.options == "check balance") {
        console.log(chalk.rgb(123, 245, 67)(`\n\t\tIn Your Account The Bank Balance Is : ${myBalance}\n`));
    }
    else if (options_Answer.options == "fast cash") {
        let multipleOption = await inquirer.prompt([
            {
                name: "moreOption",
                type: "list",
                message: chalk.cyanBright("Select Any One Option"),
                choices: ["5000", "10000", "15000", "30000", "70000"],
            }
        ]);
        if (multipleOption.moreOption > myBalance) {
            console.log(chalk.red("\n\t\tSORRY ! YOU HAVE UNSUFFICIANT AMOUNT\n"));
        }
        else {
            console.log(chalk.green(`Take Your Amount  : ${multipleOption.moreOption}`));
            myBalance = myBalance - multipleOption.moreOption;
            console.log(chalk.bold.rgb(145, 67, 100)(`\n\t\t Now Your Remaining Balance Is : ${myBalance} \n`));
        }
    }
}
else {
    console.log(chalk.italic.red("\n\t\tERROR : INVALID PIN CODE  PLEASE ENTER VALID PIN CODE !!!\t\t\n"));
}
