'use strict';
var hours = ['6am: ', '7am: ', '8am: ', '9am: ', '10am: ', '11am: ', '12pm: ', '1pm: ', '2pm: ', '3pm: ', '4pm: ', '5pm: ', '6pm: '];

//First and Pike object :

var firstPike = {
  minCust: 23,
  maxCust: 65,
  avgCookie: 6.3,
  avgCust: [],
  firstPikeArray: [],
  totalCookies: 0,
  finalArray: [],
  name: 'First and Pike'
};

firstPike.numCustHourly = function() {
  for (var i = 0; i < hours.length; i++ ) {
    this.avgCust.push(Math.floor(Math.random() * (this.maxCust - this.minCust + 1)) + this.minCust);
  }
};

firstPike.cookiesPerCust = function() {
  this.numCustHourly();
  for (var i = 0; i < hours.length; i++) {
    var eachCookies = Math.ceil(this.avgCust[i] * this.avgCookie);
    this.firstPikeArray.push(eachCookies);
    this.totalCookies += eachCookies;
  }
};


// will take the array and display it in an unordered list
firstPike.render = function() {
  firstPike.cookiesPerCust();
  for(var i = 0; i < this.firstPikeArray.length; i++) {
    this.finalArray.push(hours[i] + this.firstPikeArray[i] + ' cookies');
  }
};

firstPike.render();

var firstPikeList = document.createElement('ul');

for (var i = 0; i < firstPike.finalArray.length; i++) {
  var listElement = document.createElement('li');
  listElement.textContent = firstPike.finalArray[i];
  firstPikeList.appendChild(listElement);
};

document.body.appendChild(firstPikeList);

// Seatac store object :

var seatac = {
  minCust: 3,
  maxCust: 24,
  avgCookie: 1.2,
  avgCust: [],
  seatacArray: [],
  totalCookies: 0,
  finalArray: [],
  name : 'Seatac Airport',
};

  // methods :
seatac.numCustHourly = function() {
  for (var i = 0; i < hours.length; i++ ) {
    this.avgCust.push(Math.floor(Math.random() * (this.maxCust - this.minCust + 1)) + this.minCust);
  }
};

seatac.cookiesPerCust = function() {
  this.numCustHourly();
  for (var i = 0; i < hours.length; i++) {
    var eachCookies = Math.ceil(this.avgCust[i] * this.avgCookie);
    this.seatacArray.push(eachCookies);
    this.totalCookies += eachCookies;
  }
};


// will take the array and display it in an unordered list
seatac.render = function() {
  seatac.cookiesPerCust();
  for (var i = 0; i < this.seatacArray.length; i++) {
    this.finalArray.push(hours[i] + this.seatacArray[i] + ' cookies');
  }
};

seatac.render();

var seatacList = document.createElement('ul');

for (i = 0; i < seatac.finalArray.length; i++) {
  listElement = document.createElement('li');
  listElement.textContent = seatac.finalArray[i];
  seatacList.appendChild(listElement);
};

document.body.appendChild(seatacList);

// Seattle Center object :

var center = {
  minCust: 11,
  maxCust: 38,
  avgCookie: 3.7,
  avgCust: [],
  centerArray: [],
  totalCookies: 0,
  finalArray: [],
  name : 'Seattle Center',
};

  // methods :
center.numCustHourly = function() {
  for (var i = 0; i < hours.length; i++ ) {
    this.avgCust.push(Math.floor(Math.random() * (this.maxCust - this.minCust + 1)) + this.minCust);
  }
};

center.cookiesPerCust = function() {
  this.numCustHourly();
  for (var i = 0; i < hours.length; i++) {
    var eachCookies = Math.ceil(this.avgCust[i] * this.avgCookie);
    this.centerArray.push(eachCookies);
    this.totalCookies += eachCookies;
  }
};


// will take the array and display it in an unordered list
center.render = function() {
  center.cookiesPerCust();
  for (var i = 0; i < this.centerArray.length; i++) {
    this.finalArray.push(hours[i] + this.centerArray[i] + ' cookies');
  }
};

center.render();

var centerList = document.createElement('ul');

for (i = 0; i < center.finalArray.length; i++) {
  listElement = document.createElement('li');
  listElement.textContent = center.finalArray[i];
  centerList.appendChild(listElement);
};

document.body.appendChild(centerList);


// Alki store object :
var alki = {
  minCust: 2,
  maxCust: 16,
  avgCookie: 4.6,
  avgCust: [],
  alkiArray: [],
  totalCookies: 0,
  finalArray: [],
  name : 'Alki',
};

  // methods :
alki.numCustHourly = function() {
  for (var i = 0; i < hours.length; i++ ) {
    this.avgCust.push(Math.floor(Math.random() * (this.maxCust - this.minCust + 1)) + this.minCust);
  }
};

alki.cookiesPerCust = function() {
  this.numCustHourly();
  for (var i = 0; i < hours.length; i++) {
    var eachCookies = Math.ceil(this.avgCust[i] * this.avgCookie);
    this.alkiArray.push(eachCookies);
    this.totalCookies += eachCookies;
  }
};


// will take the array and display it in an unordered list
alki.render = function() {
  alki.cookiesPerCust();
  for (var i = 0; i < this.alkiArray.length; i++) {
    this.finalArray.push(hours[i] + this.alkiArray[i] + ' cookies');
  }
};

alki.render();

var alkiList = document.createElement('ul');

for (i = 0; i < alki.finalArray.length; i++) {
  listElement = document.createElement('li');
  listElement.textContent = alki.finalArray[i];
  alkiList.appendChild(listElement);
};

document.body.appendChild(alkiList);
