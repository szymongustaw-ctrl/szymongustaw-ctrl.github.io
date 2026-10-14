const earnedEC = 0;
const maxEC = 60;

const percentage = (earnedEC / maxEC) * 100;

document.getElementById("ec").innerHTML =
    earnedEC + " / " + maxEC + " EC";

document.getElementById("progressfill").style.width =
    percentage + "%";

    

document.getElementById("grade1").classList.add("result-passed");


document.getElementById("grade2").classList.add("result-resit");

document.getElementById("grade3").classList.add("result-failed");

