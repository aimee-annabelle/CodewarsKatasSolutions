"use strict";
/**
 * Write a function, which takes a non-negative integer (seconds) as input and returns the time in a human-readable format (HH:MM:SS)
 * HH = hours, padded to 2 digits, range: 00 - 99
 * MM = minutes, padded to 2 digits, range: 00 - 59
 * SS = seconds, padded to 2 digits, range: 00 - 59
 * The maximum time never exceeds 359999 (99:59:59)
 */
function humanReadable(seconds) {
    if (seconds < 60)
        return `00:00:${(seconds > 10) ? seconds : '0' + seconds}`;
    let hours, mins, secs;
    hours = Math.floor(seconds / 3600);
    secs = seconds % 3600;
    mins = Math.floor(secs / 60);
    secs = secs % 60;
    return `${hours > 10 ? hours : '0' + hours}:${mins > 10 ? mins : '0' + mins}:${secs > 10 ? secs : '0' + secs}`;
}
console.log(humanReadable(0)); // '00:00:00
console.log(humanReadable(5)); // '00:00:05'
console.log(humanReadable(60)); // '00:01:00'
console.log(humanReadable(86399)); // '23:59:59'
console.log(humanReadable(359999)); // '99:59:59'
