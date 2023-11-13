document.addEventListener('DOMContentLoaded', function() {


    // let bookTitle = document.querySelector('main div.name');
    // bookTitle.addEventListener('keypress', function(e) {      //* Change to input so every keypress executes the function
    //     if (e.key === 'Enter') {
    //         bookTitle = document.getElementById('bookTitle');
    //         console.log(bookTitle.value);
    //     }
    // })
    // let bookPosition = document.querySelector('main div.position');
    // bookPosition.addEventListener('keypress', function(e) {      //* Change to input so every keypress executes the function
    //     if (e.key === 'Enter') {
    //         bookPosition = document.getElementById('bookPosition');
    //         console.log(bookPosition.value);
    //     }
    // })
    // let bookISBN = document.querySelector('main div.isbn');
    // bookISBN.addEventListener('keypress', function(e) {      //* Change to input so every keypress executes the function
    //     if (e.key === 'Enter') {
    //         bookISBN = document.getElementById('bookISBN');
    //         console.log(bookISBN.value);
    //     }
    // })

    let button = document.querySelector("button-container");
    button.addEventListener('click', function() {
        let bookISBN = document.getElementById('bookISBN');
        console.log("ISBN: " + bookISBN.value);
        let bookPosition = document.getElementById('bookPosition');
        console.log("Position: " + bookPosition.value);
        let bookTitle = document.getElementById('bookTitle');
        console.log("title: " + bookTitle.value);

        test(bookTitle.value, bookPosition.value, bookISBN.value)
    })

    function test(Title, Position, ISBN){
        let book = {
            "Title": "Title",
            "Position": "Position",
            "ISBN": "ISBN"
        }
        let bookJSON = JSON.stringify(book);

        const xhr = new XMLHttpRequest();
        xhr.open('PUT', 'book.json');
        xhr.setRequestHeader('Content-Type', 'application/json');

        xhr.onreadystatechange = function() {
          if (xhr.readyState === 4 && xhr.status === 200) {
            console.log('JSON data successfully written to file');
          } else {
            console.error('Error writing JSON data to file:', xhr.statusText);
          }
        };

        xhr.send(bookJSON);
    }
});
