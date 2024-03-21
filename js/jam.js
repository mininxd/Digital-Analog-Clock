export function jamFun() {
  //12 Hours
var jam12 = new Date().getHours() % 12;
  //24 Hours
var jam = new Date().getHours();
          // 12*30 = 360deg;
var jam_an = jam12 * 30;

if(jam_an == 0) {
  jamEl.style.transition = "0s";
} else {
  jamEl.style.transition = "0.3s ease";
}

if(jam.toString().length == 1) {
jam1.innerHTML= "0" + jam;
jam2.innerHTML= "0" + jam;
jam3.innerHTML= "0" + jam;
} else {
jam1.innerHTML= jam;
jam2.innerHTML= jam;
jam3.innerHTML= jam;
}

            // -90deg untuk rotate berdiri ke detik 0
  jam_an += eval(-90);
  jamEl.style.transform = "translateY(-50px) rotate(" + jam_an + "deg)";
}