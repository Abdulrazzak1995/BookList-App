// Event: Add a book
document.querySelector('#book-form').addEventListener('submit' , (e) => {
    // Prevent actual submit
    e.preventDefault();
// Get Form values
const title = document.querySelector('#title').value;
const author = document.querySelector('#author').value;
const isbn = document.querySelector('#isbn').value;

//Validate
if(title === '' || author === '' || isbn === ''){
    UI.showAlert('Please fill in all fields' , 'danger');
}else{

// Instatiate Book
const book = new Book(title , author , isbn);

// Add Book to UI
UI.addBookToList(book);

// Show success massege
UI.showAlert('Book Added' , 'Success');

// Add Book to store
Store.addBook(book);

// Clear fields
UI.clearFields();

}

});