setInterval(function(){         //setInterval function runs the code inside the function block every 1000 milliseconds
    // Get the current time
    let date = new Date();
    let h = date.getHours();
    let m = date.getMinutes();
    let s = date.getSeconds();

    // Calculate the rotation degrees for each hand
    let hRotation = 30 * h + m / 2;   // 360 degrees / 12 hours = 30 degrees per hour
    let mRotation = 6 * m;            // 360 degrees / 60 minutes = 6 degrees per minute
    let sRotation = 6 * s;            // 360 degrees / 60 seconds = 6 degrees per second

    // Rotate the clock hands
    document.getElementById('hour').style.transform = `rotate(${hRotation}deg)`;        // rotate(90deg) if the hRotation is 90.The syntax ${} is used inside a template literal (the backtick `) to dynamically insert the value of the variable into the string.
    document.getElementById('minute').style.transform = `rotate(${mRotation}deg)`;
    document.getElementById('second').style.transform = `rotate(${sRotation}deg)`;

}, 1000);
