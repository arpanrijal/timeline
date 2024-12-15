const currentTime = new Date();
let sec = currentTime.getSeconds();
let minu = currentTime.getMinutes();
let hrs = currentTime.getHours();
let store, hrs24, hrs12;
function onoff(value) {
  store = value;
  if (value == 2) {
    if (hrs > 12) {
      hrs12 = hrs % 12;
    }
    document.getElementById("hrs").innerHTML = hrs.toString().padStart(2, "0");
  }
  else {
    if (hrs > 12) {
      hrs24 = hrs + 12;
    }
    document.getElementById("hrs").innerHTML = hrs.toString().padStart(2, "0");
    document.getElementById("am-pm").innerHTML = "";

  }
}
setInterval(() => {
  sec++;
  if(store == 2){
    if (hrs>11) {
      document.getElementById("am-pm").innerHTML = "P.M.";
    } else {
      document.getElementById("am-pm").innerHTML = "A.M.";
    }
  }
  if (sec >= 60) {
    sec = 0;
    minu++;
    if (minu >= 60) {
      minu = 0;
      hrs++;
    }
    if (hrs > 12 && store == 2) {
      hrs = 1;
    }
    if (hrs > 24 && store == 1) {
      hrs = 0;
    }
  }


  document.getElementById("hrs").innerHTML = hrs.toString().padStart(2, "0");
  document.getElementById("sec").innerHTML = sec.toString().padStart(2, "0");
  document.getElementById("min").innerHTML = minu.toString().padStart(2, "0");
}, 1000);
