// Question 23: Conditional Tests: Write a series of conditional tests. Predict the results of each test.
// Explain & TIP: Conditional tests check if something is true or false. Writing different tests helps you understand how conditions work in programming.
var student = "HUMA MOHSIN";
var student_attempt_test = true;
var pass_entry_exam = true;
if (student_attempt_test && pass_entry_exam) {
    console.log("Dear candidate ".concat(student, ",\n you pass a Entry test so you can attend GENERATIVE ARTIFICAL INTELLIGENCE course."));
}
else {
    console.log("Sorry, You did not pass a Entry test.");
}
console.log("\n");
var assign_task = false;
var taking_lecture = false;
if (assign_task || taking_lecture) {
    console.log("This challenges help you all in future.");
}
else {
    console.log("Code challenges will be offer you soon.");
}
