words = [['what', 'что'], 
         ['when', 'когда'], 
         ['where', 'где'], 
         ['why', 'почему'],
         ['which', 'который'], 
         ['who', 'кто'], 
         ['whose', 'чей'], 
         ['colon', 'двоеточие'], 
         ['how', 'как']]

function nextWord() {
  number = Math.floor(Math.random() * 8)
  ru_en = Math.floor(Math.random() * 2)
  if (splicedWord) splicedWord = words.splice(number, 1, splicedWord)[0]
  else splicedWord = words.splice(number, 1)[0]
  word.innerText = splicedWord[ru_en]
  
  input_form.value = ""
}
splicedWord = false
counter_right = 0
counter_wrong = 0
nextWord()
function inputHandler() {
  text = input_form.value
  console.log(text)
  lekalo = splicedWord[1-ru_en]

  if (text == lekalo) {
    document.body.style.backgroundColor = "green";  
    window.setTimeout(nextWord, [1200]);
    right.innerText = ++counter_right
  }
  else {
    document.body.style.backgroundColor = "red"; 
    word.innerText = splicedWord[ru_en]+" = "+lekalo; 
    wrong.innerText = ++counter_wrong
  }

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
// TODO не показывать подряд одно слово, ошибся/попал на каждом слове, серия без ошибки.
// TODO качество UX 