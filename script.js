// console.log("Hello World")
// let num=window.prompt("Enter the Hours");
// console.log(num);
let hrs, mins, secs, sdi, hour, minute, second;
let r=10;
function startfn(){
    hrs=Number(document.getElementById("h").value);
    mins=Number(document.getElementById("m").value);
    secs=Number(document.getElementById("s").value);
    hour =document.getElementById("h");
    hour.disabled=true;
    minute =document.getElementById("m");
    minute.disabled=true;
    second =document.getElementById("s");
    second.disabled=true;
    startb.disabled=true;
    if(hrs<0)
    {
        alert("Hours can not be negative");
        document.getElementById("h").value=null;
        document.getElementById("m").value=null;
        document.getElementById("s").value=null;
        hour.disabled=false;
        minute.disabled=false;
        second.disabled=false;
        startb.disabled=false;
        return;
    }

    if(mins <0 || mins > 59)
    {
        alert("Minutes should be in the range 0 to 59");
        document.getElementById("h").value=null;
        document.getElementById("m").value=null;
        document.getElementById("s").value=null;
        hour.disabled=false;
        minute.disabled=false;
        second.disabled=false;
        startb.disabled=false;
        return;
    }

    if(secs <0 || secs > 59)
    {
        alert("Seconds should be in the range 0 to 59");
        document.getElementById("h").value=null;
        document.getElementById("m").value=null;
        document.getElementById("s").value=null;
        hour.disabled=false;
        minute.disabled=false;
        second.disabled=false;
        startb.disabled=false;
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
        hour.disabled=false;
        minute.disabled=false;
        second.disabled=false;
        startb.disabled=false;
        clearInterval(sdi);
        return;
    }
    if(document.getElementById("s").value==0 && document.getElementById("m").value>=0)
    {
        document.getElementById("s").value=60;
        if(document.getElementById("m").value==0)
        {
            document.getElementById("m").value=59;
            document.getElementById("h").value=document.getElementById("h").value-1;
        }
        else
        {
            document.getElementById("m").value=document.getElementById("m").value-1;
        }
        
    }
    // if(document.getElementById("m").value==0 && document.getElementById("h").value>0)
    // {
    //     document.getElementById("m").value=59;
    //     document.getElementById("h").value=document.getElementById("h").value-1;
    // }
    document.getElementById("s").value=document.getElementById("s").value-1;

}

function resetfn(){
    document.getElementById("h").value=Number(0);
    document.getElementById("m").value=Number(0);
    document.getElementById("s").value=Number(0);
        hour.disabled=false;
        minute.disabled=false;
        second.disabled=false;
        startb.disabled=false;
    clearInterval(sdi);
}

function pausefn(){
    clearInterval(sdi);
    startb.disabled=false;
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