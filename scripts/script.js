const state = document.querySelector('#state');
const district = document.querySelector('#district');
const crime = document.querySelector('#crime');
const year = document.querySelector('#year');

function enableOthers(answer) {
    if(answer.value != 0) {
        district.disabled = false;
        crime.disabled = false;
        year.disabled = false;
    }
    else {
        district.disabled = true;
        crime.disabled = true;
        year.disabled = true;
    }
}