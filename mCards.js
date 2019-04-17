words = [['what', 'что'], 
         ['when', 'когда'], 
         ['where', 'где'], 
         ['why', 'почему'],
         ['which', 'который'], 
         ['who', 'кто'], 
         ['whose', 'чей'], 
         ['how', 'как']]

function nextWord() {
  number = Math.floor(Math.random() * 8)
  ru_en = Math.floor(Math.random() * 2)
  word.innerText = words[number][ru_en]
  input_form.value = ""
}
counter_right = 0
counter_wrong = 0
nextWord()
function inputHandler() {
  text = input_form.value
  console.log(text)

  if (words[number][0] == words[number][ru_en]) {lekalo = words[number][1]}
  else if (words[number][1] == words[number][ru_en]) {lekalo = words[number][0]}
  console.log(lekalo)

  if (text == lekalo) {document.body.style.backgroundColor = "green";  window.setTimeout(nextWord, [1200]);
  right.innerText = ++counter_right
  }

  if (text != lekalo) {document.body.style.backgroundColor = "red"; 
  word.innerText = words[number][ru_en]+" = "+lekalo; 
  wrong.innerText = ++counter_wrong
  }

}
input_form.onchange = inputHandler

yes.onclick = function() {
  if (words[number][0] == words[number][ru_en]) {lekalo = words[number][1]}
  else if (words[number][1] == words[number][ru_en]) {lekalo = words[number][0]}

  word.innerText = words[number][ru_en]+" = "+lekalo
  document.body.style.backgroundColor = "green"

  window.setTimeout(nextWord, [1200])
}
no.onclick = function() {
  if (words[number][0] == words[number][ru_en]) {lekalo = words[number][1]}
  else if (words[number][1] == words[number][ru_en]) {lekalo = words[number][0]}
 
  word.innerText = words[number][ru_en]+" = "+lekalo
  document.body.style.backgroundColor = "red"
}
// TODO не показывать подряд одно слово, ошибся/попал на каждом слове, серия без ошибки.