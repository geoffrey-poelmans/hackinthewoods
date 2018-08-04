// OBJECT
var boeufBio = {image:"boeuf", protein:"", legume:"", feculent:""};
var boeufIndu = {image:"boeuf", protein:"", legume:"", feculent:""};
var boeufMiddle = {image:"boeuf", protein:"", legume:"", feculent:""};
var pouletBio = {image:"poulet", protein:"", legume:"", feculent:""};
var pouletMiddle = {image:"poulet", protein:"", legume:"", feculent:""};
var saladeBio = {image:"salade", protein:"", legume:"", feculent:""};
var saladeIndu = {image:"salade", protein:"", legume:"", feculent:""};
var saladeMiddle = {image:"salade", protein:"", legume:"", feculent:""};
var tomateBio = {image:"tomate", protein:"", legume:"", feculent:""};
var tomateMiddle = {image:"tomate", protein:"", legume:"", feculent:""};
var patateBio = {image:"patate", protein:"", legume:"", feculent:""};
var patateIndu = {image:"patate", protein:"", legume:"", feculent:""};
var patateMiddle = {image:"patate", protein:"", legume:"", feculent:""};
var burger = {imageBurger:"burger",imageSalade:"salade",imagefrites:"frites", protein:"", legume:"", feculent:""};
var legume = {image:"legume", protein:"", legume:"", feculent:""};
var rizBio = {image:"riz", protein:"", legume:"", feculent:""};
var rizMiddle = {image:"riz", protein:"", legume:"", feculent:""};

// VARIABLES
var multiplicateur = $("#multiplicateur").text();
var viande = $("#viande").text();
var feculent = $("#feculent").text();
var legume = $("#legume").text();

//FILTRE
var echelleDeGris = 100;
$("img").css("filter", "grayscale("+ echelleDeGris +"%)");


//FONCTIONS PLUS
$("#plus").click(function(){
  plus();
});

function plus() {
  multiplicateur++;
  $(".lol").css("display","block");
  if (multiplicateur < 2) {
    $("#multiplicateur").css("display","none");
  } else {
    $("#multiplicateur").css("display","block");
    $("#multiplicateur").text(multiplicateur);
  }
  
}


//FONCTIONS MOINS
$("#moins").click(function() {
  moins();
});

function moins() {
    if (multiplicateur != 0) {
      multiplicateur--;
    }
  if (multiplicateur < 1) {
    $(".lol").css("display","none");
  }
  if (multiplicateur < 2) {
    $("#multiplicateur").css("display","none");
  } else {
    $("#multiplicateur").css("display","block");
    $("#multiplicateur").text(multiplicateur);
  }
}
