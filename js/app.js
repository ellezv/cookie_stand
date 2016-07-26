'use strict';
var hours = ['6am: ', '7am: ', '8am: ', '9am: ', '10am: ', '11am: ', '12pm: ', '1pm: ', '2pm: ', '3pm: ', '4pm: ', '5pm: ', '6pm: '];
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
  for(var i = 0; i < this.alkiArray.length; i++) {
    this.finalArray.push(hours[i] + this.alkiArray[i] + ' cookies');
  }
};

alki.render();
