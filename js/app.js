'use strict';
var hours = ['6am: ', '7am: ', '8am: ', '9am: ', '10am: ', '11am: ', '12pm: ', '1pm: ', '2pm: ', '3pm: ', '4pm: ', '5pm: ', '6pm: '];
var i = 0;
// Alki store object :
var alki = {
  minCust: 2,
  maxCust: 16,
  avgCookie: 4.6,
  avgCust: [],
  alkiArray: [],
  name : 'Alki',
  numCustHourly: function() {
    for (i = 0; i < hours.length; i++ ) {
      alki.avgCust.push(Math.floor(Math.random() * (alki.maxCust - alki.minCust + 1)) + alki.minCust);
    }
  }

};
