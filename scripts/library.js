//$ ======== Open/close form  =====================
let openForm = document.getElementById('openForm');
let modalWrapper = document.getElementById('modal-wrapper');

//- open the modal if the button is pressed
openForm.addEventListener('click', ()=>{
    modalWrapper.style.display = 'grid';
});

//- close the modal if the user click outside the form
window.addEventListener('click',(e)=>{
    if(e.target == modalWrapper){

        //-clean input 
        let inputs = document.querySelectorAll(".book-form input[type='text']");
        inputs.forEach( (input) => {
            input.value = '';
        });

        //-close form
        modalWrapper.style.display = 'none';
    } 
});
//$ =============================================


//$ ======== Books collection ==================
let myLibrary = [];


//$ ============================================


//$ ======== Add new book  =====================
let addBookBtn = document.getElementById('add-book');
let form = document.getElementById('book-form');

addBookBtn.addEventListener('click',(e)=>{
    e.preventDefault();
    addBookToLibrary();
});

class Book{
    constructor(title,author,status){
        this.title = title;
        this.author = author;
        this.status = status;
    }
}

function addBookToLibrary(){

    let data = new FormData(form);
    let book = new Book(data.get('title'),data.get('author'),data.get('status'));
    myLibrary.push(book);

    let libraryWrapper = document.getElementById('library');
    let bookCard = createBookCard(book);

    libraryWrapper.appendChild(bookCard);
}

function createBookCard(book){

    let template = document.getElementById('card-template');
    let bookCard = template.cloneNode(true);
    bookCard.removeAttribute('id');

    bookCard.children[0].textContent = book.title;
    bookCard.children[1].textContent += book.author;
    bookCard.children[2].textContent = book.status;
    bookCard.children[2].classList.add(book.status);

    return bookCard;
}
//$ ============================================




