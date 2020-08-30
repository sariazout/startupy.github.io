window.onload = function() {
  var element = document.getElementById('toView');
  var userElement = document.getElementById('userAnswer');
  var fillPar = document.getElementById('fillingParagraphs');
  var replaceElement = document.getElementById('replaceText');
  var fillingElement = document.getElementById('autoFilling');
  var inputText = document.getElementById('messageInput');
  var changer = document.getElementsByClassName('text-button');
  var valueText = "";
  var strings = ['We spend endless hours falling down Internet rabbit holes.','Caught in a stream of newsletters, podcasts, and Twitter threads, we surf the web','jumping from thought to thought, tab to tab, hoping for an intellectual','breakthrough, exhilarated, but exhausted']
  element.classList.add('inactive');

  let icons = element.getElementsByClassName('item-icon');
  let messages = element.getElementsByClassName('item-text');
  console.log('this element list; ',messages.length);

  for(let i = 0; i < icons.length; i++) {
    setTimeout(function(){ 
      icons[i].classList.add('inactive');
     }, 100);
  }

  for(let i = 0; i < messages.length; i++) {
    setTimeout(function(){ 
      messages[i].classList.add('inactive');
     }, 300);
  }

  inputText.onkeyup = function(event) {
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
          setTimeout(function(){ 
            icons[i].classList.add('inactive');
          }, 100);
        }

        for(let i = 0; i < messages.length; i++) {
          setTimeout(function(){ 
            messages[i].classList.add('inactive');
          }, 300);
        }

        setTimeout(function(){ 
          fillingElement.classList.add('inactive');
          let iconfilling = fillingElement.getElementsByClassName('item-icon');
          for(let i = 0; i < iconfilling.length; i++) {
            setTimeout(function(){ 
              iconfilling[i].classList.add('inactive');
            }, 100);
          }
          for(let i = 0; i < strings.length; i++) {
            let spanning = document.createElement('span');
            spanning.setAttribute('class','bg-white bg-opacity-25 rounded-lg p-3 mb-1 item-text');
            spanning.setAttribute('id','element'+i);
            let textNode = document.createTextNode(strings[i]);
            spanning.appendChild(textNode);
            fillPar.appendChild(spanning);
            let elementUsed = document.getElementById('element'+i);
            setTimeout(function() {
              console.log('primaries');
              elementUsed.classList.add('inactive');
            }, 500);
          }
        }, 500);
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

  
}