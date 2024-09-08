/*
//////////////////////////////////////////////////////////////////////////////////

Learning Management System (LMS)
An LMS requires management of courses, students, instructors, and grades using a combination of arrays and objects.

Scenario: Courses and Student Enrollments
Courses are managed using arrays of objects, and each student’s enrollment and grades are stored in a nested structure.

/////////////////////////////////////////////////////////////////////////////////
*/

// Array of course objects
const courses = [
    { courseId: 101, title: "JavaScript Basics", instructor: "Dr. Smith", duration: "6 weeks" },
    { courseId: 102, title: "Python for Data Science", instructor: "Dr. Brown", duration: "8 weeks" }
];

// Array of student enrollment objects
const enrollments = [
    { student: "Alice", courses: [{ courseId: 101, grade: "A" }, { courseId: 102, grade: "B" }] },
    { student: "Bob", courses: [{ courseId: 101, grade: "B+" }] }
];

// Display courses
courses.forEach(course => {
    console.log(`Course: ${course.title}, Instructor: ${course.instructor}, Duration: ${course.duration}`);
});

// Display student enrollments
enrollments.forEach(enrollment => {
    console.log(`Student: ${enrollment.student}`);
    enrollment.courses.forEach(course => {
        console.log(`- Enrolled in Course ID: ${course.courseId}, Grade: ${course.grade}`);
    });
});
