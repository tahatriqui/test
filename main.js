const wrapper = document.querySelector(".wrapper");

const loginLink = document.querySelector(".login-link");

const registerLink = document.querySelector(".register-link");

const BtnPopUp = document.querySelector(".btnlogin-popup");

const iconClose = document.querySelector(".button-close");

const input = document.querySelectorAll("input");

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
    let value = input[0].value.trim();

    result.innertext = value.length === 0 ? alert('entrez un email') : "";

})

btnCheck.addEventListener('click', () => {
    let value = input[1].value.trim();

    result.innertext = value.length === 0 ? alert('entrez un password') : alert("login succes");

})

btnCheeck.addEventListener('click', () => {
     
        let value = input[3].value.trim();

    r.innertext = value.length === 0 ? alert('entrez un nom') : "";

   
    

})

btnCheeck.addEventListener('click', () => {
    let value = input[4].value.trim();

    r.innertext = value.length === 0 ? alert('entrez un email') : "";
})
btnCheeck.addEventListener('click', () => {
    let value = input[5].value.trim();

    r.innertext = value.length === 0 ? alert('entrez un password') : "";
})
