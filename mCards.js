words = [['what', 'что'], 
        //  ['when', 'когда'], 
         ['measure', 'измерить'], 
        //  ['where', 'где'], 
         ['will', 'будет'], 
         ['can', 'могу'], 
         ['so', 'так'], 
        //  ['why', 'почему'],
        //  ['which', 'который'], 
        //  ['who', 'кто'], 
        //  ['whose', 'чей'], 
         ['colon', 'двоеточие'], 
         ['how', 'как']]

splicedWord = false

// инициализация счетчиков
right.innerText = counter_right = 
  localStorage.counter_right ? +localStorage.counter_right : 0 
wrong.innerText = counter_wrong = 
  localStorage.counter_wrong ? +localStorage.counter_wrong : 0
series.innerText = counter_series = 
  localStorage.counter_series? +localStorage.counter_series : 0

nextWord()

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

function nextWord() {

  // выбор случайной пары слов
  number = Math.floor(Math.random() * words.length)
  splicedWord = splicedWord ? 
    words.splice(number, 1, splicedWord)[0] : words.splice(number, 1)[0]

  // инициализация счетчиков
  if (!splicedWord.hit) {splicedWord.hit = 0}
  if (!splicedWord.miss) {splicedWord.miss = 0}
  if (!localStorage[splicedWord[0]]) {localStorage[splicedWord[0]] = "0,0"}

  // загрузка счетчиков
  const arrHitMiss = localStorage[splicedWord[0]].split(',')
  splicedWord.hit = arrHitMiss[0]
  splicedWord.miss = arrHitMiss[1]
  hitMiss.innerHTML = `<span id=hit>${splicedWord.hit}</span> :
  <span id=miss>${splicedWord.miss}</span>`

  // вывод слова на экран
  ru_en = Math.floor(Math.random() * 2)
  word.innerText = splicedWord[ru_en]
  input_form.value = ""
}
function inputHandler() {
  lekalo = splicedWord[1-ru_en]
  const arrHitMiss = localStorage[splicedWord[0]].split(',')

  if (input_form.value == lekalo) {
    arrHitMiss[0] = +arrHitMiss[0]+1
    splicedWord.hit = arrHitMiss[0]
    document.body.style.backgroundColor = "green";  
    localStorage.counter_right  =  right.innerText = ++counter_right
    localStorage.counter_series = series.innerText = ++counter_series

    window.setTimeout(nextWord, [1200]);
  }
  else {
    arrHitMiss[1] = +arrHitMiss[1]+1
    splicedWord.miss = arrHitMiss[1]
    document.body.style.backgroundColor = "red"; 
    localStorage.counter_wrong = wrong.innerText = ++counter_wrong
    localStorage.counter_series = series.innerText = counter_series = 0

    input_form.value = ""
    word.innerText = splicedWord[ru_en]+" = "+lekalo; 
  }
  localStorage[splicedWord[0]] = arrHitMiss.join(',')

  hitMiss.innerHTML = `<span id=hit>${splicedWord.hit}</span> :
  <span id=miss>${splicedWord.miss}</span>`
}

// TODO если "не помню" не засчитывать ввод по подсказке как hit