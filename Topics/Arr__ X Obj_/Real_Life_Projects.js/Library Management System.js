/*
////////////////////////////////////////////////////////////////////////////////

Library management involves tracking books, members, and borrowing records, using arrays and objects to organize these elements.

Scenario: Books and Borrowing Records
Books are managed using an array of objects, and borrowing records are tracked using nested arrays within member objects.

/////////////////////////////////////////////////////////////////////////////////
*/

// Array of book objects
const books = [
    { isbn: "123456", title: "JavaScript Guide", author: "John Doe", availableCopies: 5 },
    { isbn: "654321", title: "Python Programming", author: "Jane Smith", availableCopies: 2 }
];

// Array of member objects with borrowing records
const members = [
    { name: "Alice", borrowedBooks: [{ isbn: "123456", borrowDate: "2024-09-01" }] },
    { name: "Bob", borrowedBooks: [{ isbn: "654321", borrowDate: "2024-09-02" }] }
];

// Display book details
books.forEach(book => {
    console.log(`Title: ${book.title}, Author: ${book.author}, Available Copies: ${book.availableCopies}`);
});

// Display borrowing records
members.forEach(member => {
    console.log(`Member: ${member.name}`);
    member.borrowedBooks.forEach(book => {
        console.log(`- Borrowed Book ISBN: ${book.isbn}, Date: ${book.borrowDate}`);
    });
});
