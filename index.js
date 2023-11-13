document.addEventListener('DOMContentLoaded', function() {

    let bookTitle = document.querySelector('main div.search input');
    bookTitle.addEventListener('keypress', function(e) {      //* Change to input so every keypress executes the function
        if (e.key === 'Enter') {
            bookTitle = document.getElementById('bookTitle');
            console.log(bookTitle.value);
        }

    })



});
