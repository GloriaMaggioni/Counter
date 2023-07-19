
const createDomElement = (tag, classes, content) => {
  const el = document.createElement(tag);
  classes.forEach( e => el.classList.add(e));
  el.innerHTML = content;
  return el;
 };

 //creation counter
var counter = createDomElement('div', ['counter'], ' ');
document.body.appendChild(counter);

//creation elements of the counter

const display = createDomElement ('div', ['display'], 0);
const buttons = createDomElement ('div', ['buttons'], ' ' );
counter.append(display, buttons);

// creation buttons

const createBtns = function() {
  var btn1 = document.createElement('button');
  btn1.className = 'button-decrease-number';
  btn1.innerHTML = '-'

  var btn2 = document.createElement('button')
  btn2.className = 'button-increase-number';
  btn2.innerHTML = '+'


  buttons.append(btn1, btn2);  
}
createBtns();


// event of decrease and increase of the counter 

var counter = 0;


buttons.addEventListener('click', (event) => {
     if(event.target.className === 'button-increase-number'){
       counter++;
       display.innerHTML = counter;
    }else if (event.target.className === 'button-decrease-number') {
       if(counter != 0) {
         counter--;
      }
      display.innerHTML = counter;
    };
 
});