var element = document.getElementById('toView');
var userElement = document.getElementById('userAnswer');
var fillPar = document.getElementById('fillingParagraphs');
var space = document.getElementById('space-canvas');
var shadow = document.getElementById('green-shadow');
var replaceElement = document.getElementById('replaceText');
var fillingElement = document.getElementById('autoFilling');
var inputText = document.getElementById('messageInput');
var changer = document.getElementsByClassName('text-button');
var valueText = "";
var sendbutton = document.getElementById('sendmessage');
var strings = ['We spend endless hours falling down Internet rabbit holes.', 'Caught in a stream of newsletters, podcasts, and Twitter threads, we surf the web', 'jumping from thought to thought, tab to tab, hoping for an intellectual', 'breakthrough, exhilarated, but exhausted']
var problem = document.getElementById('land-container');
var firstDistance = problem.scrollTop;
var scrolls = document.getElementsByClassName('scroller');
var scrolled = document.getElementById('menuSide');

console.log(firstDistance);

window.onscroll = function () {
  let topScroll = window.scrollY;
  let secondDistance = problem.offsetTop;
  if(topScroll >= secondDistance) {
    console.log(topScroll);
    console.log(secondDistance);
    let newDistance = topScroll - secondDistance;
    scrolled.style.transform = "translateY(" + newDistance + "px)";
  } else {  
    scrolled.style.transform = "translateY(0px)";
  }
}


window.onload = async function () {

  dragElement(document.getElementById("window"));

  element.classList.add('inactive');

  let icons = element.getElementsByClassName('item-icon');
  let messages = element.getElementsByClassName('item-text');
  console.log('this element list; ', messages.length);

  for (let i = 0; i < icons.length; i++) {
    await sleep(100);
    icons[i].classList.add('inactive');
  }

  for (let i = 0; i < messages.length; i++) {
    await sleep(300);
    messages[i].classList.add('inactive');
  }

  for (let i = 0; i < scrolls.length; i++) {
    let toGo = scrolls[i].getAttribute('href');
    scrolls[i].addEventListener('click',function() {
      console.log('this is the index: ',i);
      console.log('aquí me dirijo: ',toGo);
      newGo = toGo.slice(0, 0) + toGo.slice(1, toGo.length);
      let goToEl = document.getElementById(newGo);
      let newDistance = goToEl.offsetTop;
      scrolled.style.transform = "translateY(" + newDistance + "px)";
      console.log(firstDistance, newGo, newDistance, scrolled);
    });
  }

  inputText.onkeyup = async function (event) {
    valueText = event.target.value;

    if (event.key === 'Enter' || event.keyCode === 13) {
      if (valueText != "") {
        console.log('enter key');
        sendMessage();
      } else {
        return false;
      }
    } else {
      if (valueText != "") {
        console.log('building working');
        changer[0].classList.add('enter-text');
        sendbutton.addEventListener('click', sendMessage);
      } else {
        console.log('building change');
        changer[0].classList.remove('enter-text');
      }
    }
  };

  let bgbutton = document.getElementById('bgbutton');
  bgbutton.addEventListener('click', showBg);

  function showBg() {
    let bgoverlay = document.getElementById('bg-colors');
    bgoverlay.classList.add('actived');
    setTimeout(function () {
      let main = document.getElementById('main-content');
      let bod = document.getElementsByTagName('body')[0];
      let htm = document.getElementsByTagName('html')[0];
      main.classList.add('active-main');
      bod.classList.add('landing-active');
      htm.classList.add('landing-active');
    }, 800)
  }


}

window.onresize = function() {
  firstDistance = problem.offsetTop;
  console.log(firstDistance);
}

function anchorsMovement(event,index,going) {
  event.preventDefault();
  console.log('this is the index: ',index);
  console.log('aquí me dirijo: ',going);
}

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

function dragElement(elmnt) {
  var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
  if (document.getElementById(elmnt.id + "header")) {
    // if present, the header is where you move the DIV from:
    document.getElementById(elmnt.id + "header").onmousedown = dragMouseDown;
  } else {
    // otherwise, move the DIV from anywhere inside the DIV:
    elmnt.onmousedown = dragMouseDown;
  }

  function dragMouseDown(e) {
    e = e || window.event;
    e.preventDefault();
    // get the mouse cursor position at startup:
    pos3 = e.clientX;
    pos4 = e.clientY;
    document.onmouseup = closeDragElement;
    // call a function whenever the cursor moves:
    document.onmousemove = elementDrag;
  }

  function elementDrag(e) {
    e = e || window.event;
    e.preventDefault();
    // calculate the new cursor position:
    pos1 = pos3 - e.clientX;
    pos2 = pos4 - e.clientY;
    pos3 = e.clientX;
    pos4 = e.clientY;
    // set the element's new position:
    elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
    elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
  }

  function closeDragElement() {
    // stop moving when mouse button is released:
    document.onmouseup = null;
    document.onmousemove = null;
  }
}

async function sendMessage() {
  console.log('full grounded');
  console.log(event.target.value);
  replaceElement.textContent = inputText.value;
  changer[0].classList.remove('enter-text');
  event.target.disabled = true;
  event.target.value = "";
  userElement.classList.add('inactive');

  let icons = userElement.getElementsByClassName('item-icon');
  let messages = userElement.getElementsByClassName('item-text');
  console.log('this element list; ', messages.length);

  for (let i = 0; i < icons.length; i++) {
    await sleep(100);
    icons[i].classList.add('inactive');
  }

  for (let i = 0; i < messages.length; i++) {
    await sleep(1000);
    messages[i].classList.add('inactive');
  }

  setTimeout(async function () {
    fillingElement.classList.add('inactive');
    let iconfilling = fillingElement.getElementsByClassName('item-icon');
    for (let i = 0; i < iconfilling.length; i++) {
      await sleep(100);
      iconfilling[i].classList.add('inactive');
    }
    for (let i = 0; i < strings.length; i++) {
      let spanning = document.createElement('span');
      spanning.setAttribute('class', 'bg-white bg-opacity-25 rounded-lg p-3 mb-2 item-text');
      spanning.setAttribute('id', 'element' + i);
      let textNode = document.createTextNode(strings[i]);
      spanning.appendChild(textNode);
      fillPar.appendChild(spanning);
      let elementUsed = document.getElementById('element' + i);
      await sleep(1500);
      elementUsed.classList.add('inactive');
    }
  }, 500);

  await sleep(strings.length * 2200);


  shadow.classList.add('open-circle');

  await sleep(800);
  let gif1 = document.getElementById('gif1');
  let gif2 = document.getElementById('gif2');
  let gif3 = document.getElementById('gif3');
  let window = document.getElementById('window');
  space.classList.add('open-space');
  await sleep(500);
  gif1.classList.add('actived');
  await sleep(700);
  gif2.classList.add('actived');
  await sleep(600);
  gif3.classList.add('actived');
  await sleep(800);
  window.classList.add('actived');
}