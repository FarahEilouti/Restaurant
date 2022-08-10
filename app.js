'use strict';

let IDCounter = 0;

function getUniqueID(){
    IDCounter = IDCounter + 1
    return String(IDCounter).padStart(4, '0')
}


let submit = document.getElementById('submit');
let table = document.getElementById('table');

var val =0;

function Food (id,name,type,price){
    this.id = id;
    this.name = name;
    this.type = type;
    this.price = price;
}

Food.prototype.render = function(){
    let newRow = document.createElement('tr');
    table.appendChild(newRow);

    let newId = document.createElement('td');
    newId.textContent = this.id;
    newRow.appendChild(newId);

    let newName = document.createElement('td');
    newName.textContent = this.name;
    newRow.appendChild(newName);

    let newType = document.createElement('td');
    newType.textContent = this.type;
    newRow.appendChild(newType);

    let newPrice = document.createElement('td');
    newPrice.textContent = this.price;
    newRow.appendChild(newPrice);
}


let formFood = document.getElementById('form');
formFood.addEventListener('submit', handleSubmit);

function handleSubmit(event){
    event.preventDefault(event);

    let name = event.target.foodName.value;
    let type = event.target.foodType.value;
    let price = event.target.price.value;
    let id = getUniqueID();

    const newFood = new Food (id, name, type, price);

    newFood.render();
    console.log(newFood);
}
