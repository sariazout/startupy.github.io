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
var strings = ['We spend endless hours falling down Internet rabbit holes.', 'Caught in a stream of newsletters.', 'Podcasts...','And Twitter threads...','We surf the web...', 'Jumping from thought to thought...', 'Tab to tab...', 'Hoping for an intellectual breakthrough', 'Exhilarated, but mentally exhausted...']
var problem = document.getElementById('land-container');
var firstDistance = problem.scrollTop;
var scrolls = document.getElementsByClassName('scroller');
var scrolled = document.getElementById('menuSide');
var sols = document.getElementById('solution');
var idels = document.getElementById('ideals');
var linkeds = document.getElementsByClassName('linksside');
var linksItems = document.getElementsByClassName('sideMenuItem');
var sideMenuAlt = document.getElementById('sideMenuAlt');
var buttonSubmit = document.getElementById('submitButton');
var db = firebase.firestore();
var emailInput = document.getElementById('email');
var submitBox = document.getElementById('submitBox');
var correctMessage = document.getElementById('corr-message');
var directLink = "";

var canvas = document.querySelector('canvas');
var ctx = canvas.getContext('2d');

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

  const queryString = window.location.search;
  console.log(queryString);
  const urlParams = new URLSearchParams(queryString);
  console.log(urlParams)
  directLink = urlParams.get('direct')
  console.log(directLink);

  animate();

  if(directLink === "yes") {
    console.log('hola');
    showBgFast('hola');
  } else {
    
  }

  buttonSubmit.addEventListener('click', storeData);

  dragElement(document.getElementById("window"));

  element.classList.add('inactive');

  if(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)){
    // true for mobile device
    inputText.disabled = true;
    sendMessageMobile();
  }else{
    // false for not mobile device
  }

  let icons = element.getElementsByClassName('item-icon');
  let messages = element.getElementsByClassName('item-text');
  console.log('this element list; ', messages.length);

  for (let i = 0; i < icons.length; i++) {
    // await sleep(100);
    icons[i].classList.add('inactive');
  }

  for (let i = 0; i < messages.length; i++) {
    // await sleep(100);
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
        sendbutton.removeEventListener('click', sendMessage);
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

  emailInput.addEventListener('input', function() {
      let values  = emailInput.value;
      let expr = /^([\w-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([\w-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/;
      if (!expr.test(values)) {
          console.log('not value correct');
          submitBox.classList.remove('box-filled');
          submitBox.classList.add('box-error');
      } else {
        submitBox.classList.remove('box-error');
        submitBox.classList.add('box-filled');
        console.log('this is a correct mail');
      }
  })

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
  console.log(inputText.value);
  replaceElement.textContent = inputText.value;
  changer[0].classList.remove('enter-text');
  sendbutton.removeEventListener('click', sendMessage);
  inputText.disabled = true;
  inputText.value = "";
  inputText.setAttribute('placeholder','');
  userElement.classList.add('inactive');

  let icons = userElement.getElementsByClassName('item-icon');
  let messages = userElement.getElementsByClassName('item-text');
  console.log('this element list; ', messages.length);

  for (let i = 0; i < icons.length; i++) {
    await sleep(100);
    icons[i].classList.add('inactive');
  }

  for (let i = 0; i < messages.length; i++) {
    await sleep(100);
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
      if(i == 0) {
        await sleep(0)
      } else {
        await sleep(1800);
      }
      elementUsed.classList.add('inactive');
      elementUsed.scrollIntoView();
    }
  }, 500);

  await sleep(strings.length * 1900);


  shadow.classList.add('open-circle');

  await sleep(800);
  let gif1 = document.getElementById('gif1');
  let gif2 = document.getElementById('gif2');
  let gif3 = document.getElementById('gif3');
  let gif4 = document.getElementById('gif4');
  let gif5 = document.getElementById('gif5');
  let window = document.getElementById('window');
  space.classList.add('open-space');
  await sleep(10);
  gif1.classList.add('actived');
  await sleep(10);
  gif4.classList.add('actived');
  await sleep(10);
  gif2.classList.add('actived');
  await sleep(10);
  gif3.classList.add('actived');
  await sleep(10);
  gif5.classList.add('actived');
  await sleep(10);
  window.classList.add('actived');
}

function storeData() {
  let dates = new Date();
  let emailuse = document.getElementById("email").value;
  let name = emailuse;
  let idate = dates.getTime();
  if(submitBox.classList.contains('box-filled')) {
    db.collection("emails").doc(name).set({
      id: parseInt(idate),
      email: emailuse
    })
    .then(function () {
        submitBox.classList.remove('box-error');
        submitBox.classList.remove('box-filled');
        submitBox.classList.add('box-disabled');
        emailInput.disabled = true;
        // correctMessage.classList.add('actived');
        document.getElementById('submtConfirm').classList.remove('icon-no-show');
        document.getElementById('submitButton').innerText = "";
    })
    .catch(function (error) {
        console.error("Error writing doc", error);
    });
  } else {
    console.log('no way chull');
    return false;
  }
}

function showBgFast(elm) {
  let bgoverlay = document.getElementById('bg-colors');
  bgoverlay.classList.add('actived-alter');
  setTimeout(function () {
    let main = document.getElementById('main-content');
    let bod = document.getElementsByTagName('body')[0];
    let htm = document.getElementsByTagName('html')[0];
    main.classList.add('active-main');
    bod.classList.add('landing-active');
    htm.classList.add('landing-active');
  }, 800)
}

async function sendMessageMobile() {
  console.log('full grounded');
  console.log(inputText.value);
  replaceElement.textContent = "ok";
  changer[0].classList.remove('enter-text');
  inputText.disabled = true;
  inputText.value = "";
  inputText.setAttribute('placeholder','');
  userElement.classList.add('inactive');

  let icons = userElement.getElementsByClassName('item-icon');
  let messages = userElement.getElementsByClassName('item-text');
  console.log('this element list; ', messages.length);

  for (let i = 0; i < icons.length; i++) {
    await sleep(100);
    icons[i].classList.add('inactive');
  }

  for (let i = 0; i < messages.length; i++) {
    await sleep(100);
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
      if(i == 0) {
        await sleep(0)
      } else {
        await sleep(1800);
      }
      elementUsed.classList.add('inactive');
      elementUsed.scrollIntoView();
    }
  }, 500);

  await sleep(strings.length * 1900);


  shadow.classList.add('open-circle');

  await sleep(800);
  let gif1 = document.getElementById('gif1');
  let gif2 = document.getElementById('gif2');
  let gif3 = document.getElementById('gif3');
  let gif4 = document.getElementsByClassName('img4')[0];
  let window = document.getElementById('window');
  space.classList.add('open-space');
  await sleep(10);
  gif1.classList.add('actived');
  await sleep(10);
  gif4.classList.add('actived');
  await sleep(10);
  gif2.classList.add('actived');
  await sleep(10);
  gif3.classList.add('actived');
  await sleep(10);
  window.classList.add('actived');
}

function Pixel( x, y ) {
  this.x = x;
  this.y = y;
  this.hue = Math.floor( Math.random() * 360 );
  var direction = Math.random() > 0.5 ? -1 : 1;
  this.velocity = ( Math.random() * 4 + 20 ) * 0.05 * direction;
}

Pixel.prototype.update = function() {
  this.hue += this.velocity;
};

Pixel.prototype.render = function( ctx ) {
  var hue = Math.round( this.hue );
  ctx.fillStyle = 'hsl(' + hue + ', 100%, 50% )';
  ctx.fillRect( this.x, this.y, 1, 1 );
}

var pixels = [
  new Pixel( 0, 0 ),
  new Pixel( 1, 0 ),
  new Pixel( 0, 1 ),
  new Pixel( 1, 1 ),
];

function animate() {
  pixels.forEach( function( pixel ) {
    pixel.update();
    pixel.render( ctx );
  });
  requestAnimationFrame( animate );
}
  