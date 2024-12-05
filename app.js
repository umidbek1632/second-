let words = document.querySelector('.words')
let game_display = document.querySelector('.game-display')
let word_json = {
    'VATAN':['V','A','T','A','N'],
    'TIRIK':['T','I','R','I','K'],
    'ONA':['O','N','A'],
    'KITOB':['K','I','T','O','B'],
    'DARAXT':['D','A','R','A','X','T'],
    'BOLALAR':['B','O','L','A','L','A','R'],
    'SHOH':['S','H','O','H'],
    'XALQ':['X','A','L','Q'],
    'HAYOT':['H','A','Y','O','T'],
    'XAZINA':['X','A','Z','I','N','A'],
    'OSMON':['O','S','M','O','N'],
    'OLIM':['O','L','I','M'],
    'DUNYO':['D','U','N','Y','O'],
    'USTOZ':['U','S','T','O','Z'],
    'OTA':['O','T','A'],
    'QAHRAMON':['Q','A','H','R','A','M','O','N'],
}
let suzlar = Object.keys(word_json)
let vatan = suzlar[0]
for(let i=0; i<suzlar.length;i++){
    let span = document.createElement('span')
    span.classList.add('word')
    span.textContent = suzlar[i]

    words.appendChild(span)

}
let alLetters  = []
for(let i =0; i<suzlar.length;i++){
    let massiv = word_json[suzlar[i]]
    for(let i =0;i<massiv.length;i++){
        alLetters.push(massiv[i])
        
    }
}

for(let i=0;i<suzlar.length;i++){
    let massiv = word_json[suzlar[i]]
    alLetters.push(...massiv)
}

let selected = []
for(let i=0; i<80;i++){
    let rand1 = Math.floor(Math.random()*80)
    let rand2 = Math.floor(Math.random()*80)

    let t = alLetters[rand1]
    alLetters[rand1]=alLetters[rand2]
    alLetters[rand2]=t
  
    let span = document.createElement('span')
    span.classList.add('letter')
    span.textContent = alLetters[i]
    game_display.appendChild(span)
    
    span.onclick = ()=>{
        let clickedLetter = span.textContent
        span.style.backgroundColor = 'red'
        span.style.border = '1px solid white'
   
        if(clickedLetter == 'V'||'A'||'T'||'A'||'N'){
            span.textContent = ' '
        }
           
            
        
        console.log(clickedLetter)

    }

  
    
}









// object.keys = jsonning keyslarini olib beradi
