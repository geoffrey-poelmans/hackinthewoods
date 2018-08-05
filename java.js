
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
