// console.log("Hello World")
// let num=window.prompt("Enter the Hours");
// console.log(num);
let hrs, mins, secs, sdi;
let r=10;
function startfn(){
    hrs=Number(document.getElementById("h").value);
    mins=Number(document.getElementById("m").value);
    secs=Number(document.getElementById("s").value);
    if(hrs<0)
    {
        alert("Hours can not be negative");
        document.getElementById("h").value=null;
        document.getElementById("m").value=null;
        document.getElementById("s").value=null;
        return;
    }

    if(mins <0 || mins > 59)
    {
        alert("Minutes should be in the range 0 to 59");
        document.getElementById("h").value=null;
        document.getElementById("m").value=null;
        document.getElementById("s").value=null;
        return;
    }

    if(secs <0 || secs > 59)
    {
        alert("Seconds should be in the range 0 to 59");
        document.getElementById("h").value=null;
        document.getElementById("m").value=null;
        document.getElementById("s").value=null;
        return;
    }

    sdi=setInterval(decrement, 1000);
}
function decrement()
{
    if(document.getElementById("h").value==0 && document.getElementById("m").value==0 && document.getElementById("s").value==0)
    {
        playaudio();
        alert("Time's up. Please reset and start");
        clearInterval(sdi);
        return;
    }
    if(document.getElementById("s").value==0 && document.getElementById("m").value>=0)
    {
        document.getElementById("s").value=60;
        document.getElementById("m").value=document.getElementById("m").value-1;
    }
    if(document.getElementById("m").value==0 && document.getElementById("h").value>0)
    {
        document.getElementById("m").value=59;
        document.getElementById("h").value=document.getElementById("h").value-1;
    }
    document.getElementById("s").value=document.getElementById("s").value-1;

}

function resetfn(){
    document.getElementById("h").value=Number(0);
    document.getElementById("m").value=Number(0);
    document.getElementById("s").value=Number(0);
    clearInterval(sdi);
}

function pausefn(){
    clearInterval(sdi);
}
function playaudio(){
    let timerendsound= new Audio("mixkit-uplifting-flute-notification-2317.wav");
    timerendsound.play();
    return;
    }

let startb=document.getElementById("st");
let resetb=document.getElementById("re");
let pauseb=document.getElementById("pa");
startb.addEventListener('click', startfn);
resetb.addEventListener('click', resetfn);
pauseb.addEventListener('click', pausefn);