/*
/////////////////////////////////////////////////////////////////////////////////

Managing a school or university involves handling students, courses, grades, and teachers. We will create a system that tracks student enrollments, calculates GPA, and manages course data using arrays, objects, functions, and loops.

Scenario: Managing Student Enrollments and GPA Calculation
We’ll track students enrolled in courses, calculate their average grades, and update their records.

//////////////////////////////////////////////////////////////////////////////////
*/

// Array of course objects
const courses = [
    { courseId: 101, title: "Mathematics", credits: 3 },
    { courseId: 102, title: "English", credits: 4 }
];

// Array of student objects with enrollments and grades
const students = [
    {
        name: "Alice",
        enrollments: [
            { courseId: 101, grade: 85 },
            { courseId: 102, grade: 90 }
        ]
    },
    {
        name: "Bob",
        enrollments: [
            { courseId: 101, grade: 78 },
            { courseId: 102, grade: 85 }
        ]
    }
];

// Function to calculate GPA for a student
function calculateGPA(enrollments) {
    let totalGradePoints = 0;
    let totalCredits = 0;
    for (const enrollment of enrollments) {
        const course = courses.find(c => c.courseId === enrollment.courseId);
        totalGradePoints += enrollment.grade * course.credits;
        totalCredits += course.credits;
    }
    return totalGradePoints / totalCredits;
}

// Function to display student GPAs
function displayStudentGPAs() {
    students.forEach(student => {
        const gpa = calculateGPA(student.enrollments);
        console.log(`Student: ${student.name}, GPA: ${gpa.toFixed(2)}`);
    });
}

// Display GPAs
displayStudentGPAs();
