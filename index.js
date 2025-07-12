//fetch modal........
const modal = document.querySelector('.modal-container');
//close modal or overlay....
const overlay = document.querySelector('.overlay');
//Modal open function......
const openModal=()=>{
    modal.classList.add('activate-modal');
    overlay.classList.add('activate-overlay');
}
//Modal Close function.....
const closeModal =()=>{
    modal.classList.remove('activate-modal');
    overlay.classList.remove('activate-overlay');
} 