var element = document.getElementById("toView");
var userElement = document.getElementById("userAnswer");
var fillPar = document.getElementById("fillingParagraphs");
var space = document.getElementById("space-canvas");
var shadow = document.getElementById("green-shadow");
var replaceElement = document.getElementById("replaceText");
var fillingElement = document.getElementById("autoFilling");
var inputText = document.getElementById("messageInput");
var changer = document.getElementsByClassName("text-button");
var valueText = "";
var sendbutton = document.getElementById("sendmessage");
let sendTweet = document.getElementById("sendTwit");
var strings = [
  "We spend endless hours falling down Internet rabbit holes.",
  "Caught in a stream of newsletters.",
  "Podcasts...",
  "And Twitter threads...",
  "We surf the web...",
  "Jumping from thought to thought...",
  "Tab to tab...",
  "Hoping for an intellectual breakthrough.",
  "Exhilarated, but mentally exhausted...",
];
var problem = document.getElementById("land-container");
var firstDistance = problem.scrollTop;
var scrolls = document.getElementsByClassName("scroller");
var scrolled = document.getElementById("menuSide");
var sols = document.getElementById("solution");
var idels = document.getElementById("ideals");
var linkeds = document.getElementsByClassName("linksside");
var linksItems = document.getElementsByClassName("sideMenuItem");
var sideMenuAlt = document.getElementById("sideMenuAlt");
var buttonSubmit = document.getElementById("submitButton");
var emailInput = document.getElementById("email");
var submitBox = document.getElementById("submitBox");
var correctMessage = document.getElementById("corr-message");
var directLink = "";

var canvas = document.querySelector("canvas");
var ctx = canvas.getContext("2d");

// var anchorBottom = document.getElementById("link-bottom");

var allowSubmit = false;

console.log(firstDistance);

window.onscroll = function () {
  let topScroll = window.scrollY;
  let secondDistance = problem.offsetTop;
  let thirdDistance = sols.offsetTop;
  if (topScroll >= secondDistance) {
    let newDistance = topScroll - secondDistance;
    scrolled.style.transform = "translateY(" + newDistance + "px)";
    if (topScroll >= thirdDistance) {
      for (let i = 0; i < linkeds.length; i++) {
        var point = linkeds[i].getElementsByTagName("span")[0];
        var linkInside = linkeds[i].getElementsByTagName("a")[0];
        point.classList.remove("bg-white");
        point.classList.add("bg-black");
        linkInside.classList.add("text-opacity-50");
      }
      var usable = document.getElementById("secondLink");
      var point2 = usable.getElementsByTagName("span")[0];
      var linkInside2 = usable.getElementsByTagName("a")[0];
      point2.classList.remove("bg-black");
      linkInside2.classList.remove("text-opacity-50");
      point2.classList.add("bg-white");
    } else {
      for (let i = 0; i < linkeds.length; i++) {
        var point = linkeds[i].getElementsByTagName("span")[0];
        var linkInside = linkeds[i].getElementsByTagName("a")[0];
        point.classList.remove("bg-white");
        point.classList.add("bg-black");
        linkInside.classList.add("text-opacity-50");
      }
      var usable = document.getElementById("firstLink");
      var point2 = usable.getElementsByTagName("span")[0];
      var linkInside2 = usable.getElementsByTagName("a")[0];
      point2.classList.remove("bg-black");
      linkInside2.classList.remove("text-opacity-50");
      point2.classList.add("bg-white");
    }
  } else {
    scrolled.style.transform = "translateY(0px)";
  }

  let problems = problem.offsetTop;
  let solutions = idels.offsetTop + problems;

  if (topScroll >= solutions) {
    let thisDistance = topScroll - solutions;
    let inf = document.getElementById("infor").offsetTop;
    let abun = document.getElementById("abundance").offsetTop;
    let think = document.getElementById("think").offsetTop;
    let an = document.getElementById("analysis").offsetTop;
    console.log("this is the distances", inf, " ", abun, " ", think, " ", an);
    sideMenuAlt.style.transform = "translateY(" + thisDistance + "px)";
    for (let i = 0; i < linksItems.length; i++) {
      let point = linksItems[i].getElementsByTagName("span")[0];
      let linkInside = linksItems[i].getElementsByTagName("a")[0];
      point.classList.remove("bg-white");
      point.classList.add("bg-black");
      linkInside.classList.add("text-opacity-50");
      if (thisDistance < abun) {
        let elmt = document.getElementById("placeinfo");
        let spanelm = elmt.getElementsByTagName("span")[0];
        let linkelm = elmt.getElementsByTagName("a")[0];
        spanelm.classList.add("bg-white");
        spanelm.classList.remove("bg-black");
        linkelm.classList.remove("text-opacity-50");
        console.log("1");
      } else if (thisDistance < think) {
        let elmt = document.getElementById("placeabun");
        let spanelm = elmt.getElementsByTagName("span")[0];
        let linkelm = elmt.getElementsByTagName("a")[0];
        spanelm.classList.add("bg-white");
        spanelm.classList.remove("bg-black");
        linkelm.classList.remove("text-opacity-50");
        console.log("2");
      } else if (thisDistance < an) {
        let elmt = document.getElementById("placethink");
        let spanelm = elmt.getElementsByTagName("span")[0];
        let linkelm = elmt.getElementsByTagName("a")[0];
        spanelm.classList.add("bg-white");
        spanelm.classList.remove("bg-black");
        linkelm.classList.remove("text-opacity-50");
        console.log("3");
      } else if (thisDistance >= an) {
        let elmt = document.getElementById("placean");
        let spanelm = elmt.getElementsByTagName("span")[0];
        let linkelm = elmt.getElementsByTagName("a")[0];
        spanelm.classList.add("bg-white");
        spanelm.classList.remove("bg-black");
        linkelm.classList.remove("text-opacity-50");
        console.log("4");
      }
    }
  } else {
    sideMenuAlt.style.transform = "translateY(0)";
  }
};

window.onload = async function () {
  var breaker = document.getElementById("skipmessage");
  breaker.addEventListener("click", breaking);

  var breaker2 = document.getElementById("skipmessage_mobile");
  breaker2.addEventListener("click", breaking);

  sendTweet.addEventListener("click", sendingTweet);

  const queryString = window.location.search;
  console.log(queryString);
  const urlParams = new URLSearchParams(queryString);
  console.log(urlParams);
  directLink = urlParams.get("direct");
  console.log(directLink);

  animate();
  // getAirtable();

  if (directLink === "yes") {
    console.log("hola");
    showBgFast("hola");
  } else {
  }

  buttonSubmit.addEventListener("click", getAirtable);

  emailInput.addEventListener("keyup", function (e) {
    console.log("this is the key: ", e.key);
    if (e.key === "Enter" && allowSubmit) {
      console.log("I'll allow it");
      e.preventDefault();
      buttonSubmit.click();
      // debugger;
    } else {
      console.log("you shall not pass");
    }
  });

  // anchorBottom.addEventListener("click", anchorBottomClick);

  dragElement(document.getElementById("window"));

  element.classList.add("inactive");

  if (
    /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
      navigator.userAgent
    )
  ) {
    // true for mobile device
    inputText.disabled = true;
    sendMessageMobile();
  } else {
    // false for not mobile device
  }

  let icons = element.getElementsByClassName("item-icon");
  let messages = element.getElementsByClassName("item-text");
  console.log("this element list; ", messages.length);

  for (let i = 0; i < icons.length; i++) {
    // await sleep(100);
    icons[i].classList.add("inactive");
  }

  for (let i = 0; i < messages.length; i++) {
    // await sleep(100);
    messages[i].classList.add("inactive");
  }

  for (let i = 0; i < scrolls.length; i++) {
    let toGo = scrolls[i].getAttribute("href");
    scrolls[i].addEventListener("click", function () {
      console.log("this is the index: ", i);
      console.log("aquí me dirijo: ", toGo);
      newGo = toGo.slice(0, 0) + toGo.slice(1, toGo.length);
      let goToEl = document.getElementById(newGo);
      let newDistance = goToEl.offsetTop;
      scrolled.style.transform = "translateY(" + newDistance + "px)";
      console.log(firstDistance, newGo, newDistance, scrolled);
    });
  }

  inputText.onkeyup = async function (event) {
    valueText = event.target.value;

    if (event.key === "Enter" || event.keyCode === 13) {
      if (valueText != "") {
        console.log("enter key");
        let elementFake = document.getElementById("fakeclick");
        elementFake.click();
        sendMessage();
      } else {
        return false;
      }
    } else {
      if (valueText != "") {
        console.log("building working");
        changer[0].classList.add("enter-text");
        sendbutton.addEventListener("click", sendMessage);
      } else {
        console.log("building change");
        changer[0].classList.remove("enter-text");
        sendbutton.removeEventListener("click", sendMessage);
      }
    }
  };

  let bgbutton = document.getElementById("bgbutton");
  bgbutton.addEventListener("click", showBg);

  function showBg(event) {
    // handleEventsAnalytics(event, "Show me - Another world is posible", "click");
    let bgoverlay = document.getElementById("bg-colors");
    bgoverlay.classList.add("actived");
    setTimeout(function () {
      let main = document.getElementById("main-content");
      let bod = document.getElementsByTagName("body")[0];
      let htm = document.getElementsByTagName("html")[0];
      main.classList.add("active-main");
      bod.classList.add("landing-active");
      htm.classList.add("landing-active");
    }, 800);
  }

  for (let i = 0; i < linkeds.length; i++) {
    linkeds[i].addEventListener("click", function (event) {
      event.preventDefault();
      let targets = event.target;
      let targeteds = targets.getAttribute("href");
      let targeted = targeteds.substring(1);
      scrollables(i, targeted);
    });
  }

  for (let i = 0; i < linksItems.length; i++) {
    linksItems[i].addEventListener("click", function (event) {
      event.preventDefault();
      let targets = event.target;
      let targeteds = targets.getAttribute("href");
      let targeted = targeteds.substring(1);
      scrollablesAlt(i, targeted);
    });
  }

  emailInput.addEventListener("input", function () {
    let values = emailInput.value;
    let expr = /^([\w-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([\w-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/;
    if (!expr.test(values)) {
      console.log("not value correct");
      submitBox.classList.remove("box-filled");
      submitBox.classList.add("box-error");
      allowSubmit = false;
    } else {
      submitBox.classList.remove("box-error");
      submitBox.classList.add("box-filled");
      console.log("this is a correct mail");
      allowSubmit = true;
    }
  });

  async function getData(url = '') {
    const response = await fetch(url, {
      method: 'GET', // *GET, POST, PUT, DELETE, etc.
      mode: 'cors', // no-cors, *cors, same-origin
      cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
      credentials: 'same-origin', // include, *same-origin, omit
      headers: {
        'Content-Type': 'application/json'
        // 'Content-Type': 'application/x-www-form-urlencoded',
      },
      redirect: 'follow', // manual, *follow, error
      referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
    });
    return response.json(); // parses JSON response into native JavaScript objects
  }
  
  getData('https://themodernbillboard.com/api/grid/startupy?token=this-is-for-you-luis!')
    .then(data => {
      // console.log('this is the data: ',data);
      let container = document.querySelector('#frame-template');
      data.data.forEach((element) => {
        // console.log('the element: ',element);
        let claim = element.claimed;
        let identificator = element.id;
        let url = element.lotUrl;
        let name;
        let insert;
        if(identificator <= 11) {
          name = 'A'+(identificator + 1)
        } else if(identificator <= 23){
          name = 'B'+(identificator - 11)
        } else if(identificator <= 35){
          name = 'C'+(identificator - 23)
        } else {
          name = 'D'+(identificator - 35)
        }
        console.log('is this asked?: ',element.currentAsk);
        if(claim) {
          insert = `<div class="relative col-span-3 sm:col-span-2 md:col-span-2 xl:col-span-1 square">
            <a href="${element.lotUrl}" target="_blank" class="absolute frame-item w-full h-full flex justify-center items-center bg-white border border-2 border-gray-800">
              <img src="${element.contentURI}" class="block w-full h-full object-cover" />
            </a>
          </div>`;
        } else if( !claim && !element.currentAsk ) {
          console.log('element not claimed nor asked');
          insert = `<div class="relative col-span-3 sm:col-span-2 md:col-span-2 xl:col-span-1 square">
            <span class="absolute frame-item w-full h-full flex justify-center items-center bg-white border border-2 border-gray-800">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="#fff" viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path fill="#3b3b3b" d="M19.5 10.875h-1.594v-5.25a3 3 0 00-3-3H9.094a3 3 0 00-3 3v5.25H4.5a.75.75 0 00-.75.75v9c0 .415.335.75.75.75h15a.75.75 0 00.75-.75v-9a.75.75 0 00-.75-.75zm-6.844 5.555v1.242a.188.188 0 01-.187.187h-.938a.188.188 0 01-.187-.187V16.43a1.125 1.125 0 111.312 0zm3.563-5.555H7.78v-5.25c0-.724.589-1.313 1.313-1.313h5.812c.724 0 1.313.589 1.313 1.313v5.25z"></path></svg>
            </span>
          </div>`;
        } else {
          insert = `<div class="relative col-span-3 sm:col-span-2 md:col-span-2 xl:col-span-1 square">
            <a href="https://startupy.themodernbillboard.com/lot/${name}" target="_blank" class="absolute frame-item w-full h-full flex justify-center items-center bg-white border border-2 border-gray-800">${name}</a>
          </div>`;
        }
        container.insertAdjacentHTML('beforeend',insert);
      });
    });
};

window.onresize = function () {
  firstDistance = problem.offsetTop;
  console.log(firstDistance);
};

// function handleEventsAnalytics(event, label, typeEvent) {
//   console.log("sending to google");
//   ga("send", "event", {
//     eventCategory: "Registering Event",
//     eventAction: typeEvent,
//     eventLabel: label,
//   });
// }

function scrollables(elementIndex, targetedName) {
  // console.log('this elements are:', linkeds[elementIndex]);
  let nextDistance = document.getElementById("land-container").offsetTop;
  let distanceShort = document.getElementById(targetedName).offsetTop;
  let distance = nextDistance + distanceShort;
  console.log("distances are:", nextDistance, " ", distanceShort);
  window.scrollTo({
    top: distance,
    behavior: "smooth",
  });
}

function scrollablesAlt(elementIndex, targetedName) {
  // console.log('this elements are:', linkeds[elementIndex]);
  let nextDistance = document.getElementById("land-container").offsetTop;
  let distanceMedium = document.getElementById("ideals").offsetTop;
  let distanceShort = document.getElementById(targetedName).offsetTop;
  let distance = nextDistance + distanceShort + distanceMedium;
  console.log("distances are:", nextDistance, " ", distanceShort);
  window.scrollTo({
    top: distance,
    behavior: "smooth",
  });
}

function anchorsMovement(event, index, going) {
  event.preventDefault();
  console.log("this is the index: ", index);
  console.log("aquí me dirijo: ", going);
}

function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

function dragElement(elmnt) {
  var pos1 = 0,
    pos2 = 0,
    pos3 = 0,
    pos4 = 0;
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
    elmnt.style.top = elmnt.offsetTop - pos2 + "px";
    elmnt.style.left = elmnt.offsetLeft - pos1 + "px";
  }

  function closeDragElement() {
    // stop moving when mouse button is released:
    document.onmouseup = null;
    document.onmousemove = null;
  }
}

document.getElementById("backlink").addEventListener("click", function () {
  document.getElementById("email").value = "";
  document.getElementById("joinit").style.display = "block";
  document.getElementById("joinedit").style.display = "none";
});

async function sendMessage() {
  // handleEventsAnalytics(event, "Message startupy", "enter");
  console.log("full grounded");
  console.log(inputText.value);
  replaceElement.textContent = inputText.value;
  changer[0].classList.remove("enter-text");
  changer[0].style.display = "none";
  document.getElementById("skipmessage").classList.remove("removed");
  sendbutton.removeEventListener("click", sendMessage);
  inputText.disabled = true;
  inputText.value = "";
  inputText.setAttribute("placeholder", "");
  userElement.classList.add("inactive");

  let icons = userElement.getElementsByClassName("item-icon");
  let messages = userElement.getElementsByClassName("item-text");
  console.log("this element list; ", messages.length);

  for (let i = 0; i < icons.length; i++) {
    await sleep(100);
    icons[i].classList.add("inactive");
  }

  for (let i = 0; i < messages.length; i++) {
    await sleep(100);
    messages[i].classList.add("inactive");
  }

  setTimeout(async function () {
    fillingElement.classList.add("inactive");
    let iconfilling = fillingElement.getElementsByClassName("item-icon");
    for (let i = 0; i < iconfilling.length; i++) {
      await sleep(100);
      iconfilling[i].classList.add("inactive");
    }
    for (let i = 0; i < strings.length; i++) {
      let spanning = document.createElement("span");
      spanning.setAttribute(
        "class",
        "bg-white bg-opacity-25 rounded-lg p-3 mb-2 item-text"
      );
      spanning.setAttribute("id", "element" + i);
      let textNode = document.createTextNode(strings[i]);
      spanning.appendChild(textNode);
      fillPar.appendChild(spanning);
      let elementUsed = document.getElementById("element" + i);
      if (i == 0) {
        await sleep(0);
      } else {
        await sleep(1800);
      }
      elementUsed.classList.add("inactive");
      elementUsed.scrollIntoView();
    }
  }, 500);

  await sleep(strings.length * 2100);

  shadow.classList.add("open-circle");

  await sleep(800);
  let gif1 = document.getElementById("gif1");
  let gif2 = document.getElementById("gif2");
  let gif3 = document.getElementById("gif3");
  let gif4 = document.getElementById("gif4");
  let gif5 = document.getElementById("gif5");
  let window = document.getElementById("window");
  space.classList.add("open-space");
  await sleep(10);
  gif1.classList.add("actived");
  await sleep(10);
  gif4.classList.add("actived");
  await sleep(10);
  gif2.classList.add("actived");
  await sleep(10);
  gif3.classList.add("actived");
  await sleep(10);
  gif5.classList.add("actived");
  await sleep(10);
  window.classList.add("actived");
}

// function storeData() {
//   let dates = new Date();
//   let emailuse = document.getElementById("email").value;
//   let name = emailuse;
//   let idate = dates.getTime();
//   if (submitBox.classList.contains("box-filled")) {
//     db.collection("emails")
//       .doc(name)
//       .set({
//         id: parseInt(idate),
//         email: emailuse,
//       })
//       .then(function () {
//         submitBox.classList.remove("box-error");
//         submitBox.classList.remove("box-filled");
//         document.getElementById("submtConfirm");
//         document.getElementById("joinit").style.display = "none";
//         document.getElementById("joinedit").style.display = "block";
//       })
//       .catch(function (error) {
//         console.error("Error writing doc", error);
//       });
//   } else {
//     console.log("no way chull");
//     return false;
//   }
// }

function showBgFast(elm) {
  let bgoverlay = document.getElementById("bg-colors");
  bgoverlay.classList.add("actived-alter");
  setTimeout(function () {
    let main = document.getElementById("main-content");
    let bod = document.getElementsByTagName("body")[0];
    let htm = document.getElementsByTagName("html")[0];
    main.classList.add("active-main");
    bod.classList.add("landing-active");
    htm.classList.add("landing-active");
  }, 300);
}

async function sendMessageMobile() {
  console.log("full grounded");
  console.log(inputText.value);
  replaceElement.textContent = "👀";
  changer[0].classList.remove("enter-text");
  inputText.disabled = true;
  inputText.value = "";
  inputText.setAttribute("placeholder", "");
  userElement.classList.add("inactive");

  let icons = userElement.getElementsByClassName("item-icon");
  let messages = userElement.getElementsByClassName("item-text");
  console.log("this element list; ", messages.length);

  await sleep(400);

  for (let i = 0; i < icons.length; i++) {
    await sleep(600);
    icons[i].classList.add("inactive");
  }

  for (let i = 0; i < messages.length; i++) {
    await sleep(600);
    messages[i].classList.add("inactive");
  }

  setTimeout(async function () {
    fillingElement.classList.add("inactive");
    let iconfilling = fillingElement.getElementsByClassName("item-icon");
    for (let i = 0; i < iconfilling.length; i++) {
      await sleep(500);
      iconfilling[i].classList.add("inactive");
    }
    for (let i = 0; i < strings.length; i++) {
      let spanning = document.createElement("span");
      spanning.setAttribute(
        "class",
        "bg-white bg-opacity-25 rounded-lg p-3 mb-2 item-text"
      );
      spanning.setAttribute("id", "element" + i);
      let textNode = document.createTextNode(strings[i]);
      spanning.appendChild(textNode);
      fillPar.appendChild(spanning);
      let elementUsed = document.getElementById("element" + i);
      if (i == 0) {
        await sleep(0);
      } else {
        await sleep(1800);
      }
      elementUsed.classList.add("inactive");
      elementUsed.scrollIntoView();
    }
  }, 500);

  await sleep(strings.length * 2100);

  shadow.classList.add("open-circle");

  await sleep(800);
  let gif1 = document.getElementById("gif1");
  let gif2 = document.getElementById("gif2");
  let gif3 = document.getElementById("gif3");
  let gif4 = document.getElementsByClassName("img4")[0];
  let window = document.getElementById("window");
  space.classList.add("open-space");
  await sleep(10);
  gif1.classList.add("actived");
  await sleep(10);
  gif4.classList.add("actived");
  await sleep(10);
  gif2.classList.add("actived");
  await sleep(10);
  gif3.classList.add("actived");
  await sleep(10);
  window.classList.add("actived");
}

function Pixel(x, y) {
  this.x = x;
  this.y = y;
  this.hue = Math.floor(Math.random() * 360);
  var direction = Math.random() > 0.5 ? -1 : 1;
  this.velocity = (Math.random() * 4 + 20) * 0.05 * direction;
}

Pixel.prototype.update = function () {
  this.hue += this.velocity;
};

Pixel.prototype.render = function (ctx) {
  var hue = Math.round(this.hue);
  ctx.fillStyle = "hsl(" + hue + ", 100%, 50% )";
  ctx.fillRect(this.x, this.y, 1, 1);
};

var pixels = [
  new Pixel(0, 0),
  new Pixel(1, 0),
  new Pixel(0, 1),
  new Pixel(1, 1),
];

function animate() {
  pixels.forEach(function (pixel) {
    pixel.update();
    pixel.render(ctx);
  });
  requestAnimationFrame(animate);
}

function breaking(event) {
  console.log("this is working eh!");
  // handleEventsAnalytics(event, "Skip animations", "click");
  showBgFast("hola");
}

// function anchorBottomClick(event) {
//   event.preventDefault();
//   let heightWindow = window.innerHeight;
//   window.scrollTo({
//     top: heightWindow,
//     behavior: "smooth",
//   });
// }

function sendingTweet(event) {
  // handleEventsAnalytics(event, "Sharing Tweet from Startupy", "click");
}

function getAirtable(event) {
  console.log("creacion de todo");
  // handleEventsAnalytics(event, "E-mail registration", "click");
  allowSubmit = false;
  buttonSubmit.disabled = true;

  let dates = new Date();
  let emailuse = document.getElementById("email").value;
  let name = emailuse;
  let idat = dates.getTime();
  let idate = idat.toString();
  console.log(idate);

  async function callingFn() {
    try {
      const response = await fetch(
        "https://v1.nocodeapi.com/lvelito/airtable/MwKWTDAnnShliUfU?tableName=Waitlist",
        {
          method: "post",
          body: JSON.stringify([{ Email: name, ID: idate }]),
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      const json = await response.json();
      console.log("Success:", JSON.stringify(json));
      submitBox.classList.remove("box-error");
      submitBox.classList.remove("box-filled");
      // submitBox.classList.add('box-disabled');
      // emailInput.disabled = true;
      // correctMessage.classList.add('actived');
      document.getElementById("submtConfirm");
      // .classList.remove("icon-no-show");
      // document.getElementById("submitButton").innerText = "";
      document.getElementById("joinit").style.display = "none";
      document.getElementById("joinedit").style.display = "block";
      buttonSubmit.disabled = false;
    } catch (error) {
      console.error("Error:", error);
    }
  }

  callingFn();
}

function anchorBottomClick() {
  let heightWindow = document.querySelector('#year-note').offsetTop - 34;
  window.scrollTo({
    top: heightWindow,
    behavior: "smooth",
  });
}
