// OBJECT
var boeufBio = {image:"boeuf", protein:31, legume:0, fibre:0, Co2:17, energie:52, eau:39};
var boeufIndu = {image:"boeuf", protein: 26, legume:0, fibre:0, Co2:24, energie:31, eau:54};
var boeufMiddle = {image:"boeuf", protein: 23, legume:0, fibre:0, Co2:22, energie:22, eau:43};
var pouletBio = {image:"poulet", protein:2, legume:0, fibre:0, Co2:2, energie:14, eau:8};
var pouletMiddle = {image:"poulet", protein:23, legume:0, fibre:0, Co2:6, energie:1, eau:12};
var saladeBio = {image:"salade", protein:0, legume:23, fibre:31, Co2:0, energie:1, eau:1};
var saladeIndu = {image:"salade", protein:0, legume:12, fibre:12, Co2:8, energie:20, eau:2};
var saladeMiddle = {image:"salade", protein:1, legume:8, fibre:22, Co2:8, energie:10, eau:1};
var tomateBio = {image:"tomate", protein:12, legume:9, fibre:2, Co2:1, energie:3, eau:1};
var tomateMiddle = {image:"tomate", protein:31, legume:7, fibre:12, Co2:8, energie:12, eau:3};
var patateBio = {image:"patate", protein:0, legume:0, fibre:13, Co2:8, energie:2, eau:6};
var patateIndu = {image:"patate", protein:0, legume:0, fibre:5, Co2:18, energie:11, eau:12};
var patateMiddle = {image:"patate", protein:0, legume:0, fibre:12, Co2:28, energie:17, eau:1};
var burger = {imageBurger:"burger",imageSalade:"salade",imagefrites:"frites", protein:12, legume:2, fibre:1, Co2:2, energie:24, eau:12};
var legume = {image:"legume", protein:2, legume:13, fibre:0, Co2:8, energie:2, eau:5};
var rizBio = {image:"riz", protein:14, legume:0, fibre:12, Co2:5, energie:1, eau:12};
var rizMiddle = {image:"riz", protein:11, legume:0, fibre:11, Co2:8, energie:1, eau:15};

// VARIABLES

// var multiplicateur = $("#multiplicateur").text();
var barLegume = $("#barLegume").width() / $("#barLegume").parent().width()*100;
var barViande = $("#barViande").width() / $("#barLegume").parent().width()*100;
var barFeculent = $("#barFeculent").width() / $("#barLegume").parent().width()*100;

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

$("#moins").click(function() {
  moins();
});
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
