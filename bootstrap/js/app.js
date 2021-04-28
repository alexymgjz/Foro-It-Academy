var signUpModal = new bootstrap.Modal(document.getElementById('SignUp'), {
    keyboard: false
});
var signInModal = new bootstrap.Modal(document.getElementById('SignIn'), {
    keyboard: false
});

function openModalSignIn(){        
    signUpModal.hide();
    signInModal.show();
}