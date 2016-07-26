'use strict';
var hours = ['6am: ', '7am: ', '8am: ', '9am: ', '10am: ', '11am: ', '12pm: ', '1pm: ', '2pm: ', '3pm: ', '4pm: ', '5pm: ', '6pm: '];

//First and Pike object :

var firstPike = {
  minCust: 23,
  maxCust: 65,
  avgCookie: 6.3,
  customersEachHour: [],
  cookiesSoldEachHour: [],
  totalCookies: 0,
  stringsForDisplayInLists: [],
  name: 'First and Pike'
};

firstPike.numCustHourly = function() {
  for (var i = 0; i < hours.length; i++ ) {
    this.customersEachHour.push(Math.floor(Math.random() * (this.maxCust - this.minCust + 1)) + this.minCust);
  }
};

firstPike.cookiesEachHour = function() {
  this.numCustHourly();
  for (var i = 0; i < hours.length; i++) {
    var singleHourOfCookieSales = Math.ceil(this.customersEachHour[i] * this.avgCookie);
    this.cookiesSoldEachHour.push(singleHourOfCookieSales);
    this.totalCookies += singleHourOfCookieSales;
  }
};


// will take the array and display it in an unordered list
firstPike.render = function() {
  firstPike.cookiesEachHour();
  for(var i = 0; i < hours.length; i++) {
    this.stringsForDisplayInLists.push(hours[i] + this.cookiesSoldEachHour[i] + ' cookies');
  }
  this.stringsForDisplayInLists.push('Total: ' + this.totalCookies);
};

firstPike.render();

var pikeTitle = document.createElement('h2');
document.body.appendChild(pikeTitle);

pikeTitle.textContent = firstPike.name;

var firstPikeList = document.createElement('ul');

for (var i = 0; i < firstPike.stringsForDisplayInLists.length; i++) {
  var listElement = document.createElement('li');
  listElement.textContent = firstPike.stringsForDisplayInLists[i];
  firstPikeList.appendChild(listElement);
};

document.body.appendChild(firstPikeList);

// Seatac store object :

var seatac = {
  minCust: 3,
  maxCust: 24,
  avgCookie: 1.2,
  customersEachHour: [],
  seatacArray: [],
  totalCookies: 0,
  stringsForDisplayInLists: [],
  name : 'Seatac Airport',
};

  // methods :
seatac.numCustHourly = function() {
  for (var i = 0; i < hours.length; i++ ) {
    this.customersEachHour.push(Math.floor(Math.random() * (this.maxCust - this.minCust + 1)) + this.minCust);
  }
};

seatac.cookiesEachHour = function() {
  this.numCustHourly();
  for (var i = 0; i < hours.length; i++) {
    var singleHourOfCookieSales = Math.ceil(this.customersEachHour[i] * this.avgCookie);
    this.seatacArray.push(singleHourOfCookieSales);
    this.totalCookies += singleHourOfCookieSales;
  }
};


// will take the array and display it in an unordered list
seatac.render = function() {
  seatac.cookiesEachHour();
  for (var i = 0; i < this.seatacArray.length; i++) {
    this.stringsForDisplayInLists.push(hours[i] + this.seatacArray[i] + ' cookies');
  }
  this.stringsForDisplayInLists.push('Total: ' + this.totalCookies);
};

seatac.render();

var seatacTitle = document.createElement('h2');
document.body.appendChild(seatacTitle);

seatacTitle.textContent = seatac.name;

var seatacList = document.createElement('ul');

for (i = 0; i < seatac.stringsForDisplayInLists.length; i++) {
  listElement = document.createElement('li');
  listElement.textContent = seatac.stringsForDisplayInLists[i];
  seatacList.appendChild(listElement);
};

document.body.appendChild(seatacList);

// Seattle Center object :

var center = {
  minCust: 11,
  maxCust: 38,
  avgCookie: 3.7,
  customersEachHour: [],
  centerArray: [],
  totalCookies: 0,
  stringsForDisplayInLists: [],
  name : 'Seattle Center',
};

  // methods :
center.numCustHourly = function() {
  for (var i = 0; i < hours.length; i++ ) {
    this.customersEachHour.push(Math.floor(Math.random() * (this.maxCust - this.minCust + 1)) + this.minCust);
  }
};

center.cookiesEachHour = function() {
  this.numCustHourly();
  for (var i = 0; i < hours.length; i++) {
    var singleHourOfCookieSales = Math.ceil(this.customersEachHour[i] * this.avgCookie);
    this.centerArray.push(singleHourOfCookieSales);
    this.totalCookies += singleHourOfCookieSales;
  }
};


// will take the array and display it in an unordered list
center.render = function() {
  center.cookiesEachHour();
  for (var i = 0; i < this.centerArray.length; i++) {
    this.stringsForDisplayInLists.push(hours[i] + this.centerArray[i] + ' cookies');
  }
  this.stringsForDisplayInLists.push('Total: ' + this.totalCookies);
};

center.render();

var centerTitle = document.createElement('h2');
document.body.appendChild(centerTitle);

centerTitle.textContent = center.name;

var centerList = document.createElement('ul');

for (i = 0; i < center.stringsForDisplayInLists.length; i++) {
  listElement = document.createElement('li');
  listElement.textContent = center.stringsForDisplayInLists[i];
  centerList.appendChild(listElement);
};

document.body.appendChild(centerList);

// Capitol Hill store object :
var capHill = {
  minCust: 20,
  maxCust: 38,
  avgCookie: 2.3,
  customersEachHour: [],
  capHillArray: [],
  totalCookies: 0,
  stringsForDisplayInLists: [],
  name : 'Capitol Hill',
};

  // methods :
capHill.numCustHourly = function() {
  for (var i = 0; i < hours.length; i++ ) {
    this.customersEachHour.push(Math.floor(Math.random() * (this.maxCust - this.minCust + 1)) + this.minCust);
  }
};

capHill.cookiesEachHour = function() {
  this.numCustHourly();
  for (var i = 0; i < hours.length; i++) {
    var singleHourOfCookieSales = Math.ceil(this.customersEachHour[i] * this.avgCookie);
    this.capHillArray.push(singleHourOfCookieSales);
    this.totalCookies += singleHourOfCookieSales;
  }
};


// will take the array and display it in an unordered list
capHill.render = function() {
  capHill.cookiesEachHour();
  for (var i = 0; i < this.capHillArray.length; i++) {
    this.stringsForDisplayInLists.push(hours[i] + this.capHillArray[i] + ' cookies');
  }
  this.stringsForDisplayInLists.push('Total: ' + this.totalCookies);
};

capHill.render();

var capHillTitle = document.createElement('h2');
document.body.appendChild(capHillTitle);

capHillTitle.textContent = capHill.name;

var capHillList = document.createElement('ul');

for (i = 0; i < capHill.stringsForDisplayInLists.length; i++) {
  listElement = document.createElement('li');
  listElement.textContent = capHill.stringsForDisplayInLists[i];
  capHillList.appendChild(listElement);
};

document.body.appendChild(capHillList);


// Alki store object :
var alki = {
  minCust: 2,
  maxCust: 16,
  avgCookie: 4.6,
  customersEachHour: [],
  alkiArray: [],
  totalCookies: 0,
  stringsForDisplayInLists: [],
  name : 'Alki',
};

  // methods :
alki.numCustHourly = function() {
  for (var i = 0; i < hours.length; i++ ) {
    this.customersEachHour.push(Math.floor(Math.random() * (this.maxCust - this.minCust + 1)) + this.minCust);
  }
};

alki.cookiesEachHour = function() {
  this.numCustHourly();
  for (var i = 0; i < hours.length; i++) {
    var singleHourOfCookieSales = Math.ceil(this.customersEachHour[i] * this.avgCookie);
    this.alkiArray.push(singleHourOfCookieSales);
    this.totalCookies += singleHourOfCookieSales;
  }
};


// will take the array and display it in an unordered list
alki.render = function() {
  alki.cookiesEachHour();
  for (var i = 0; i < this.alkiArray.length; i++) {
    this.stringsForDisplayInLists.push(hours[i] + this.alkiArray[i] + ' cookies');
  }
  this.stringsForDisplayInLists.push('Total: ' + this.totalCookies);
};

alki.render();

var alkiTitle = document.createElement('h2');
document.body.appendChild(alkiTitle);

alkiTitle.textContent = alki.name;

var alkiList = document.createElement('ul');

for (i = 0; i < alki.stringsForDisplayInLists.length; i++) {
  listElement = document.createElement('li');
  listElement.textContent = alki.stringsForDisplayInLists[i];
  alkiList.appendChild(listElement);
};

document.body.appendChild(alkiList);
