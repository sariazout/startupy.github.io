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
var sols = document.getElementById('solution');
var idels = document.getElementById('ideals');
var linkeds = document.getElementsByClassName('linksside');
var linksItems = document.getElementsByClassName('sideMenuItem');
var sideMenuAlt = document.getElementById('sideMenuAlt');

console.log(firstDistance);

window.onscroll = function () {
  let topScroll = window.scrollY;
  let secondDistance = problem.offsetTop;
  let thirdDistance = sols.offsetTop;
  if(topScroll >= secondDistance) {
    let newDistance = topScroll - secondDistance;
    scrolled.style.transform = "translateY(" + newDistance + "px)";
    if(topScroll >= thirdDistance) {
      for(let i = 0; i < linkeds.length; i++) {
        var point = linkeds[i].getElementsByTagName('span')[0];
        var linkInside = linkeds[i].getElementsByTagName('a')[0];
        point.classList.remove('bg-white');
        point.classList.add('bg-black');
        linkInside.classList.add('text-opacity-50');
      }
      var usable = document.getElementById('secondLink');
      var point2 = usable.getElementsByTagName('span')[0];
      var linkInside2 = usable.getElementsByTagName('a')[0];
      point2.classList.remove('bg-black');
      linkInside2.classList.remove('text-opacity-50');
      point2.classList.add('bg-white');
    } else {
      for(let i = 0; i < linkeds.length; i++) {
        var point = linkeds[i].getElementsByTagName('span')[0];
        var linkInside = linkeds[i].getElementsByTagName('a')[0];
        point.classList.remove('bg-white');
        point.classList.add('bg-black');
        linkInside.classList.add('text-opacity-50');
      }
      var usable = document.getElementById('firstLink');
      var point2 = usable.getElementsByTagName('span')[0];
      var linkInside2 = usable.getElementsByTagName('a')[0];
      point2.classList.remove('bg-black');
      linkInside2.classList.remove('text-opacity-50');
      point2.classList.add('bg-white');
    }
  } else {  
    scrolled.style.transform = "translateY(0px)";
  }

  let problems = problem.offsetTop;
  let solutions = idels.offsetTop + problems;

  if(topScroll >= solutions) {
    let thisDistance = topScroll - solutions;
    let inf = document.getElementById('infor').offsetTop;
    let abun = document.getElementById('abundance').offsetTop;
    let think = document.getElementById('think').offsetTop;
    let an = document.getElementById('analysis').offsetTop;
    console.log('this is the distances',inf,' ',abun,' ',think,' ',an);
    sideMenuAlt.style.transform = "translateY(" + thisDistance + "px)";
    for(let i = 0; i < linksItems.length; i++) {
      let point = linksItems[i].getElementsByTagName('span')[0];
      let linkInside = linksItems[i].getElementsByTagName('a')[0];
      point.classList.remove('bg-white');
      point.classList.add('bg-black');
      linkInside.classList.add('text-opacity-50');
      if(thisDistance < abun){
        let elmt = document.getElementById('placeinfo');
        let spanelm = elmt.getElementsByTagName('span')[0];
        let linkelm = elmt.getElementsByTagName('a')[0];
        spanelm.classList.add('bg-white');
        spanelm.classList.remove('bg-black');
        linkelm.classList.remove('text-opacity-50');
        console.log('1')
      } else if(thisDistance < think) {
        let elmt = document.getElementById('placeabun');
        let spanelm = elmt.getElementsByTagName('span')[0];
        let linkelm = elmt.getElementsByTagName('a')[0];
        spanelm.classList.add('bg-white');
        spanelm.classList.remove('bg-black');
        linkelm.classList.remove('text-opacity-50');
        console.log('2')
      } else if(thisDistance < an) {
        let elmt = document.getElementById('placethink');
        let spanelm = elmt.getElementsByTagName('span')[0];
        let linkelm = elmt.getElementsByTagName('a')[0];
        spanelm.classList.add('bg-white');
        spanelm.classList.remove('bg-black');
        linkelm.classList.remove('text-opacity-50');
        console.log('3')
      } else if(thisDistance >= an) {
        let elmt = document.getElementById('placean');
        let spanelm = elmt.getElementsByTagName('span')[0];
        let linkelm = elmt.getElementsByTagName('a')[0];
        spanelm.classList.add('bg-white');
        spanelm.classList.remove('bg-black');
        linkelm.classList.remove('text-opacity-50');
        console.log('4')
      }
    }
  } else {
    sideMenuAlt.style.transform = "translateY(0)";
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

  for(let i = 0; i < linkeds.length; i++) {
    linkeds[i].addEventListener('click',function(event) {
      event.preventDefault();
      let targets = event.target;
      let targeteds = targets.getAttribute('href');
      let targeted = targeteds.substring(1);
      scrollables(i,targeted)
    });
  }
  
  for(let i = 0; i < linksItems.length; i++) {
    linksItems[i].addEventListener('click',function(event) {
      event.preventDefault();
      let targets = event.target;
      let targeteds = targets.getAttribute('href');
      let targeted = targeteds.substring(1);
      scrollablesAlt(i,targeted)
    });
  }

}

window.onresize = function() {
  firstDistance = problem.offsetTop;
  console.log(firstDistance);
}

function scrollables(elementIndex,targetedName) {
  // console.log('this elements are:', linkeds[elementIndex]);
  let nextDistance = document.getElementById('land-container').offsetTop;
  let distanceShort = document.getElementById(targetedName).offsetTop;
  let distance = nextDistance + distanceShort;
  console.log("distances are:",nextDistance," ",distanceShort);
  window.scrollTo({
    top: distance,
    behavior: 'smooth'
  });
}

function scrollablesAlt(elementIndex,targetedName) {
  // console.log('this elements are:', linkeds[elementIndex]);
  let nextDistance = document.getElementById('land-container').offsetTop;
  let distanceMedium = document.getElementById('ideals').offsetTop;
  let distanceShort = document.getElementById(targetedName).offsetTop;
  let distance = nextDistance + distanceShort + distanceMedium;
  console.log("distances are:",nextDistance," ",distanceShort);
  window.scrollTo({
    top: distance,
    behavior: 'smooth'
  });
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
      await sleep(2000);
      elementUsed.classList.add('inactive');
    }
  }, 500);

  await sleep(strings.length * 3000);


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