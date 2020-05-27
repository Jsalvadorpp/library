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

        cleanForm();

        //-close form
        modalWrapper.style.display = 'none';
    } 
});
function cleanForm(){
    let inputs = document.querySelectorAll(".book-form input[type='text']");

    inputs.forEach( (input) => {
        input.value = '';
    });
}
//$ =============================================


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
    
    cleanForm();
    modalWrapper.style.display = 'none';
}

function createBookCard(book){

    let template = document.getElementById('card-template');
    let bookCard = template.cloneNode(true);
    bookCard.removeAttribute('id');

    bookCard.children[0].addEventListener('click',removeBook);
    bookCard.children[1].textContent = book.title;
    bookCard.children[2].textContent += book.author;
    bookCard.children[3].textContent = book.status;
    bookCard.children[3].addEventListener('click',changeStatus);
    bookCard.children[3].classList.add(book.status);
    bookCard.children[3].setAttribute('data-status', book.status);

    return bookCard;
}
//$ ============================================


//$ ======== Remove book =====================
function removeBook(){
    this.parentElement.remove();
}
//$ ==========================================


//$ ======== Change status ===================
function changeStatus(){
    let status = this.getAttribute('data-status');
    let newStatus = (status == 'read')? 'unread':'read';

    this.textContent = newStatus;
    this.classList = (status == 'read')? 'btn unread' : 'btn';
    this.setAttribute('data-status', newStatus);
}
//$ ==========================================

