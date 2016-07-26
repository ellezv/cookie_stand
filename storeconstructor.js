'use strict';
var hours = ['6am: ', '7am: ', '8am: ', '9am: ', '10am: ', '11am: ', '12pm: ', '1pm: ', '2pm: ', '3pm: ', '4pm: ', '5pm: ', '6pm: '];
var myStores = [];

function Store(minCust, maxCust, avgCookie, name) {
  this.minCust = minCust;
  this.maxCust = maxCust;
  this.avgCookie = avgCookie;
  this.customersEachHour = [];
  this.cookiesSoldEachHour = [];
  this.totalCookies = 0;
  this.stringsForDisplayInLists = [];
  this.name = name;

//methods :
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
  //pushing all my stores created into an array
  this.render();
  myStores.push(this);
};

var pike = new Store(23, 65, 6.3, 'First and Pike');
var seatac = new Store(3, 24, 1.2, 'Seatac Airport');
var center = new Store(11, 38, 3.7, 'Seattle Center');
var capHill = new Store(20, 38, 2.3, 'Capitol Hill');
var alki = new Store(2, 16, 4.6, 'Alki');

var storeTable = document.getElementById('storeTable');

function makeHeaderRow() {
  //create row
  var tableRow = document.createElement('tr');
  //create empty cell
  var thElement = document.createElement('th');
  tableRow.appendChild(thElement);
  //loop through hours to create header table cells for all the hours
  for (var i = 0; i < hours.length; i++ ) {
    thElement = document.createElement('th');
    thElement.textContent = hours[i];
    tableRow.appendChild(thElement);
  };
  storeTable.appendChild(tableRow);
}

makeHeaderRow();
