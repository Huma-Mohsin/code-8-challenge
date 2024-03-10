// Question 24: More Conditional Tests: Expand your conditional tests to cover a wider range of comparisons.
// Explain & TIP: Experiment with different types of conditions to see how they work. This builds a deeper understanding of logic in programming.
//solution.
//Scenario: User Registration condition.
import inquirer from "inquirer";
let answers = await inquirer.prompt([{
        name: "User Name",
        type: "string",
        message: "Enter your user name:"
    },
    {
        name: "Password",
        type: "string",
        message: "Enter your password:"
    },
]);
let username_on_db = "huma@example.com";
let password_on_db = "zxc123*00%";
if (answers["User Name"] === username_on_db &&
    answers["Password"] === password_on_db) {
    console.log("Welcome");
}
else if (answers["User Name"] === !username_on_db ||
    answers["Password"] === password_on_db) {
    console.log("Incorrect username,Try again");
}
else if (answers["User Name"] === username_on_db ||
    answers["Password"] === !password_on_db) {
    console.log("Incorrect password,Try again");
}
else {
    console.log("Forgot password,click Here");
}
