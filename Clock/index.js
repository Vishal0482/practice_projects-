let a;
let time;
let date;
const option = { weekday:'long' , year:'numeric' , month:'long' , day:'numeric' };

setInterval(() => {
    a = new Date();
    time = a.toLocaleTimeString();
    date = a.toLocaleDateString(undefined ,option);
    document.getElementById('time').innerHTML = time;
    document.getElementById('date').innerHTML = date;
}, 1000);

function openClock(evt, clockName) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(clockName).style.display = "block";
    evt.currentTarget.className += " active";
}

document.getElementById("defaultOpen").click();

// javaScript for analog clock

setInterval(() => {
    d  = new Date();
    htime = d.getHours();
    mtime = d.getMinutes();
    stime =d.getSeconds();

    hrotation= 30*htime + mtime/2;
    mrotation = 6*mtime;
    srotation = 6*stime;

    hour.style.transform = `rotate(${hrotation}deg)`;
    minute.style.transform = `rotate(${mrotation}deg)`;
    second.style.transform = `rotate(${srotation}deg)`;
}, 1000);

