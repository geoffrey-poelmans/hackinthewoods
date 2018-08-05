// OBJECT
var boeufBio = {image:"img-assiette/icons8-beef-64.png", protein:31, legume:0, fibre:0, Co2:17, energie:52, eau:39};
var boeufIndu = {image:"img-assiette/icons8-beef-64.png", protein: 26, legume:0, fibre:0, Co2:24, energie:31, eau:54};
var pouletBio = {image:"img-assiette/chicken.png", protein:2, legume:0, fibre:0, Co2:2, energie:14, eau:8};
var pouletIndu = {image:"img-assiette/chicken.png", protein:23, legume:0, fibre:0, Co2:6, energie:1, eau:12};
var saladeBio = {image:"img-assiette/icons8-lettuce-48.png", protein:0, legume:23, fibre:31, Co2:0, energie:1, eau:1};
var saladeIndu = {image:"img-assiette/icons8-lettuce-48.png", protein:0, legume:12, fibre:12, Co2:8, energie:20, eau:2};
var tomateBio = {image:"img-assiette/icons8-tomato-48.png", protein:12, legume:9, fibre:2, Co2:1, energie:3, eau:1};
var tomateIndu = {image:"img-assiette/icons8-tomato-48.png", protein:31, legume:7, fibre:12, Co2:8, energie:12, eau:3};
var patateBio = {image:"img-assiette/icons8-potato-40.png", protein:0, legume:0, fibre:13, Co2:8, energie:2, eau:6};
var patateIndu = {image:"img-assiette/icons8-potato-40.png", protein:0, legume:0, fibre:5, Co2:18, energie:11, eau:12};
var legume = {image:"legume", protein:2, legume:13, fibre:0, Co2:8, energie:2, eau:5};
var rizBio = {image:"img-assiette/icons8-rice-bowl-40.png", protein:14, legume:0, fibre:12, Co2:5, energie:1, eau:12};
var rizIndu = {image:"img-assiette/icons8-rice-bowl-40.png", protein:11, legume:0, fibre:11, Co2:8, energie:1, eau:15};
var burger = {imageBurger:"img-assiette/icons8-hamburger-80.png",imageSalade:"img-assiette/icons8-lettuce-48.png",imagefrites:"img-assiette/icons8-french-fries-80.png", protein:12, legume:2, fibre:1, Co2:2, energie:24, eau:12};

// VARIABLES

// var multiplicateur = $("#multiplicateur").text();
var barLegume = $("#progressbarLegume").width() / $("#progressbarLegume").parent().width()*100;
var barViande = $("#progressbarViande").width() / $("#progressbarViande").parent().width()*100;
var barFeculent = $("#progressbarFeculent").width() / $("#progressbarFeculent").parent().width()*100;
var moyenneSante = "0";
var barEnergie = $("#progressbar2Energie").width() / $("#progressbar2Energie").parent().width()*100;
var barCo2 = $("#progressbar2Co2").width() / $("#progressbar2Co2").parent().width()*100;
var barEau = $("#progressbar2Eau").width() / $("#progressbar2Eau").parent().width()*100;
var scoreEco = 0;
var scoreTotal = 0;


//FILTRE

var echelleDeGris = 100;
$("img").css("filter", "grayscale("+ echelleDeGris +"%)");

//ONCLICK

$("#boeufBio").click(function() {
  if ($('#position-3 img').attr("src") == '') {
    barLegume = $("#progressbarLegume").width() / $("#progressbarLegume").parent().width()*100;
    barViande = $("#progressbarViande").width() / $("#progressbarViande").parent().width()*100;
    barFeculent = $("#progressbarFeculent").width() / $("#progressbarFeculent").parent().width()*100;

    if ($('#position-1 img').attr("src") == '') {
        $("#position-1 img").attr("src",boeufBio.image);
      } else if ($('#position-2 img').attr("src") == '') {
        $("#position-2 img").attr("src",boeufBio.image);
      } else if ($('#position-3 img').attr("src") == '') {
        $("#position-3 img").attr("src",boeufBio.image);
      }

    barLegume += boeufBio.legume;
    $("#progressbarLegume").css("width", barLegume + "%" );

    barViande += boeufBio.protein;
    $("#progressbarViande").css("width", barViande + "%" );

    barFeculent += boeufBio.fibre;
    $("#progressbarFeculent").css("width", barFeculent + "%" );

    moyenneSante = (barViande + barLegume + barFeculent)/3;
    $("#progressbar2Sante").css("width",moyenneSante + "%");

    barEnergie += boeufBio.energie;
    $("#progressbar2Energie").css("width",barEnergie + "%");

    barCo2 += boeufBio.Co2;
    $("#progressbar2Co2").css("width",barCo2 + "%");

    barEau += boeufBio.eau;
    $("#progressbar2Eau").css("width",barEau + "%");

    scoreEco = (barEnergie + barCo2 + barEau)/3;
    // AFFICHEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEE SCOOOOOOOOOOOOOOOOOOOOOOOOOOOOOORRRE

    scoreTotal = (scoreEco + moyenneSante)/2;
    // AFFICHEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEE SCOOOOOOOOOOOOOOOOOOOOOOOOOOOOOORRRE
  }
});

$("#boeufIndu").click(function() {
  if ($('#position-3 img').attr("src") == '') {
    barLegume = $("#progressbarLegume").width() / $("#progressbarLegume").parent().width()*100;
    barViande = $("#progressbarViande").width() / $("#progressbarViande").parent().width()*100;
    barFeculent = $("#progressbarFeculent").width() / $("#progressbarFeculent").parent().width()*100;

    if ($('#position-1 img').attr("src") == '') {
        $("#position-1 img").attr("src",boeufIndu.image);
      } else if ($('#position-2 img').attr("src") == '') {
        $("#position-2 img").attr("src",boeufIndu.image);
      } else if ($('#position-3 img').attr("src") == '') {
        $("#position-3 img").attr("src",boeufIndu.image);
      }

    barLegume += boeufIndu.legume;
    $("#progressbarLegume").css("width", barLegume + "%" );

    barViande += boeufIndu.protein;
    $("#progressbarViande").css("width", barViande + "%" );

    barFeculent += boeufIndu.fibre;
    $("#progressbarFeculent").css("width", barFeculent + "%" );

    moyenneSante = (barViande + barLegume + barFeculent)/3;
    $("#progressbar2Sante").css("width",moyenneSante + "%");

    barEnergie += boeufIndu.energie;
    $("#progressbar2Energie").css("width",barEnergie + "%");

    barCo2 += boeufIndu.Co2;
    $("#progressbar2Co2").css("width",barCo2 + "%");

    barEau += boeufIndu.eau;
    $("#progressbar2Eau").css("width",barEau + "%");

    scoreEco = (barEnergie + barCo2 + barEau)/3;
    // AFFICHEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEE SCOOOOOOOOOOOOOOOOOOOOOOOOOOOOOORRRE

    scoreTotal = (scoreEco + moyenneSante)/2;
    // AFFICHEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEE SCOOOOOOOOOOOOOOOOOOOOOOOOOOOOOORRRE
  }
});

$("#pouletBio").click(function() {
  if ($('#position-3 img').attr("src") == '') {
    barLegume = $("#progressbarLegume").width() / $("#progressbarLegume").parent().width()*100;
    barViande = $("#progressbarViande").width() / $("#progressbarViande").parent().width()*100;
    barFeculent = $("#progressbarFeculent").width() / $("#progressbarFeculent").parent().width()*100;

    if ($('#position-1 img').attr("src") == '') {
        $("#position-1 img").attr("src",pouletBio.image);
      } else if ($('#position-2 img').attr("src") == '') {
        $("#position-2 img").attr("src",pouletBio.image);
      } else if ($('#position-3 img').attr("src") == '') {
        $("#position-3 img").attr("src",pouletBio.image);
      }

    barLegume += pouletBio.legume;
    $("#progressbarLegume").css("width", barLegume + "%" );

    barViande += pouletBio.protein;
    $("#progressbarViande").css("width", barViande + "%" );

    barFeculent += pouletBio.fibre;
    $("#progressbarFeculent").css("width", barFeculent + "%" );

    moyenneSante = (barViande + barLegume + barFeculent)/3;
    $("#progressbar2Sante").css("width",moyenneSante + "%");

    barEnergie += pouletBio.energie;
    $("#progressbar2Energie").css("width",barEnergie + "%");

    barCo2 += pouletBio.Co2;
    $("#progressbar2Co2").css("width",barCo2 + "%");

    barEau += pouletBio.eau;
    $("#progressbar2Eau").css("width",barEau + "%");

    scoreEco = (barEnergie + barCo2 + barEau)/3;
    // AFFICHEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEE SCOOOOOOOOOOOOOOOOOOOOOOOOOOOOOORRRE

    scoreTotal = (scoreEco + moyenneSante)/2;
    // AFFICHEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEE SCOOOOOOOOOOOOOOOOOOOOOOOOOOOOOORRRE
  }
});

$("#pouletIndu").click(function() {
  if ($('#position-3 img').attr("src") == '') {
    barLegume = $("#progressbarLegume").width() / $("#progressbarLegume").parent().width()*100;
    barViande = $("#progressbarViande").width() / $("#progressbarViande").parent().width()*100;
    barFeculent = $("#progressbarFeculent").width() / $("#progressbarFeculent").parent().width()*100;

    if ($('#position-1 img').attr("src") == '') {
        $("#position-1 img").attr("src",pouletIndu.image);
      } else if ($('#position-2 img').attr("src") == '') {
        $("#position-2 img").attr("src",pouletIndu.image);
      } else if ($('#position-3 img').attr("src") == '') {
        $("#position-3 img").attr("src",pouletIndu.image);
      }

    barLegume += pouletIndu.legume;
    $("#progressbarLegume").css("width", barLegume + "%" );

    barViande += pouletIndu.protein;
    $("#progressbarViande").css("width", barViande + "%" );

    barFeculent += pouletIndu.fibre;
    $("#progressbarFeculent").css("width", barFeculent + "%" );

    moyenneSante = (barViande + barLegume + barFeculent)/3;
    $("#progressbar2Sante").css("width",moyenneSante + "%");

    barEnergie += pouletIndu.energie;
    $("#progressbar2Energie").css("width",barEnergie + "%");

    barCo2 += pouletIndu.Co2;
    $("#progressbar2Co2").css("width",barCo2 + "%");

    barEau += pouletIndu.eau;
    $("#progressbar2Eau").css("width",barEau + "%");

    scoreEco = (barEnergie + barCo2 + barEau)/3;
    // AFFICHEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEE SCOOOOOOOOOOOOOOOOOOOOOOOOOOOOOORRRE

    scoreTotal = (scoreEco + moyenneSante)/2;
    // AFFICHEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEE SCOOOOOOOOOOOOOOOOOOOOOOOOOOOOOORRRE
  }
});
  $("#saladeBio").click(function() {
    if ($('#position-3 img').attr("src") == '') {
      barLegume = $("#progressbarLegume").width() / $("#progressbarLegume").parent().width()*100;
      barViande = $("#progressbarViande").width() / $("#progressbarViande").parent().width()*100;
      barFeculent = $("#progressbarFeculent").width() / $("#progressbarFeculent").parent().width()*100;

      if ($('#position-1 img').attr("src") == '') {
          $("#position-1 img").attr("src",saladeBio.image);
        } else if ($('#position-2 img').attr("src") == '') {
          $("#position-2 img").attr("src",saladeBio.image);
        } else if ($('#position-3 img').attr("src") == '') {
          $("#position-3 img").attr("src",saladeBio.image);
        }

      barLegume += saladeBio.legume;
      $("#progressbarLegume").css("width", barLegume + "%" );

      barViande += saladeBio.protein;
      $("#progressbarViande").css("width", barViande + "%" );

      barFeculent += saladeBio.fibre;
      $("#progressbarFeculent").css("width", barFeculent + "%" );

      moyenneSante = (barViande + barLegume + barFeculent)/3;
      $("#progressbar2Sante").css("width",moyenneSante + "%");

      barEnergie += saladeBio.energie;
      $("#progressbar2Energie").css("width",barEnergie + "%");

      barCo2 += saladeBio.Co2;
      $("#progressbar2Co2").css("width",barCo2 + "%");

      barEau += saladeBio.eau;
      $("#progressbar2Eau").css("width",barEau + "%");

      scoreEco = (barEnergie + barCo2 + barEau)/3;
      // AFFICHEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEE SCOOOOOOOOOOOOOOOOOOOOOOOOOOOOOORRRE

      scoreTotal = (scoreEco + moyenneSante)/2;
      // AFFICHEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEE SCOOOOOOOOOOOOOOOOOOOOOOOOOOOOOORRRE
    }
});
$("#saladeIndu").click(function() {
  if ($('#position-3 img').attr("src") == '') {
    barLegume = $("#progressbarLegume").width() / $("#progressbarLegume").parent().width()*100;
    barViande = $("#progressbarViande").width() / $("#progressbarViande").parent().width()*100;
    barFeculent = $("#progressbarFeculent").width() / $("#progressbarFeculent").parent().width()*100;

    if ($('#position-1 img').attr("src") == '') {
        $("#position-1 img").attr("src",saladeIndu.image);
      } else if ($('#position-2 img').attr("src") == '') {
        $("#position-2 img").attr("src",saladeIndu.image);
      } else if ($('#position-3 img').attr("src") == '') {
        $("#position-3 img").attr("src",saladeIndu.image);
      }

    barLegume += saladeIndu.legume;
    $("#progressbarLegume").css("width", barLegume + "%" );

    barViande += saladeIndu.protein;
    $("#progressbarViande").css("width", barViande + "%" );

    barFeculent += saladeIndu.fibre;
    $("#progressbarFeculent").css("width", barFeculent + "%" );

    moyenneSante = (barViande + barLegume + barFeculent)/3;
    $("#progressbar2Sante").css("width",moyenneSante + "%");

    barEnergie += saladeIndu.energie;
    $("#progressbar2Energie").css("width",barEnergie + "%");

    barCo2 += saladeIndu.Co2;
    $("#progressbar2Co2").css("width",barCo2 + "%");

    barEau += saladeIndu.eau;
    $("#progressbar2Eau").css("width",barEau + "%");

    scoreEco = (barEnergie + barCo2 + barEau)/3;
    // AFFICHEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEE SCOOOOOOOOOOOOOOOOOOOOOOOOOOOOOORRRE

    scoreTotal = (scoreEco + moyenneSante)/2;
    // AFFICHEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEE SCOOOOOOOOOOOOOOOOOOOOOOOOOOOOOORRRE
  }
});
$("#tomateBio").click(function() {
  if ($('#position-3 img').attr("src") == '') {
    barLegume = $("#progressbarLegume").width() / $("#progressbarLegume").parent().width()*100;
    barViande = $("#progressbarViande").width() / $("#progressbarViande").parent().width()*100;
    barFeculent = $("#progressbarFeculent").width() / $("#progressbarFeculent").parent().width()*100;

    if ($('#position-1 img').attr("src") == '') {
        $("#position-1 img").attr("src",tomateBio.image);
      } else if ($('#position-2 img').attr("src") == '') {
        $("#position-2 img").attr("src",tomateBio.image);
      } else if ($('#position-3 img').attr("src") == '') {
        $("#position-3 img").attr("src",tomateBio.image);
      }

    barLegume += tomateBio.legume;
    $("#progressbarLegume").css("width", barLegume + "%" );

    barViande += tomateBio.protein;
    $("#progressbarViande").css("width", barViande + "%" );

    barFeculent += tomateBio.fibre;
    $("#progressbarFeculent").css("width", barFeculent + "%" );

    moyenneSante = (barViande + barLegume + barFeculent)/3;
    $("#progressbar2Sante").css("width",moyenneSante + "%");

    barEnergie += tomateBio.energie;
    $("#progressbar2Energie").css("width",barEnergie + "%");

    barCo2 += tomateBio.Co2;
    $("#progressbar2Co2").css("width",barCo2 + "%");

    barEau += tomateBio.eau;
    $("#progressbar2Eau").css("width",barEau + "%");

    scoreEco = (barEnergie + barCo2 + barEau)/3;
    // AFFICHEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEE SCOOOOOOOOOOOOOOOOOOOOOOOOOOOOOORRRE

    scoreTotal = (scoreEco + moyenneSante)/2;
    // AFFICHEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEE SCOOOOOOOOOOOOOOOOOOOOOOOOOOOOOORRRE
  }
});
$("#tomateIndu").click(function() {
  if ($('#position-3 img').attr("src") == '') {
    barLegume = $("#progressbarLegume").width() / $("#progressbarLegume").parent().width()*100;
    barViande = $("#progressbarViande").width() / $("#progressbarViande").parent().width()*100;
    barFeculent = $("#progressbarFeculent").width() / $("#progressbarFeculent").parent().width()*100;

    if ($('#position-1 img').attr("src") == '') {
        $("#position-1 img").attr("src",tomateIndu.image);
      } else if ($('#position-2 img').attr("src") == '') {
        $("#position-2 img").attr("src",tomateIndu.image);
      } else if ($('#position-3 img').attr("src") == '') {
        $("#position-3 img").attr("src",tomateIndu.image);
      }

    barLegume += tomateIndu.legume;
    $("#progressbarLegume").css("width", barLegume + "%" );

    barViande += tomateIndu.protein;
    $("#progressbarViande").css("width", barViande + "%" );

    barFeculent += tomateIndu.fibre;
    $("#progressbarFeculent").css("width", barFeculent + "%" );

    moyenneSante = (barViande + barLegume + barFeculent)/3;
    $("#progressbar2Sante").css("width",moyenneSante + "%");

    barEnergie += tomateIndu.energie;
    $("#progressbar2Energie").css("width",barEnergie + "%");

    barCo2 += tomateIndu.Co2;
    $("#progressbar2Co2").css("width",barCo2 + "%");

    barEau += tomateIndu.eau;
    $("#progressbar2Eau").css("width",barEau + "%");

    scoreEco = (barEnergie + barCo2 + barEau)/3;
    // AFFICHEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEE SCOOOOOOOOOOOOOOOOOOOOOOOOOOOOOORRRE

    scoreTotal = (scoreEco + moyenneSante)/2;
    // AFFICHEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEE SCOOOOOOOOOOOOOOOOOOOOOOOOOOOOOORRRE
  }
});
$("#patateBio").click(function() {
  if ($('#position-3 img').attr("src") == '') {
    barLegume = $("#progressbarLegume").width() / $("#progressbarLegume").parent().width()*100;
    barViande = $("#progressbarViande").width() / $("#progressbarViande").parent().width()*100;
    barFeculent = $("#progressbarFeculent").width() / $("#progressbarFeculent").parent().width()*100;

    if ($('#position-1 img').attr("src") == '') {
        $("#position-1 img").attr("src",patateBio.image);
      } else if ($('#position-2 img').attr("src") == '') {
        $("#position-2 img").attr("src",patateBio.image);
      } else if ($('#position-3 img').attr("src") == '') {
        $("#position-3 img").attr("src",patateBio.image);
      }

    barLegume += patateBio.legume;
    $("#progressbarLegume").css("width", barLegume + "%" );

    barViande += patateBio.protein;
    $("#progressbarViande").css("width", barViande + "%" );

    barFeculent += patateBio.fibre;
    $("#progressbarFeculent").css("width", barFeculent + "%" );

    moyenneSante = (barViande + barLegume + barFeculent)/3;
    $("#progressbar2Sante").css("width",moyenneSante + "%");

    barEnergie += patateBio.energie;
    $("#progressbar2Energie").css("width",barEnergie + "%");

    barCo2 += patateBio.Co2;
    $("#progressbar2Co2").css("width",barCo2 + "%");

    barEau += patateBio.eau;
    $("#progressbar2Eau").css("width",barEau + "%");

    scoreEco = (barEnergie + barCo2 + barEau)/3;
    // AFFICHEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEE SCOOOOOOOOOOOOOOOOOOOOOOOOOOOOOORRRE

    scoreTotal = (scoreEco + moyenneSante)/2;
    // AFFICHEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEE SCOOOOOOOOOOOOOOOOOOOOOOOOOOOOOORRRE
  }
});
$("#legume").click(function() {
  if ($('#position-3 img').attr("src") == '') {
    barLegume = $("#progressbarLegume").width() / $("#progressbarLegume").parent().width()*100;
    barViande = $("#progressbarViande").width() / $("#progressbarViande").parent().width()*100;
    barFeculent = $("#progressbarFeculent").width() / $("#progressbarFeculent").parent().width()*100;

    if ($('#position-1 img').attr("src") == '') {
        $("#position-1 img").attr("src",legume.image);
      } else if ($('#position-2 img').attr("src") == '') {
        $("#position-2 img").attr("src",legume.image);
      } else if ($('#position-3 img').attr("src") == '') {
        $("#position-3 img").attr("src",legume.image);
      }

    barLegume += legume.legume;
    $("#progressbarLegume").css("width", barLegume + "%" );

    barViande += legume.protein;
    $("#progressbarViande").css("width", barViande + "%" );

    barFeculent += legume.fibre;
    $("#progressbarFeculent").css("width", barFeculent + "%" );

    moyenneSante = (barViande + barLegume + barFeculent)/3;
    $("#progressbar2Sante").css("width",moyenneSante + "%");

    barEnergie += legume.energie;
    $("#progressbar2Energie").css("width",barEnergie + "%");

    barCo2 += legume.Co2;
    $("#progressbar2Co2").css("width",barCo2 + "%");

    barEau += legume.eau;
    $("#progressbar2Eau").css("width",barEau + "%");

    scoreEco = (barEnergie + barCo2 + barEau)/3;
    // AFFICHEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEE SCOOOOOOOOOOOOOOOOOOOOOOOOOOOOOORRRE

    scoreTotal = (scoreEco + moyenneSante)/2;
    // AFFICHEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEE SCOOOOOOOOOOOOOOOOOOOOOOOOOOOOOORRRE
  }
});
$("#rizBio").click(function() {
  if ($('#position-3 img').attr("src") == '') {
    barLegume = $("#progressbarLegume").width() / $("#progressbarLegume").parent().width()*100;
    barViande = $("#progressbarViande").width() / $("#progressbarViande").parent().width()*100;
    barFeculent = $("#progressbarFeculent").width() / $("#progressbarFeculent").parent().width()*100;

    if ($('#position-1 img').attr("src") == '') {
        $("#position-1 img").attr("src",rizBio.image);
      } else if ($('#position-2 img').attr("src") == '') {
        $("#position-2 img").attr("src",rizBio.image);
      } else if ($('#position-3 img').attr("src") == '') {
        $("#position-3 img").attr("src",rizBio.image);
      }

    barLegume += rizBio.legume;
    $("#progressbarLegume").css("width", barLegume + "%" );

    barViande += rizBio.protein;
    $("#progressbarViande").css("width", barViande + "%" );

    barFeculent += rizBio.fibre;
    $("#progressbarFeculent").css("width", barFeculent + "%" );

    moyenneSante = (barViande + barLegume + barFeculent)/3;
    $("#progressbar2Sante").css("width",moyenneSante + "%");

    barEnergie += rizBio.energie;
    $("#progressbar2Energie").css("width",barEnergie + "%");

    barCo2 += rizBio.Co2;
    $("#progressbar2Co2").css("width",barCo2 + "%");

    barEau += rizBio.eau;
    $("#progressbar2Eau").css("width",barEau + "%");

    scoreEco = (barEnergie + barCo2 + barEau)/3;
    // AFFICHEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEE SCOOOOOOOOOOOOOOOOOOOOOOOOOOOOOORRRE

    scoreTotal = (scoreEco + moyenneSante)/2;
    // AFFICHEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEE SCOOOOOOOOOOOOOOOOOOOOOOOOOOOOOORRRE
  }
});
$("#rizIndu").click(function() {
  if ($('#position-3 img').attr("src") == '') {
    barLegume = $("#progressbarLegume").width() / $("#progressbarLegume").parent().width()*100;
    barViande = $("#progressbarViande").width() / $("#progressbarViande").parent().width()*100;
    barFeculent = $("#progressbarFeculent").width() / $("#progressbarFeculent").parent().width()*100;

    if ($('#position-1 img').attr("src") == '') {
        $("#position-1 img").attr("src",rizIndu.image);
      } else if ($('#position-2 img').attr("src") == '') {
        $("#position-2 img").attr("src",rizIndu.image);
      } else if ($('#position-3 img').attr("src") == '') {
        $("#position-3 img").attr("src",rizIndu.image);
      }

    barLegume += rizIndu.legume;
    $("#progressbarLegume").css("width", barLegume + "%" );

    barViande += rizIndu.protein;
    $("#progressbarViande").css("width", barViande + "%" );

    barFeculent += rizIndu.fibre;
    $("#progressbarFeculent").css("width", barFeculent + "%" );

    moyenneSante = (barViande + barLegume + barFeculent)/3;
    $("#progressbar2Sante").css("width",moyenneSante + "%");
    console.log(moyenneSante);
    barEnergie += rizIndu.energie;
    $("#progressbar2Energie").css("width",barEnergie + "%");

    barCo2 += rizIndu.Co2;
    $("#progressbar2Co2").css("width",barCo2 + "%");

    barEau += rizIndu.eau;
    $("#progressbar2Eau").css("width",barEau + "%");

    scoreEco = (barEnergie + barCo2 + barEau)/3;
    // AFFICHEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEE SCOOOOOOOOOOOOOOOOOOOOOOOOOOOOOORRRE

    console.log(scoreEco);
    scoreTotal = (scoreEco + moyenneSante)/2;
    console.log(scoreTotal);
    // AFFICHEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEE SCOOOOOOOOOOOOOOOOOOOOOOOOOOOOOORRRE
  }
});

$("#burger").click(function() {
  if ($('#position-1 img').attr("src") == '') {
    barLegume = $("#progressbarLegume").width() / $("#progressbarLegume").parent().width()*100;
    barViande = $("#progressbarViande").width() / $("#progressbarViande").parent().width()*100;
    barFeculent = $("#progressbarFeculent").width() / $("#progressbarFeculent").parent().width()*100;

    $("#position-1 img").attr("src",burger.imageBurger);
    $("#position-2 img").attr("src",burger.imagefrites);
    $("#position-3 img").attr("src",burger.imageSalade);

    barLegume += burger.legume;
    $("#progressbarLegume").css("width", barLegume + "%" );

    barViande += burger.protein;
    $("#progressbarViande").css("width", barViande + "%" );

    barFeculent += burger.fibre;
    $("#progressbarFeculent").css("width", barFeculent + "%" );

    moyenneSante = (barViande + barLegume + barFeculent)/3;
    $("#progressbar2Sante").css("width",moyenneSante + "%");

    barEnergie += burger.energie;
    $("#progressbar2Energie").css("width",barEnergie + "%");

    barCo2 += burger.Co2;
    $("#progressbar2Co2").css("width",barCo2 + "%");

    barEau += burger.eau;
    $("#progressbar2Eau").css("width",barEau + "%");

    scoreEco = (barEnergie + barCo2 + barEau)/3;
    // AFFICHEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEE SCOOOOOOOOOOOOOOOOOOOOOOOOOOOOOORRRE


    scoreTotal = (scoreEco + moyenneSante)/2;
    // AFFICHEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEE SCOOOOOOOOOOOOOOOOOOOOOOOOOOOOOORRRE

  }
});
//FONCTION MOINS

$("#moins").click(function() {
  $("#position-1 img").attr("src","");
  $("#position-2 img").attr("src","");
  $("#position-3 img").attr("src","");
  $("#progressbarLegume").css("width","0%");
  $("#progressbarViande").css("width","0%");
  $("#progressbarFeculent").css("width","0%");
  $("#progressbar2Sante").css("width","0%");
  $("#progressbar2Energie").css("width","0%");
  $("#progressbar2Co2").css("width","0%");
  $("#progressbar2Eau").css("width","0%");
  barLegume = 0;
  barViande = 0;
  barFeculent = 0;
  barEnergie = 0;
  barCo2 = 0;
  barEau = 0;
});

//FONCTION PLUS

// $("#plus").click(function(){
//   plus();
// });
// function plus() {
//   if ($('#position-1').attr("src") == '') {
//     $("#position-1").attr("src","http://www.orseu-concours.com/181-318-thickbox/test-epso-de-raisonnement-numerique-3-fr.jpg");
//   } else if ($('#position-2').attr("src") == '') {
//     $("#position-2").attr("src","https://files.brightside.me/files/news/part_44/445710/preview-19411360-650x341-98-1517840572.jpg");
//   } else if ($('#position-3').attr("src") == '') {
//     $("#position-3").attr("src","http://www.orseu-concours.com/181-318-thickbox/test-epso-de-raisonnement-numerique-3-fr.jpg");
//   }
// }
//

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
