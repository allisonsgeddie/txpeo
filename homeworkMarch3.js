//Write a function named sumOfSquareAreas that takes two parameters: a and b, which each represent the 
//side lengths of two different squares. Return the value of the sum of the areas of these squares 
//(for example, if a = 9 and b = 3, then we want to return 90). Then, call this function 3 times with 
//different values for a and b and output the results to the terminal by running your code.

//Write a function named gradeCalculator that takes three parameters: homeworkAvg, quizAvg, and examAvg, 
//which each represent your average for a class on homework, quizzes, and exams, respectively. 
//Return the value of your overall grade in the class if homework is weighted at 10%, quizzes are 15%, 
//and exams are 75%. Then, call this function 3 times with different values for homeworkAvg, quizAvg, 
//and examAvg and output the results to the terminal by running your code.
//Push this code to your GitHub repository using GitHub Desktop!

function sumOfSquareAreas(a, b){
    return (a * a) + (b * b);
}

function gradeCalculator(homeworkAvg, quizAvg, examAvg){
    return ((.10 * homeworkAvg) + (.15 * quizAvg) + (.75 * examAvg))/3;
}

var sideLengths1 = sumOfSquareAreas(1, 2);
var sideLengths2 = sumOfSquareAreas(3, 4);
var sideLengths3 = sumOfSquareAreas(5, 6);

var grade1 = gradeCalculator(10, 20, 30);
var grade2 = gradeCalculator(40, 50, 60);
var grade3 = gradeCalculator(70, 80, 90);

console.log(sideLengths1);
console.log(sideLengths2);
console.log(sideLengths3);

console.log(grade1);
console.log(grade2);
console.log(grade3);
