import  pkg from '../data/chitietsukien.json' assert { type: 'json' };

const deitails_events = document.getElementById('deitails-events');

const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
deitails_events.innerHTML = pkg[urlParams.get('page') - 1]
