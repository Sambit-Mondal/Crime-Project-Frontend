const state = document.querySelector('#state');
const district = document.querySelector('#district');
const crime = document.querySelector('#crime');
const year = document.querySelector('#year');

function enableOthers(answer) {
    if (answer.value != 0) {
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

function nextBtn() {
    const stateOutput = state.value;
    const districtOutput = district.value;
    const crimeOutput = crime.value;
    const yearOutput = year.value;

    if ((stateOutput != 0) && (districtOutput != 0) && (crimeOutput != 0) && (yearOutput != 0)) {
        window.location.href = '../html-files/graph-page.html';
    }
    else {
        alert('Please select all Parameters!');
    }

    localStorage.setItem("stateValue", stateOutput);
}

window.onload = function() {
    const stateValue = localStorage.getItem("stateValue");
    document.querySelector('p.state').textContent = stateValue;
}