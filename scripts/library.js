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
