'use strict';
var hours = ['6am: ', '7am: ', '8am: ', '9am: ', '10am: ', '11am: ', '12pm: ', '1pm: ', '2pm: ', '3pm: ', '4pm: ', '5pm: ', '6pm: '];
var myStores = [];
var storeTable = document.getElementById('storeTable');
var newLocationForm = document.getElementById('newLocationForm');


function Store(minCust, maxCust, avgCookie, name) {
  this.name = name;
  this.minCust = minCust;
  this.maxCust = maxCust;
  this.avgCookie = avgCookie;
  this.customersEachHour = [];
  this.cookiesSoldEachHour = [];
  this.totalCookies = 0;
  this.stringsForDisplayInLists = [];

  this.numCustHourly = function() {
    for (var i = 0; i < hours.length; i++ ) {
      this.customersEachHour.push(Math.floor(Math.random() * (this.maxCust - this.minCust + 1)) + this.minCust);
    };
  };

  this.cookiesEachHour = function() {
    this.numCustHourly();
    for (var i = 0; i < hours.length; i++) {
      var singleHourOfCookieSales = Math.ceil(this.customersEachHour[i] * this.avgCookie);
      this.cookiesSoldEachHour.push(singleHourOfCookieSales);
      this.totalCookies += singleHourOfCookieSales;
    }
  };

  this.render = function() {
    this.cookiesEachHour();
    for(var i = 0; i < hours.length; i++) {
      this.stringsForDisplayInLists.push(hours[i] + this.cookiesSoldEachHour[i] + ' cookies');
    }
    this.stringsForDisplayInLists.push('Total: ' + this.totalCookies);
  };

  this.render();
  myStores.push(this);
};

var pike = new Store(23, 65, 6.3, 'First and Pike');
var seatac = new Store(3, 24, 1.2, 'Seatac Airport');
var center = new Store(11, 38, 3.7, 'Seattle Center');
var capHill = new Store(20, 38, 2.3, 'Capitol Hill');
var alki = new Store(2, 16, 4.6, 'Alki');

function makeItWork() {
  storeTable.innerHTML = '';
}

function makeHeaderRow() {
  var tableRow = document.createElement('tr');
  var thElement = document.createElement('th');
  tableRow.appendChild(thElement);
  for (var i = 0; i < hours.length; i++ ) {
    thElement = document.createElement('th');
    thElement.textContent = hours[i];
    tableRow.appendChild(thElement);
  };
  thElement = document.createElement('th');
  thElement.textContent = 'Daily Location Total:';
  tableRow.appendChild(thElement);
  storeTable.appendChild(tableRow);
}

function makeAllStoreRows() {
  for (var store = 0; store < myStores.length; store++ ){
    var tableRow = document.createElement('tr');
    var tdElement = document.createElement('td');
    tdElement.textContent = myStores[store].name;
    tableRow.appendChild(tdElement);
    for (var i = 0; i < hours.length; i++) {
      tdElement = document.createElement('td');
      tdElement.textContent = myStores[store].cookiesSoldEachHour[i];
      tableRow.appendChild(tdElement);
    }
    tdElement = document.createElement('td');
    tdElement.textContent = myStores[store].totalCookies;
    tableRow.appendChild(tdElement);
    storeTable.appendChild(tableRow);
  }
};

function makeTotalsRow() {
  var footerRow = document.createElement('tfoot');
  storeTable.appendChild(footerRow);
  var tableRow = document.createElement('tr');
  tableRow.textContent = 'Totals';
  footerRow.appendChild(tableRow);
  var globalDailyTotal = 0;
  for (var i = 0; i < hours.length; i++) {
    var totalForEachHour = 0;
    for (var store = 0; store < myStores.length; store++) {
      totalForEachHour = totalForEachHour + myStores[store].cookiesSoldEachHour[i];
      globalDailyTotal += myStores[store].cookiesSoldEachHour[i];
    }
    var tdElement = document.createElement('td');
    tdElement.textContent = totalForEachHour;
    tableRow.appendChild(tdElement);
  }
  tdElement = document.createElement('td');
  tdElement.textContent = globalDailyTotal;
  tableRow.appendChild(tdElement);
}

function handleNewLocationSubmit(event){

  //not reload when submit
  event.preventDefault();

  if (!event.target.newLocationName.value || !event.target.minCustomer.value || !event.target.maxCustomer.value || !event.target.averageCookies.value) {
    return alert('Son of a cookie, gimme data!');
  }

  var newStore = event.target.newLocationName.value;
  var newStoreMinCustomer = event.target.minCustomer.value;
  var newStoreMaxCustomer = event.target.maxCustomer.value;
  var newStoreAverageCookies = event.target.averageCookies.value;
  console.log('user submit: ', newStore, newStoreMinCustomer, newStoreMaxCustomer, newStoreAverageCookies);

  var intMinCustomer = parseInt(newStoreMinCustomer);
  var intMaxCustomer = parseInt(newStoreMaxCustomer);
  var floatAverageCookies = parseFloat(newStoreAverageCookies);

  var makeNewStore = new Store(intMinCustomer, intMaxCustomer, floatAverageCookies, newStore);
  console.log('new store created', newStore, myStores);

  event.target.newLocationName.value = null;
  event.target.minCustomer.value = null;
  event.target.maxCustomer.value = null;
  event.target.averageCookies.value = null;

  makeItWork();
  makeHeaderRow();
  makeAllStoreRows();
  makeTotalsRow();
}

//


makeHeaderRow();
makeAllStoreRows();
makeTotalsRow();

newLocationForm.addEventListener('submit', handleNewLocationSubmit);
