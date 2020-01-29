 function mapValue(value, initialRangeStart, initialRangeEnd, finalRangeStart, finalRangeEnd) {
     if (initialRangeEnd == initialRangeStart)
         console.error("Can't devide by zero");
     else {
         return (value - initialRangeStart) * (finalRangeEnd - finalRangeStart) / (initialRangeEnd - initialRangeStart) + finalRangeStart

     }
 }

 function getRandomFloat(min, max) {
     return Math.random() * (max - min) + min;
 }

 function getRandomInt(min, max) {
     return Math.floor(Math.random() * (max - min + 1) + min);
 }

 function getMs(fps) {
     return 1000 / fps
 }

 function getMousePosElem(click) {
     return new Vector(click.clientX - click.target.getBoundingClientRect().x, click.clientY - click.target.getBoundingClientRect().y)
 }

 function randomHexColor() {
     return '#' + (function co(lor) {
         return (lor += [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'a', 'b', 'c', 'd', 'e', 'f'][Math.floor(Math.random() * 16)]) &&
             (lor.length == 6) ? lor : co(lor);
     })('');
 }

 function componentToHex(c) {
     var hex = c.toString(16);
     return hex.length == 1 ? "0" + hex : hex;
 }

 function rgbToHex(r, g, b) {
     return "#" + componentToHex(r) + componentToHex(g) + componentToHex(b);
 }

 function hexToRgb(hex) {
     var bigint = parseInt(hex, 16);
     var r = (bigint >> 16) & 255;
     var g = (bigint >> 8) & 255;
     var b = bigint & 255;
     return new Color(r, g, b)
 }

 function toDegrees(angle) {
     return angle * (180 / Math.PI);
 }

 function toRadians(angle) {
     return angle * (Math.PI / 180);
 }

 function hsvToRgb(h, s, v) {
     var r, g, b;
     var i;
     var f, p, q, t;
     h = Math.max(0, Math.min(360, h));
     s = Math.max(0, Math.min(100, s));
     v = Math.max(0, Math.min(100, v));
     s /= 100;
     v /= 100;
     if (s == 0) {
         r = g = b = v;
         return [
             Math.round(r * 255),
             Math.round(g * 255),
             Math.round(b * 255)
         ];
     }
     h /= 60;
     i = Math.floor(h);
     f = h - i;
     p = v * (1 - s);
     q = v * (1 - s * f);
     t = v * (1 - s * (1 - f));
     switch (i) {
         case 0:
             r = v;
             g = t;
             b = p;
             break;

         case 1:
             r = q;
             g = v;
             b = p;
             break;

         case 2:
             r = p;
             g = v;
             b = t;
             break;

         case 3:
             r = p;
             g = q;
             b = v;
             break;

         case 4:
             r = t;
             g = p;
             b = v;
             break;

         default:
             r = v;
             g = p;
             b = q;
     }
     return new Color(
         Math.round(r * 255),
         Math.round(g * 255),
         Math.round(b * 255))

 }

 function restrain(val, min, max) {
     if (val > max) {
         return max
     } else {
         if (val < min)
             return min
     }
     return val
 }