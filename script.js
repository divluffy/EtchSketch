//startcode By #ibrahim_jomaa for gaza sky geeks - code academy

let container = document.querySelector('.container'),
    btnClear = document.querySelector('.btn-clear'),
    btnCreate = document.querySelector('.btn-create'),
    input = document.querySelector('.input')

let newcount = 0

btnCreate.onclick=()=>{ // for take the new value ans save to localstorage and reload to use

    if(!input.value) return alert("plz enter a number")
    container.innerHTML = ''
    newcount = input.value
    input.value = ''
    let savecount =JSON.stringify(newcount)
    localStorage.setItem('fromsaved', savecount)
    location.reload()
}


//check if the local there value refresh page and use new value or use defulf if not
if(localStorage.fromsaved){
    newcount = JSON.parse( localStorage.getItem('fromsaved'))   
}else{
    newcount =16
}

let newcountMulte = newcount *newcount //for x and y = numbers cells

for (let i = 0; i < newcountMulte; i++) { //create grid xtox 
    container.innerHTML += `<div class="divs" onmouseout="getDoneColor(${i})"></div>`;
    container.style.gridTemplateColumns = `repeat(${newcount},1fr)`;
}

//clear grid
btnClear.onclick=()=>{
    let audioclear = new Audio('./src/Audio/flip.wav')
    audioclear.play()
    container.innerHTML = ''
    container.innerHTML = '<div class="ifclear">Please enter a cell number</div>'
    localStorage.removeItem('fromsaved')

}

//get color random with hover
let divs = document.querySelectorAll('.divs')
divs.forEach(e=>{
    e.addEventListener('mouseover', ()=>{
        e.style.background = randomColor()
    })
})


//for create array and yhis mean all div have length then hover 10 times well be black
let arr = []
let w = 0
let addto = 0
while(w < newcountMulte){
    arr.push(addto)//for add 0 all cell
    w++
}

function getDoneColor(index){ //for adding +1 to arrive 10
    arr[index]++
    if(arr[index]== 10){
        divs[index].classList.add('active')
    }
}



function randomColor(){    //return random color background by rgba()
    let val1 = Math.floor(Math.random()*255)
    let val2 = Math.floor(Math.random()*255)
    let val3 = Math.floor(Math.random()*255)
    let val4 = Math.floor(Math.random()*255)
    return `rgba(${val1},${val2},${val3},${val4})`
}