const currentTime = new Date();
let sec = currentTime.getSeconds();
let minu = currentTime.getMinutes();
let hrs = currentTime.getHours();
let toggle = false;
function onoff(value){
    console.log(value)
    if(value == 2)
        {
            if (hrs > 12) {
              hrs = hrs % 12;
            }
          document.getElementById("hrs").innerHTML = hrs.toString().padStart(2, "0");
          document.getElementById("am-pm").innerHTML = toggle ? "A.M." : "P.M.";

      
        }
        else{
            if(!toggle){
                hrs = hrs + 12;
            }
            document.getElementById("hrs").innerHTML = hrs.toString().padStart(2, "0");
          document.getElementById("am-pm").innerHTML = "";

        }
  }
setInterval(() => {
  sec++;
  if (sec >= 60) {
    sec = 0;
    minu++;
    if (minu >= 60) {
      minu = 0;
      hrs++;
    }
    if(hrs > 12 && value == 2){
        hrs=1;
        toggle = !toggle;
    }
    if(hrs > 24 && value == 1){
        hrs=0;
        toggle = !toggle;
    }
  }
  
  
  document.getElementById("hrs").innerHTML = hrs.toString().padStart(2, "0");
  document.getElementById("sec").innerHTML = sec.toString().padStart(2, "0");
  document.getElementById("min").innerHTML = minu.toString().padStart(2, "0");
}, 1000);
