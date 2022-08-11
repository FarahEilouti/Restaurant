'use strict';

let IDCounter = 0;
let myArrFood = [];

function getUniqueID(){
    IDCounter = IDCounter + 1
    return String(IDCounter).padStart(4, '0')
}


let submit = document.getElementById('submit');
let table = document.getElementById('table');


function Food (id,name,type,price){
    this.id = id;
    this.name = name;
    this.type = type;
    this.price = price;
    myArrFood.push(this);
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
    newRow.classList.add("newRow");
}


let formFood = document.getElementById('form');
formFood.addEventListener('submit', handleSubmit);

function handleSubmit(event){
    event.preventDefault();

    let name = event.target.foodName.value;
    let type = event.target.foodType.value;
    let price = event.target.price.value;
    let id = getUniqueID();

    const newFood = new Food (id, name, type, price);

    newFood.render();
    saveData(myArrFood);
}

let tableStats = document.getElementById('table2');

function saveData(data){
    let String = JSON.stringify(data);
    localStorage.setItem("food", String);
}

function getData(){
    let retrievedData = localStorage.getItem("food");
    let arrayData = JSON.parse(retrievedData);
    
    for (let i = 0; i < arrayData.length; i++){
        new Food (arrayData[i].id, arrayData[i].name, arrayData[i].type, arrayData[i].price);
    }
    for (let i = 0; i < arrayData.length; i++){
        myArrFood[i].render();
    }

}

getData();

