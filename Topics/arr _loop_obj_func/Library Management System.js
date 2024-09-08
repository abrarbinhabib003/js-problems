/*
/////////////////////////////////////////////////////////////////////////////////

Libraries manage books, members, and borrowing records. Using arrays, objects, and mathematical operations, we'll automate borrow and return processes.

Scenario: Managing Book Borrowing and Late Fees
We will calculate late fees for overdue books and update book availability.
 



/////////////////////////////////////////////////////////////////////////////////
*/
// Array of book objects
const books = [
    { isbn: "123456", title: "JavaScript Guide", author: "John Doe", availableCopies: 5 },
    { isbn: "654321", title: "Python Programming", author: "Jane Smith", availableCopies: 2 }
];

// Array of member objects with borrowing records
const members = [
    { name: "Alice", borrowedBooks: [{ isbn: "123456", borrowDate: "2024-09-01", returnDate: null }] },
    { name: "Bob", borrowedBooks: [{ isbn: "654321", borrowDate: "2024-09-02", returnDate: null }] }
];

// Function to calculate late fee based on days overdue
function calculateLateFee(daysLate, ratePerDay) {
    return daysLate * ratePerDay;
}

// Function to return a book
function returnBook(memberName, isbn, returnDate) {
    const member = members.find(m => m.name === memberName);
    if (!member) {
        console.log("Member not found.");
        return;
    }

    const borrowedBook = member.borrowedBooks.find(book => book.isbn === isbn);
    if (!borrowedBook) {
        console.log("Book not found in member's record.");
        return;
    }

    borrowedBook.returnDate = returnDate;

    // Simulate checking overdue days (here assumed 5 days overdue for illustration)
    const daysOverdue = 5;
    const lateFee = calculateLateFee(daysOverdue, 2); // $2 per day

    console.log(`Book returned by ${memberName}. Late Fee: $${lateFee}`);
}

// Return a book and calculate late fee
returnBook("Alice", "123456", "2024-09-10");




















