export function menitFun() {
var menit = new Date().getMinutes();
            // 60*6 = 360deg;
var menitan = menit * 6;
  
if(menitan == 0) {
  menitEl.style.transition = "0s";
} else {
  menitEl.style.transition = "0.3s ease";
}

if(menit.toString().length == 1) {
menit1.innerHTML= "0" + menit;
menit2.innerHTML= "0" + menit;
menit3.innerHTML= "0" + menit;
menit4.innerHTML= "0" + menit;
} else {
menit1.innerHTML= menit;
menit2.innerHTML= menit;
menit3.innerHTML= menit;
menit4.innerHTML= menit;
}

            // -90deg untuk rotate berdiri ke detik 0
  menitan += eval(-90);
  menitEl.style.transform = "translateY(-25px) rotate(" + menitan + "deg)";
}