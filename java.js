/**
 *  écouter les changements sur tous les select du formulaire
 */
const pateOption = $('#pate');
const pizzaOption = $('#pizza');
const supplementsOption = $('#supplements');
const payementOption = $('#payement');
const numberOption = $('#number');
const progressBar = $('#progressbar');


let data = {
  pizza: 0,
  pate: 0,
  supplement: 0,
  payement: 0,
  number: 1,
};

let oldProgress = 0;
function updateProgress(){
  let totalProgress = 0;
  if(data.pizza){
    totalProgress += 25;
  }
  if(data.pate){
    totalProgress = totalProgress + 25;
  }
  if(data.payement){
    totalProgress += 25;
  }
  if(data.supplement){
    totalProgress += 25;
  }
  
  progressBar.width(totalProgress + "%");
};


pateOption.on('change', pateChanged);
