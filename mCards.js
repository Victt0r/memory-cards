words = [['what', 'что'], 
         ['when', 'когда'], 
         ['measure', 'измерить'], 
         ['where', 'где'], 
         ['will', 'будет'], 
         ['can ', 'могу'], 
         ['so', 'так'], 
         ['why', 'почему'],
         ['which', 'который'], 
         ['who', 'кто'], 
         ['whose', 'чей'], 
         ['colon', 'двоеточие'], 
         ['how', 'как']]

function nextWord() {
  number = Math.floor(Math.random() * words.length)
  ru_en = Math.floor(Math.random() * 2)
  
  splicedWord = splicedWord ? 
    words.splice(number, 1, splicedWord)[0] : words.splice(number, 1)[0]
  if (!splicedWord.hit) {splicedWord.hit = 0}
  if (!splicedWord.miss) {splicedWord.miss = 0}
  word.innerText = splicedWord[ru_en]
  hitMiss.innerHTML = `<span id=hit>${splicedWord.hit}</span> :
  <span id=miss>${splicedWord.miss}</span>`
  input_form.value = ""
}
splicedWord = false
right.innerText = counter_right = 
  localStorage.counter_right ? +localStorage.counter_right : 0
wrong.innerText = counter_wrong = 
  localStorage.counter_wrong ? +localStorage.counter_wrong : 0
series.innerText = counter_series = 
  localStorage.counter_series? +localStorage.counter_series : 0

nextWord()
function inputHandler() {
  text = input_form.value
  lekalo = splicedWord[1-ru_en]

  if (text == lekalo) {
    splicedWord.hit = splicedWord.hit ? splicedWord.hit+1 : 1
    document.body.style.backgroundColor = "green";  
    window.setTimeout(nextWord, [1200]);
    right.innerText = ++counter_right
    localStorage.counter_right = counter_right
    series.innerText = ++counter_series
    localStorage.counter_series = counter_series

  }
  else {
    splicedWord.miss = splicedWord.miss ? splicedWord.miss+1 : 1
    document.body.style.backgroundColor = "red"; 
    word.innerText = splicedWord[ru_en]+" = "+lekalo; 
    wrong.innerText = ++counter_wrong
    localStorage.counter_wrong = counter_wrong
    input_form.value = ""
    localStorage.counter_series = series.innerText = counter_series = 0
  }
  hitMiss.innerHTML = `<span id=hit>${splicedWord.hit}</span> :
  <span id=miss>${splicedWord.miss}</span>`
}
input_form.onchange = inputHandler

yes.onclick = function() {
  word.innerText = splicedWord[ru_en]+" = "+splicedWord[1-ru_en]
  document.body.style.backgroundColor = "green"
  window.setTimeout(nextWord, [1500])
}
no.onclick = function() {
  word.innerText = splicedWord[ru_en]+" = "+splicedWord[1-ru_en]
  document.body.style.backgroundColor = "red"
}

// TODO запись счетчиков в LocalStorage
