setInterval(() => {
  const time = document.getElementById("timeGTM");
  const currentTime = new Date();
  let sec = currentTime.getSeconds();
  let minu = currentTime.getMinutes();
  let hrs24 = currentTime.getHours();
  let hrs12 = currentTime.getHours();
  if (Number(hrs24) > 12) {
    hrs12 = currentTime.getHours() % 12;
  }
  if (time.value == 0) {
    document.getElementById("hrs").innerHTML = hrs24
      .toString()
      .padStart(2, "0");
    document.getElementById("am-pm").innerHTML = "";
  } else {
    document.getElementById("hrs").innerHTML = hrs12
      .toString()
      .padStart(2, "0");
    if (Number(hrs12) > 11) {
      document.getElementById("am-pm").innerHTML = "P.M.";
    } else {
      document.getElementById("am-pm").innerHTML = "A.M.";
    }
  }
  document.getElementById("sec").innerHTML = sec.toString().padStart(2, "0");
  document.getElementById("min").innerHTML = minu.toString().padStart(2, "0");
}, 1000);
