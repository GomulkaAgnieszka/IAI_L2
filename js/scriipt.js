let send = document.querySelector("#send");

send.addEventListener("click", checkForm);


function addClass(element, className) {
	element.classList.add(className);
}

function removeClass(element, className) {
    element.classList.remove(className);
}

function checkForm() {

    let age = document.querySelector("#Number");
    let name = document.querySelector("#InputName");
    let surname = document.querySelector("#InputSurname");
    let email = document.querySelector("#InputEmail");
    let checkRadio = document.querySelector(".form-check-input");

	let ageValue = age.value;
    let nameValue = name.value;
    let surnameValue = surname.value;
    let emailValue = email.value;

    var atpos = emailValue.indexOf("@");
    var dotpos = emailValue.lastIndexOf(".");

    if (ageValue === '' || !parseInt(ageValue) || isNaN(ageValue) || ageValue < 1 || ageValue > 100) {
        addClass(age, 'is-invalid');
        removeClass(age, 'is-valid');
        
        } else {
        removeClass(age, 'is-invalid');
        addClass(age, 'is-valid');
              
    }

if(nameValue === '' || parseInt(nameValue)) {
        addClass(name, 'is-invalid');
        removeClass(name, 'is-valid');
        
        
    } else {
        removeClass(name, 'is-invalid');
        addClass(name, 'is-valid');
    }

    if(surnameValue === '' || parseInt(surnameValue)) {
        addClass(surname, 'is-invalid');
       removeClass(surname, 'is-valid');
        
    } else {
        removeClass(surname, 'is-invalid');
        addClass(surname, 'is-valid');
        
    }

    if(atpos<1 || dotpos<atpos+2 || dotpos+2>=emailValue.length) {
        addClass(email, 'is-invalid');
       removeClass(email, 'is-valid');
        
    } else {
        removeClass(email, 'is-invalid');
        addClass(email, 'is-valid');
        
    }

    if(checkRadio.checked)
    {
    	removeClass(checkRadio, 'is-invalid');
        addClass(checkRadio, 'is-valid');
    }
    else
    {
    	addClass(checkRadio, 'is-invalid');
        removeClass(checkRadio, 'is-valid');
    }

}

window.onscroll = function () {
        showTopButton()
    };

    let buttonUp = document.querySelector('.Button');

    buttonUp.addEventListener("click", goToTop);

    function showTopButton() {
        if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
            document.querySelector(".Button").style.display = "block";
        } else {
            document.querySelector(".Button").style.display = "none";
        }
    }

    function goToTop() {
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
    }