// Welcome to alarm world

// Getting hour and minute value

console.time('the code took:')
let hour = document.getElementById('hours');
let minutes = document.getElementById('minutes');
let hvalue;
let mvalue;
let hovalue;
let i = 0;
let v = 0;

hour.addEventListener('blur', () => {
    if (hour.value != null) {
        hvalue = hour.value
    }
    else { }

    let am = document.getElementById('am');
    let pm = document.getElementById('pm');

    am.addEventListener('blur', () => {
        hovalue = Number(hvalue);
        am.checked = true;
        pm.checked = false;
        i = 1;
    })

    pm.addEventListener('blur', () => {
        hovalue = 12 + Number(hvalue);
        pm.checked = true;
        am.checked = false;
        i = 1;
    })

})
minutes.addEventListener('blur', () => {
    if (minutes.value != null) {
        mvalue = Number(minutes.value);
        v = 1;
    }
    else { }
})

let vvalue;

let volume = document.getElementById('volume');
volume.addEventListener('blur', () => {
    vvalue = Number(volume.value);
})

let setAlarm = document.getElementById('setAlarm');
let pdate = new Date();
let phour = pdate.getHours();
let pminutes = pdate.getMinutes();
let pseconds = pdate.getSeconds();
let fromHours;
let fromMinutes;
let timeToAlarm;

let audio = new Audio(`Aron_Chupa_-_I'm_an_Albatraoz_Ringtone_BGM(256k).mp3`)

setAlarm.addEventListener('click', (e) => {
    e.preventDefault();
    if (hovalue != null && mvalue != null) {
        fromHours = (hovalue - phour) * 3600000
        fromMinutes = (mvalue - pminutes) * 60000
        timeToAlarm = fromHours + fromMinutes
        console.log(timeToAlarm)
        if (timeToAlarm >= 0) {
            setTimeout(() => {
                alarmtone();
            }, timeToAlarm-49500);
        }
        else {
            let confirmation = confirm('Are you a timetraveller');
            console.log(confirmation);
            if (!confirmation) {
                window.location.reload()
            }
            else {
            }
        }


    }
    else { }
    function alarmtone() {
        audio.play();
        console.timeEnd('the code took:')
        setTimeout(() => {
            stoptone();
        }, 10000);
    }

    function stoptone() {
        audio.pause();
    }
})
