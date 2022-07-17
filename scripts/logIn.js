const modal_logIn  = document.getElementById('modal_logIn');
window.addEventListener('click', clickOutsideModal); 

function openModal() {
    modal_logIn.style.display = "block";
}

function clickOutsideModal(e){
    if(e.target === modal_logIn){
        closeModal()
        console.log('aca')
    }
    console.log('alla')
}
function closeModal() {
    modal_logIn.style.display = "none";
}
function loggedIn_success() {
    swal({
        title: "Sesión iniciada",
        icon: "success",
        timer: 1500,
        buttons: false
      });
}
