
function showHidePassword(password, image){
    if (document.getElementById(password).type == 'password'){
        document.getElementById(password).setAttribute('type', 'text');
        document.getElementById(image).classList.remove("fa-eye");
        document.getElementById(image).classList.add("fa-eye-slash");
    }
    else{
        document.getElementById(password).setAttribute('type', 'password');
        document.getElementById(image).classList.remove("fa-eye-slash");
        document.getElementById(image).classList.add("fa-eye");
    }
}

