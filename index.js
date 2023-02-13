import { trucksData } from "./data.js";
const trucksBox = document.getElementById('trucks-box');
const truckComp = document.getElementById('truck-company')
const trailerNum = document.getElementById('trailer-number')
let data = JSON.parse(localStorage.getItem('trucks'))
const addBtn = document.getElementById('add-btn')
window.addEventListener('click', function(e){
    if(e.target.id === 'add-btn'){
        handleAddClick()
    }
})

window.onload = render()

function handleAddClick(){
    createNewEntry()
    location.reload()
}

function getRadioInputOC(){
    const radios = document.getElementsByName('opened-or-closed')
    for(let radio of radios){
        if(radio.checked){
            return radio.value
        }
    }
}
function getRadioInputEL(){
    const radios = document.getElementsByName('empty-or-loaded')
    for(let radio of radios){
        if(radio.checked){
            return radio.value
        }
    }
}

function createNewEntry(){
    data.unshift({
        company: truckComp.value,
        trailer: trailerNum.value,
        emptyorloaded: getRadioInputEL(),
        openedorclosed: getRadioInputOC(),
        dateRecorded: new Date().toDateString(),
        timeRecorded: new Date().toLocaleTimeString()
    })
    saveData()
}


function getTruckHTML(){
    let trucksHTML = ''
    data.forEach((truck)=>{
        trucksHTML+=
        `
        <div class="trucks-info child-node">
        Company: ${truck.company} </br>
        Trailer Number: ${truck.trailer} </br>
        Opened or closed: ${truck.openedorclosed} </br>
        Empty or Loaded: ${truck.emptyorloaded} </br>
        Date Recorded: ${truck.dateRecorded} </br>
        Time Recorded: ${truck.timeRecorded} </br>
        </div>
        `
    })
    return trucksHTML
}

function render(){
    document.getElementById('trucks-box').innerHTML = getTruckHTML()
}

function saveData(){
    localStorage.setItem('trucks', JSON.stringify(data))
}

function deleteTruckFromStorage(index, amount){
    data = data.splice(index, amount)
    localStorage.setItem('trucks', JSON.stringify(data))
}




