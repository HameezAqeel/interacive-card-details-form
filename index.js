let cardHolderName = document.getElementById('cardholder_name');
let cardNum = document.getElementById('card_num');
let expiryMonth = document.getElementById('expiry_month');
let expiryYear = document.getElementById('expiry_year');
let CVC = document.getElementById('CVCinput');

let nameSection = document.getElementsByClassName('name')[0];
let numberSection = document.getElementsByClassName('card_num')[0];
let dateSection = document.getElementsByClassName('expiry_date')[0];
let CVC_Section = document.getElementsByClassName('cvc')[0];

let nameCheck = false, numCheck = false, monthCheck = false, yearCheck = false, CVCcheck = false;


// Name Check
let nameWarn = document.createElement('div');
let cardImageName = document.getElementById('holder_name');

cardHolderName.addEventListener('focusout', () => {
    if (cardHolderName.value.length == 0) {
        nameWarn.setAttribute('class', 'warning');
        nameWarn.innerText = `Can't be blank`;
        nameSection.appendChild(nameWarn);
        cardHolderName.style.outline = "1px solid red";
    }
    else {
        cardHolderName.style.outline = "1px solid grey";
        nameCheck = true;
        cardImageName.textContent = `${cardHolderName.value.toUpperCase()}`;
        nameSection.removeChild(nameWarn);
    }
})

// Number Check
let numberWarn = document.createElement('div');
let cardImageNum = document.getElementById('card-num');

cardNum.addEventListener('focusout', () => {
    if (cardNum.value.length == 0) {
        numberWarn.setAttribute('class', 'warning');
        numberWarn.innerText = `Can't be blank`;
        numberSection.appendChild(numberWarn);
        cardNum.style.outline = '1px solid red';
    }
    else if (cardNum.value.length != 16) {
        numberWarn.setAttribute('class', 'warning');
        numberWarn.innerText = `Please enter a valid Card Number`;
        numberSection.appendChild(numberWarn);
        cardNum.style.outline = '1px solid red';
    }
    else {
        cardNum.style.outline = '1px solid grey';
        numCheck = true;
        let userNum = cardNum.value.split('');
        for (let i = 4; i <= 19; i = i + 5) {
            userNum.splice(i, 0, " ");
        }
        userNum = userNum.join('');
        cardImageNum.innerText = userNum;
        numberSection.removeChild(numberWarn);
    }
})

// Month Check
let dateWarn = document.createElement('div');
let cardImageDate = document.getElementById('expiry_date');

expiryMonth.addEventListener('focusout', () => {
    if (expiryMonth.value.length == 0) {
        dateWarn.setAttribute('class', 'warning');
        dateWarn.innerText = `Can't be blank`;
        dateSection.appendChild(dateWarn);
        expiryMonth.style.outline = '1px solid red';
    }
    else if (expiryMonth.value < 1 || expiryMonth.value > 12) {
        dateWarn.setAttribute('class', 'warning');
        dateWarn.innerText = `Invalid Month`;
        dateSection.appendChild(dateWarn);
        expiryMonth.style.outline = '1px solid red';
    }
    else {
        expiryMonth.style.outline = '1px solid grey';
        monthCheck = true;
        if (monthCheck && yearCheck)
        {
           if (expiryMonth.value < 10)
           {
            cardImageDate.innerText = `0${expiryMonth.value}/${expiryYear.value}`
           }
           else
           {
            cardImageDate.innerText = `${expiryMonth.value}/${expiryYear.value}`
           }
        }
        dateSection.removeChild(dateWarn);
    }
})

expiryYear.addEventListener('focusout', () => {
    if (expiryYear.value.length == 0) {
        dateWarn.setAttribute('class', 'warning');
        dateWarn.innerText = `Can't be blank`;
        dateSection.appendChild(dateWarn);
        expiryYear.style.outline = '1px solid red';
    }
    else if (expiryYear.value < 22 || expiryYear.value > 32) {
        dateWarn.setAttribute('class', 'warning');
        dateWarn.innerText = `Invalid Year`;
        dateSection.appendChild(dateWarn);
        expiryYear.style.outline = '1px solid red';
    }
    else {
        expiryYear.style.outline = '1px solid grey';
        yearCheck = true;
        if (monthCheck && yearCheck)
{
   if (expiryMonth.value < 10 && expiryMonth.value.length < 2)
   {
    cardImageDate.innerText = `0${expiryMonth.value}/${expiryYear.value}`
   }
   else
   {
    cardImageDate.innerText = `${expiryMonth.value}/${expiryYear.value}`
   }
}
        dateSection.removeChild(dateWarn);
    }
})

let warnCVC = document.createElement('div');
let cardImageCVC = document.getElementById('CVC');

CVC.addEventListener('focusout', () => {

    if (CVC.value.length == 0) {
        warnCVC.setAttribute('class', 'warning');
        warnCVC.innerText = `Can't be blank`;
        CVC_Section.appendChild(warnCVC);
        CVC.style.outline = "1px solid red";
    }
    else if (CVC.value.length > 0 && CVC.value.length != 3) {
        warnCVC.setAttribute('class', 'warning');
        warnCVC.innerText = `Invalid CVC`;
        CVC_Section.appendChild(warnCVC);
        CVC.style.outline = "1px solid red";
    }
    else {
        CVC.style.outline = "1px solid grey"
        CVCcheck = true;
        cardImageCVC.innerText = CVC.value;
        CVC_Section.removeChild(warnCVC)
    }
})

let button = document.getElementById('confirm');
let formPortion = document.getElementsByClassName('rightPortion')[0];

button.addEventListener('click', (e) => {
    e.preventDefault();
    if (nameCheck && numCheck && monthCheck && yearCheck && CVCcheck) 
    {
        formPortion.innerHTML = `<div id="completionBox">
        <img id="complete" src="images/icon-complete.svg">
        <h3 id="thank">THANK YOU!</h3>
        <p id="confirmation">We've added your card details</p>
        <button id="continue">Continue</button>
        </div>`
    }
})