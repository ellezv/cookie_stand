'use strict';
var newOrderForm = document.getElementById('newOrderForm');
var options = ['', 'Box of cookies', 'Salmon T-shirt', 'Coffee Mug'];
var listOfItems = document.getElementById('listOfItems');

function handleNewItem() {
  var newListOption = document.createElement('li');
  listOfItems.appendChild(newListOption);
  var newItem = document.createElement('select');
  newListOption.appendChild(newItem);
  for (var i = 0; i < options.length; i++) {
    var newOption = document.createElement('option');
    newOption.textContent = options[i];
    newListOption.appendChild(newOption);
  }
}

newOrderForm.addEventListener('change', handleNewItem);
