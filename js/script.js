import {detikFun} from './detik.js';
import {menitFun} from './menit.js';
import {jamFun} from './jam.js';
import {rotatingTextFun} from './rotatingText.js';
import {theme1Fun, theme2Fun, theme3Fun} from './theme.js';

setInterval( function() {
$('.dot').css('opacity','1');
   detikFun();
   menitFun();
   jamFun();
   rotatingTextFun();
}, 100);

icon1.addEventListener('click', function() {
  theme1Fun();
});
icon2.addEventListener('click', function() {
  theme2Fun();
});
icon3.addEventListener('click', function() {
  theme3Fun();
});
