const $year = document.getElementById('year');

const $days = document.getElementById('days');
const $hours = document.getElementById('hours');
const $minutes = document.getElementById('minutes');
const $seconds = document.getElementById('seconds');

updateCountdown();
setInterval(updateCountdown, 1000);

function updateCountdown() {
    const currentDatetime = new Date();
    const newYearDatetime = new Date(`January 01 ${currentDatetime.getFullYear() + 1} 00:00:00`);

    $year.textContent = newYearDatetime.getFullYear().toString();

    const totalMillisecondsLeft = newYearDatetime - currentDatetime;
    const totalSecondsLeft = Math.floor(totalMillisecondsLeft / 1000);
    const totalMinutesLeft = Math.floor(totalSecondsLeft / 60);
    const totalHoursLeft = Math.floor(totalMinutesLeft / 60);
    const totalDaysLeft = Math.floor(totalHoursLeft / 24);

    const secondsLeft = totalSecondsLeft % 60;
    const minutesLeft = totalMinutesLeft % 60;
    const hoursLeft = totalHoursLeft % 24;
    const daysLeft = totalDaysLeft % getDaysInYear(newYearDatetime.getFullYear());

    $seconds.textContent = secondsLeft.toString().padStart(2, '0');
    $minutes.textContent = minutesLeft.toString().padStart(2, '0');
    $hours.textContent = hoursLeft.toString().padStart(2, '0');
    $days.textContent = daysLeft.toString();
}

function getDaysInYear(year) {
    return isLeapYear(year) ? 366 : 365;
}

function isLeapYear(year) {
    return year % 4 === 0 ? year % 100 === 0 ? year % 400 === 0 : true : false;
}
