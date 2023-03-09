
var counter = 0;

function increaseNumber () {
  counter++;
  document.getElementById('display').innerHTML = counter;

}


function decreaseNumber () {
    if(counter != 0) {
        counter--;
    }
    document.getElementById('display').innerHTML = counter;
  
}

