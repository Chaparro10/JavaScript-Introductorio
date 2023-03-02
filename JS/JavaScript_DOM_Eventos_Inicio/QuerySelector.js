//QUERYSELECTOR
const heading = document.querySelector('.header__texto h2 ');
heading.textContent('Nuevo Heading');
console.log(heading);

//QuerySelectorAll
const enlaces = document.querySelectorAll('.navegacion a');
enlaces[0].textContent='Nuevo enlaces';
console.log(enlaces);

//getElementId

const head = document.getElementById('Head');
console.log(head);