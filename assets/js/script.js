const checkBoxes = document.getElementsByClassName('fa-circle');
console.log(checkBoxes);
function tickBox(event) {
    if(event.target.classList.contains('fa-circle')) {
        event.target.classList.remove('fa-circle');
        event.target.classList.add('fa-circle-check');
    }
    console.log(event.target)
}

for(const checkBox of checkBoxes) {

checkBox.addEventListener('click', (event) => tickBox(event))
}

// Change Div Color 
function ticketBox(event) {
    const targetDivId = event.target.getAttribute('data-target');
    const targetDiv = document.getElementById(targetDivId);
    
    if (targetDiv) {
        targetDiv.style.backgroundColor = 'blue';
    }
}
// Add click event
document.querySelectorAll('.fa-circle').forEach(faCircleElement => {
    faCircleElement.addEventListener('click', ticketBox);
});

document.getElementById('timer-button-one').addEventListener('click', () => {

let timerOne = 900

const intervalOne = setInterval(() => {
    timerOne-- 
    document.getElementById('timer1').innerText=`${timerOne} seconds`
    if (timerOne < 1) {clearInterval(intervalOne)}
    console.log(timerOne);
}, 1000);
})

document.getElementById('timer-button-two').addEventListener('click', () => {

let timerTwo = 900

const intervalTwo = setInterval(() => {
    timerTwo-- 
    document.getElementById('timer2').innerText=`${timerTwo} seconds`
    if (timerTwo < 1) {clearInterval(intervalTwo)}
    console.log(timerTwo);
}, 1000);
})

document.getElementById('timer-button-three').addEventListener('click', () => {

let timerThree = 900

const intervalThree = setInterval(() => {
    timerThree-- 
    document.getElementById('timer3').innerText=`${timerThree} seconds`
    if (timerThree < 1) {clearInterval(intervalThree)}
    console.log(timerThree);
}, 1000);
})


