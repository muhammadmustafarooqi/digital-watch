const hour = document.getElementById('hour');
const minute = document.getElementById('minute');
const second = document.getElementById('second');
const day = document.getElementById('day');


var monthName = [
    'january',
    'february',
    'March',
    'april',
    'may',
    'june',
    'july',
    'august',
    'september',
    'october',
    'november',
    'december'
]

const clock = setInterval(function () {
    let today = new Date();
    let d = today.getDate();
    let m = today.getMonth();
    let y = today.getFullYear();
    let h = today.getHours();
    let min = today.getMinutes();
    let sec = today.getSeconds();

    day.innerHTML = `${d} ${monthName[m]} ${y}`;
    hour.textContent = h
    minute.textContent = min
    second.textContent = sec
})
