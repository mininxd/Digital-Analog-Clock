export function detikFun() {
var detik = new Date().getSeconds();
            
            // 60*6 = 360;
var detikan = detik * 6;

if(detikan == 0) {
  detikEl.style.transition = "0s";
} else {
  detikEl.style.transition = "0.3s ease";
}


if(detik.toString().length == 1) {
detik1.innerHTML= "0" + detik;
detik2.innerHTML= "0" + detik;
detik3.innerHTML= "0" + detik;
detik4.innerHTML= "0" + detik;
detik5.innerHTML= "0" + detik;
} else {
detik1.innerHTML= detik;
detik2.innerHTML = detik;
detik3.innerHTML = detik;
detik4.innerHTML = detik;
detik5.innerHTML = detik;
}

            // -90deg untuk rotate berdiri ke detik 0
  detikan += eval(-90);
  detikEl.style.transform = "rotate(" + detikan + "deg)";
}