// Exercise 8
// Write a JS program to find the average score of all students, and then use the calculated average score to determine the grade. (see assets)

const students = [
    { name: "David", marks: 80 },
    { name: "Vinoth", marks: 77 },
    { name: "Divya", marks: 88 },
    { name: "Ishitha", marks: 95 },
    { name: "Thomas", marks: 68 },
];

function calculateAvgScoreAndGrade(data) {
    let sumMarks = 0;
    for (let i = 0; i < data.length; i++) {
        sumMarks += data[i].marks;
    }
    const numberOfStudents = data.length;
    const averageScore = sumMarks / numberOfStudents;

    console.log(`Summary Marks: ${sumMarks}`);
    console.log(`Number of Students: ${numberOfStudents}`);
    console.log(`Average Score: ${averageScore.toFixed(2)}`);

    let grade;
    if (averageScore < 60) {
        grade = "F";
    } else if (averageScore < 70) {
        grade = "D";
    } else if (averageScore < 80) {
        grade = "C";
    } else if (averageScore < 90) {
        grade = "B";
    } else {
        grade = "A";
    }

    console.log(`The average score is ${averageScore.toFixed(2)}, and overall class grade is: ${grade}`);

}

calculateAvgScoreAndGrade(students);

function getGrade(score) {
    if (score < 60) {
        return "F";
    } else if (score < 70) {
        return "D";
    } else if (score < 80) {
        return "C";
    } else if (score < 90) {
        return "B";
    } else {
        return "A";
    }
}

function showIndividualStudentGrades(studentData) {
    for (let i = 0; i < studentData.length; i++) {
        const studentName = studentData[i].name;
        const studentMarks = studentData[i].marks;
        const studentGrade = getGrade(studentMarks);
        console.log(`${studentName}: Marks = ${studentMarks}, Grade = ${studentGrade}`);
    }
}

showIndividualStudentGrades(students);