// /**
//  *  écouter les changements sur tous les select du formulaire
//  */
// const pateOption = $('#pate');



// let data = {
//   pizza: 0,
//   pate: 0,
//   supplement: 0,
//   payement: 0,
//   number: 1,
// };

// let oldProgress = 0;
// function updateProgress(){
//   let totalProgress = 0;
//   if(data.pizza){
//     totalProgress += 25;
//   }
//   if(data.pate){
//     totalProgress = totalProgress + 25;
//   }
//   if(data.payement){
//     totalProgress += 25;
//   }
//   if(data.supplement){
//     totalProgress += 25;
//   }

//   progressBar.width(totalProgress + "%");
// };


// pateOption.on('change', pateChanged);

function start(al) {
  var bar = document.getElementById('progressBar');
  var status = document.getElementById('status');
  status.innerHTML = al + "%";
  bar.value = al;
  al++;
  var sim = setTimeout("start(" + al + ")", 1);
  if (al == 100) {
    status.innerHTML = "100%";
    bar.value = 100;
    clearTimeout(sim);
    var finalMessage = document.getElementById('finalMessage');
    finalMessage.innerHTML = "Process is complete";
  }
}
var amountLoaded = 0;
//start(amountLoaded);
