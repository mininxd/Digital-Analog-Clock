export function theme1Fun() {
  $('.wrapperJam').css('background-image','url()');
}
export function theme2Fun() {
  $('.wrapperJam').css('background-image','url("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQWNvwSRwFV19Dp-CfEMkiobCAZWeolDgmhoA&usqp=CAU")');
}
export function theme3Fun() {
  $('.wrapperJam').css('background-image','url("https://png.pngtree.com/png-clipart/20220708/ourmid/pngtree-clock-face-no-hands-big-roboto-font-new-png-image_5781616.png")');
}


  var imageUp = document.getElementById("inputFile")
    
imageUp.addEventListener("change", function() {
  changeImage(this);
});

function changeImage(input) {
  var reader;

  if (input.files && input.files[0]) {
    reader = new FileReader();
    reader.onload = function(e) {
      $('.wrapperJam').css('background-image','url('+e.target.result+')');
    }
    reader.readAsDataURL(input.files[0]);
  }
}
