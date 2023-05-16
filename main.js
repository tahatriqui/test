const wrapper = document.querySelector(".wrapper");

const loginLink = document.querySelector(".login-link");

const registerLink = document.querySelector(".register-link");

const BtnPopUp = document.querySelector(".btnlogin-popup");

const iconClose = document.querySelector(".button-close");

const email = document.getElementById("email");

const password = document.getElementById("password");

const nom = document.getElementById("nom");

const mail = document.getElementById("mail");

const pwd = document.getElementById("pswd");

const btnCheck = document.querySelector(".btn");

let result = document.querySelector(".result");

const btnCheeck = document.querySelector("#btn");

let r = document.querySelector(".reult");




registerLink.addEventListener('click', () => {
    wrapper.classList.add('active');
});

loginLink.addEventListener('click', () => {
    wrapper.classList.remove('active');
});

BtnPopUp.addEventListener('click', () => {
    wrapper.classList.add('active-popup');
});

iconClose.addEventListener('click', () => {
    wrapper.classList.remove('active-popup');
});


btnCheck.addEventListener('click', () => {

    if (email.value === "") { alert('entrez un email'); }
    else if (password.value === "") {

        alert('entrez un password')
    } else { alert("login succes") ;
           window.location.assign('https://www.ofppt.ma/');
           };

})

btnCheeck.addEventListener('click', () => {

    if (nom.value == "") { 
        alert('entrez un nom');

    }else if(mail.value==""){
    alert('entrez un email');

    }else if (pwd.value === ""){
        alert('entrez un password');

        }else{alert("Enregistrement succes");
              window.location.assign('https://www.ofppt.ma/');
    }
})
