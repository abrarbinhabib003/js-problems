/*
Learning management systems need to manage courses, students, instructors, and grades. Using functions, arrays, and loops, we'll create a system to manage enrollments and calculate average grades.

Scenario: Student Grade Management
We'll calculate the average grade for each student and update their records.
*/

// Array of course objects
const courses = [
    { courseId: 101, title: "JavaScript Basics", instructor: "Dr. Smith" },
    { courseId: 102, title: "Python for Data Science", instructor: "Dr. Brown" }
];

// Array of student objects with enrollments and grades
const students = [
    {
        name: "Alice",
        enrollments: [
            { courseId: 101, grade: 85 },
            { courseId: 102, grade: 78 }
        ]
    },
    {
        name: "Bob",
        enrollments: [
            { courseId: 101, grade: 90 },
            { courseId: 102, grade: 88 }
        ]
    }
];

// Function to calculate average grade for a student
function calculateAverageGrade(enrollments) {
    let total = 0;
    for (const enrollment of enrollments) {
        total += enrollment.grade;
    }
    return total / enrollments.length;
}

// Function to display student grades and averages
function displayStudentGrades() {
    students.forEach(student => {
        console.log(`Student: ${student.name}`);
        student.enrollments.forEach(enrollment => {
            const course = courses.find(course => course.courseId === enrollment.courseId);
            console.log(`- Course: ${course.title}, Grade: ${enrollment.grade}`);
        });
        const average = calculateAverageGrade(student.enrollments);
        console.log(`Average Grade: ${average.toFixed(2)}`);
    });
}

// Display grades and averages
displayStudentGrades();
