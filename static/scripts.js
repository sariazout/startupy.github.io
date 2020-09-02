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
var strings = ['We spend endless hours falling down Internet rabbit holes.','Caught in a stream of newsletters, podcasts, and Twitter threads, we surf the web','jumping from thought to thought, tab to tab, hoping for an intellectual','breakthrough, exhilarated, but exhausted']

window.onload = async function() {

  element.classList.add('inactive');

  let icons = element.getElementsByClassName('item-icon');
  let messages = element.getElementsByClassName('item-text');
  console.log('this element list; ',messages.length);

  for(let i = 0; i < icons.length; i++) {
      await sleep(100);
      icons[i].classList.add('inactive');
  }

  for(let i = 0; i < messages.length; i++) {
      await sleep(300);
      messages[i].classList.add('inactive');
  }

  inputText.onkeyup = async function(event) {
    valueText = event.target.value;

    if (event.key === 'Enter' || event.keyCode === 13) {
      if(valueText != "") {
        console.log('enter key');
        replaceElement.textContent = event.target.value;
        changer[0].classList.remove('enter-text');
        event.target.disabled = true;
        event.target.value = "";
        userElement.classList.add('inactive');

        let icons = userElement.getElementsByClassName('item-icon');
        let messages = userElement.getElementsByClassName('item-text');
        console.log('this element list; ',messages.length);

        for(let i = 0; i < icons.length; i++) {
          await sleep(100);
          icons[i].classList.add('inactive');
        }

        for(let i = 0; i < messages.length; i++) {
          await sleep(100);
          messages[i].classList.add('inactive');
        }

        setTimeout(async function(){ 
          fillingElement.classList.add('inactive');
          let iconfilling = fillingElement.getElementsByClassName('item-icon');
          for(let i = 0; i < iconfilling.length; i++) {
            await sleep(100);
            iconfilling[i].classList.add('inactive');
          }
          for(let i = 0; i < strings.length; i++) {
            let spanning = document.createElement('span');
            spanning.setAttribute('class','bg-white bg-opacity-25 rounded-lg p-3 mb-1 item-text');
            spanning.setAttribute('id','element'+i);
            let textNode = document.createTextNode(strings[i]);
            spanning.appendChild(textNode);
            fillPar.appendChild(spanning);
            let elementUsed = document.getElementById('element'+i);
            await sleep(500);
            elementUsed.classList.add('inactive');
          }
        }, 500);

        await sleep(strings.length * 1000);

        
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
      } else {
        return false;
      }
    } else {
      if(valueText != "") {
        console.log('building working');
        changer[0].classList.add('enter-text');
      } else {
        console.log('building change');
        changer[0].classList.remove('enter-text');
      }
    }
  };

  let bgbutton = document.getElementById('bgbutton');
  bgbutton.addEventListener('click',showBg);

  function showBg() {
    let bgoverlay = document.getElementById('bg-colors');
    bgoverlay.classList.add('actived');
    setTimeout(function() {
      let main = document.getElementById('main-content');
      let bod = document.getElementsByTagName('body')[0];
      main.classList.add('active-main');
      bod.classList.add('landing-active');
    }, 800)
  }

  
}

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}