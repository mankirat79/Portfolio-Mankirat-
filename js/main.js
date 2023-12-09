window.onload = function() {
  var footerElement = document.getElementById("footer");
  var currentYear = new Date().getFullYear();
  footerElement.innerHTML = '&copy; ' + currentYear + ' Mankirat. All rights reserved.';
};

// Alert Button
document.getElementById('btn-alert').addEventListener('click', function() {
  alert('Hello world!');
});

// Hover Button
var hoverButton = document.getElementById("btn-hover");

hoverButton.addEventListener('mouseover', function() {
  hoverButton.innerText = 'New Button Label';
});

hoverButton.addEventListener('mouseleave', function() {
  hoverButton.innerText = 'Default Button Label';
});

// Incrementing Button
let count = 1;

document.getElementById('btn-counter').onclick = function() {
  count = count + 1;
  const counterText = document.getElementById('txt-counter');

  counterText.innerHTML = `Number: ${count}`;

  // If-else
  if (count % 2 === 0) {
    counterText.classList.remove('odd');
    counterText.classList.add('even');
  } else {
    counterText.classList.remove('even');
    counterText.classList.add('odd');
  }
};

// for Loops
const numbersList = document.getElementById('numbers');

for (let i = 1; i <= 100; i++) {
  const listItem = document.createElement('li');

  listItem.textContent = i % 2 === 0 ? 'even' : 'odd';

  numbersList.appendChild(listItem);
}
