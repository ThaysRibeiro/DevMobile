var Customizar = document.getElementById('customname');
var random = document.querySelector('.randomize');
var Hist = document.querySelector('.story');

function randomValueFromArray(array){
  return array[Math.floor(Math.random()*array.length)];
}

var Histxt = 'It was 94 fahrenheit outside, so :inserex: went for a walk. When they got to :inserey:, they stared in horror for a few moments, then :inserez:. Bob saw the whole thing, but was not surprised — :inserex: weighs 300 pounds, and it was a hot day.';

var insereX = ['Willy the Goblin','Big Daddy','Father Christmas'];

var insereY = ['the soup kitchen','Disneyland','the White House'];

var insereZ = ['spontaneously combusted','melted into a puddle on the sidewalk','turned into a slug and crawled away'];

random.addEventListener('click', result);

function result() {

  var novaHist = Histxt;

  var xItem = randomValueFromArray(insereX);
  var yItem = randomValueFromArray(insereY);
  var zItem = randomValueFromArray(insereZ);

  novaHist = novaHist.replace(':inserex:',xItem);
  novaHist = novaHist.replace(':inserex:',xItem);
  novaHist = novaHist.replace(':inserey:',yItem);
  novaHist = novaHist.replace(':inserez:',zItem);

  if(Customizar.value !== '') {
    var nome = Customizar.value;
    novaHist = novaHist.replace('Bob',nome);

  }

  if(document.getElementById("uk").checked) {
    var tam = Math.round(21) + ' stone';
    var temperatura =  Math.round(34) + ' centigrade';
    novaHist = novaHist.replace('300 pounds',tam);
    novaHist = novaHist.replace('94 fahrenheit',temperatura);
  }

  Hist.textContent = novaHist;
  Hist.style.visibility = 'visible';
}
