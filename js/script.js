const menuBtn = document.getElementById('menu-btn');
const mobileMenu = document.getElementById('mobile-menu');

menuBtn.addEventListener('click', navToggle);

function navToggle() {
    mobileMenu.classList.toggle('flex');
    mobileMenu.classList.toggle('hidden');
    menuBtn.classList.toggle('open')
}



const errorText = document.getElementById('error-text');
const form = document.getElementById('link-form');
const linkInput = document.getElementById('link-input');



form.addEventListener('submit', formSubmit);

function formSubmit(e) {
    e.preventDefault();
    console.log(validateInput());
    
    if (linkInput.value === "") {
        errorText.textContent = "Please enter something";
        linkInput.classList.add('border-red-700')
    } else if (!validateInput(linkInput.value)) {
        errorText.textContent = "Please enter a valid link.";
        linkInput.classList.add('border-red-700');
    } else {
        errorText.textContent = "";
        linkInput.classList.remove('border-red-700');
        console.log(linkInput.value);
        
    }


    
}

function validateInput(input) {

const pattern = new RegExp('^(https?:\\/\\/)?' + // protocol
      '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|' +
      '((\\d{1,3}\\.){3}\\d{1,3}))' +
      '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*' +
      '(\\?[;&a-z\\d%_.~+=-]*)?' +
      '(\\#[-a-z\\d_]*)?$', 'i');
return pattern.test(input);
}

