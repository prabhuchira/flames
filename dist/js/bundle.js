!function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=0)}([function(e,t,n){e.exports=n(1)},function(e,t){var n,r;console.log("Application Inititated"),function(){var e={name_first:"name1",name_second:"name2",submit:"submit_button",result_string:"result"},t=0;function o(){var o;n=document.getElementById(e.name_first).value,r=document.getElementById(e.name_second).value,name2_orig=r;if(n=n.replace(/\s/g,""),r=r.replace(/\s/g,""),""!==n&&""!==r){var c=function(){document.getElementById(e.name_first).value="",document.getElementById(e.name_second).value=""};for(l=0;l<n.length;l++)for(i=0;i<r.length;i++)n.charAt(l)==r.charAt(i)&&(n=n.replace(n.charAt(l),""),r=r.replace(r.charAt(i),""),i=0,l=0,0);t=n.length+r.length;for(var a="flames",i=0,u=0;u<5;u++){for(var l=0;l<t;l++)null==a[i]&&(i=0),i++;i--,a=a.replace(a[i],"")}switch(a){case"f":o=" are Just Friends","rgb(61, 62, 143)";break;case"l":o=" are Lovers","red";break;case"a":o=" have nothing but Attraction","rgb(202, 77, 175)";break;case"m":o=" are going to get Married soon","grey";break;case"e":o=" are Enemies","grey";break;case"s":o=" have nothing except she is your Sister","grey"}document.getElementById(e.result_string).innerHTML='<h3 style="color:#915992 ;font-size:24px !important" >You and '.concat(name2_orig,"  ").concat(o,"</h3>"),document.querySelector(".clearFields").addEventListener("click",c),document.querySelector(".clearFields2").addEventListener("click",c),document.getElementById("submit_button").click()}}return{clickEvent:function(){document.getElementById("submit_button").addEventListener("click",o),document.addEventListener("keypress",function(e){13!=e.keyCode&&13!=e.which||o()})}}}().clickEvent(),$(document).keypress(function(e){!$("#myModal").hasClass("in")||13!=e.keycode&&13!=e.which||alert("Enter is pressed")})}]);