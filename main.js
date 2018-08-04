// VARIABLES
// var multiplicateur = $("#multiplicateur").text();
var position1 = $("#position1").text();
var position2 = $("#position2").text();
var position3 = $("#position3").text();

// var barLegume = ajusteBar($("#barLegume").width());
// var barViande = ajusteBar($("#barViande").width());
// var barFeculent = ajusteBar($("#barFeculent").width());
//
// $("lol1").append(barLegume);
// $("lol2").text(barViande);
// $("lol3").text(barFeculent);
//
// console.log(barLegume);
// console.log(barViande);
// console.log(barFeculent);

//FILTRE
var echelleDeGris = 100;
$("img").css("filter", "grayscale("+ echelleDeGris +"%)");

//FONCTION PLUS
$("#plus").click(function(){
  plus();
});
function plus() {
  if ($('#position-1').attr("src") == '') {
    $("#position-1").attr("src","http://www.orseu-concours.com/181-318-thickbox/test-epso-de-raisonnement-numerique-3-fr.jpg");
  } else if ($('#position-2').attr("src") == '') {
    $("#position-2").attr("src","https://files.brightside.me/files/news/part_44/445710/preview-19411360-650x341-98-1517840572.jpg");
  } else if ($('#position-3').attr("src") == '') {
    $("#position-3").attr("src","http://www.orseu-concours.com/181-318-thickbox/test-epso-de-raisonnement-numerique-3-fr.jpg");
  }
}

function moins() {
  if ($('#position-3').attr("src") != '') {
    $("#position-3").attr("src","");
  } else if ($('#position-2').attr("src") != '') {
    $("#position-2").attr("src","");
  } else if ($('#position-1').attr("src") != '') {
    $("#position-1").attr("src","");
  }
}




//TEST


// //FONCTIONS PLUS
// $("#plus").click(function(){
//   plus();
// });
//
// function plus() {
//   multiplicateur++;
//   $(".position-assiette").css("display","inline");
//   if (multiplicateur < 2) {
//     $("#multiplicateur").css("display","none");
//   } else {
//     $("#multiplicateur").css("display","block");
//     $("#multiplicateur").text(multiplicateur);
//   }
// }
//
//
// //FONCTIONS MOINS
// $("#moins").click(function() {
//   moins();
// });
//
// function moins() {
//     if (multiplicateur != 0) {
//       multiplicateur--;
//     }
//   if (multiplicateur < 1) {
//     $(".lol").css("display","none");
//   }
//   if (multiplicateur < 2) {
//     $("#multiplicateur").css("display","none");
//   } else {
//     $("#multiplicateur").css("display","block");
//     $("#multiplicateur").text(multiplicateur);
//   }
// }
