# Frontend Mentor - Interactive card details form solution

This is a solution to the [Interactive card details form challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/interactive-card-details-form-XpS8cKZDWw). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)

**Note: Delete this note and update the table of contents based on what sections you keep.**

## Overview

### The challenge

Users should be able to:

- Fill in the form and see the card details update in real-time
- Receive error messages when the form is submitted if:
  - Any input field is empty
  - The card number, expiry date, or CVC fields are in the wrong format
- View the optimal layout depending on their device's screen size
- See hover, active, and focus states for interactive elements on the page

### Links

- Solution URL: [](https://github.com/HameezAqeel/interactive-card-details-form)
- Live Site URL:[](https://hameezaqeel.github.io/interactive-card-details-form/)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- ES6 JavaScript

### What I learned

While creating a number type input, arros/spinners automatically appear as a part of the input field. The following CSS helped me remove them.

```HTML
<input
              id="card_num"
              type="number"
              placeholder="e.g. 1234 5678 9123 0000"
            />
```
```CSS
/* For all browsers excluding Firefox */
input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}

/*For Mozilla Firefox*/
input[type=number] {
    -moz-appearance: textfield;
  }
```

### Continued development

This project helped me to learn about CSS Flexbox and how it helps in creating the required layout in an easy and flexible manner. I will continue to learn more about CSS layouts in the future. 

## Author

- Frontend Mentor - [@HameezAqeel](https://www.frontendmentor.io/profile/HameezAqeel)
- Twitter - [@Vela_Hameez](https://www.twitter.com/Vela_Hameez)