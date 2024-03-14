$(document).ready(function(){

    $('.hamburger').click(function(){

        $('.nav').slideToggle();

    });

});

// Hämta HTML-elementet
var element = document.querySelector('html');

// Lägg till 'lang' attributet
element.setAttribute('lang', 'sv');

// Hämta formuläret
var form = document.querySelector('form');

// Hämta popup-fönstret
var popup = document.getElementById("myPopup");

// Hämta <span>-elementet som stänger popup-fönstret
var span = document.getElementsByClassName("close")[0];

// När användaren klickar på <span> (x), stäng popup-fönstret
span.onclick = function(x) {
    popup.style.display = "none";
}

let buyButtons = document.getElementsByClassName("buyButton");
for (let i = 0; i <buyButtons.length; i++) {
    buyButtons[i].addEventListener('click', function() {
        popup.style.display = "block";
    });
}

// Hämta bekräftelsemodalen
var confirmationModal = document.getElementById('confirmationModal');

// Lägg till en 'submit'-händelse till formuläret
form.addEventListener('submit', function(event) {
    // Förhindra formulärets standardbeteende
    event.preventDefault();

    // Stäng popup-fönstret
    popup.style.display = "none";

    // Visa bekräftelsemodalen
    confirmationModal.style.display = "block";
});

// Lägg till en klickhändelse till stäng-knappen i bekräftelsemodalen
confirmationModal.getElementsByClassName('close')[0].onclick = function() {
    confirmationModal.style.display = "none";
}

// När användaren klickar var som helst utanför popup-fönstret eller bekräftelsemodalen, stäng det
window.onclick = function(event) {
    if (event.target == popup) {
        popup.style.display = "none";
    }
    if (event.target == confirmationModal) {
        confirmationModal.style.display = "none";
    }
}