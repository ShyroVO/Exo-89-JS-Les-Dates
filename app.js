let date = Date.now();
let today = new Date();

document.getElementById('timestamp').innerHTML = date;
document.getElementById('localDate').innerHTML = today.toLocaleDateString();
document.getElementById('localTime').innerHTML = today.toLocaleTimeString();

let futur = new Date();

futur.setDate(today.getDate() + 2);
futur.setHours(today.getHours() + 6);

document.getElementById('dateFutur').innerHTML = futur ;


// Test differences:
let difference = today.getTime() - futur.getTime();

let days = Math.floor(difference / 1000 / 60 / 60 / 24 );
let hours = Math.floor(difference / 1000 / 60 / 60 );
let minutes = Math.floor(difference / 1000 / 60);

document.getElementById('dateFutur').innerHTML += "<br>" + days + " " + hours + " " + minutes + " " ;