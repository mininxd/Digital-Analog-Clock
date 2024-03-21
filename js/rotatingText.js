export function rotatingTextFun() {
  
var getDetik = new Date().getSeconds();
var getMenit = new Date().getMinutes();
var getJam = new Date().getHours() % 12;

var rotatingDetik = eval(270 + (getDetik * 6));
var rotatingMenit = eval(270 + (getMenit * 6));
var rotatingJam = eval(270 + (getJam * 30));

  
  $(".detikRot").css('transform','rotate(-' + rotatingDetik + 'deg)');
  $(".menitRot").css('transform','rotate(-' + rotatingMenit + 'deg)');
  $(".jamRot").css('transform','rotate(-' + rotatingJam + 'deg)');
}