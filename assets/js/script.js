const checkBoxes = document.getElementsByClassName('fa-circle');
console.log(checkBoxes);
function tickBox(event) {
    if(event.target.classList.contains('fa-circle')) {
        event.target.classList.remove('fa-circle');
        event.target.classList.add('fa-circle-check');
    }
    console.log(event.target);
}

for(const checkBox of checkBoxes) {

checkBox.addEventListener('click', (event) => tickBox(event));
}

// Change Div Color 
function ticketBox(event) {
    const targetDivId = event.target.getAttribute('data-target');
    const targetDiv = document.getElementById(targetDivId);
    
    if (targetDiv) {
        targetDiv.style.backgroundColor = 'pink';
        targetDiv.style.transition = '0.7s';
    }
}
// Add click event

document.querySelectorAll('.fa-circle').forEach(faCircleElement => {
    faCircleElement.addEventListener('click', ticketBox);
});

//Timers 

document.getElementById('timer-button-one').addEventListener('click', () => {

let timerOne = 600;

const intervalOne = setInterval(() => {
    timerOne--;

    const minutes = Math.floor(timerOne / 60);
    const seconds = timerOne % 60;
    
    const constructMinutes = minutes.toString().padStart(2, '0');
    const constructSeconds = seconds.toString().padStart(2, '0');

    document.getElementById('timer1').innerText = `${constructMinutes}:${constructSeconds}`;
    if (timerOne < 1) {
        clearInterval(intervalOne);
        document.getElementById('timer1').innerText = "Pull two more jugs then start timer 2";
    }
    console.log(timerOne);
}, 1000);
});

document.getElementById('timer-button-two').addEventListener('click', () => {

let timerTwo = 600;

const intervalTwo = setInterval(() => {
    timerTwo--;

    const minutes = Math.floor(timerTwo / 60);
    const seconds = timerTwo % 60;
    
    const constructMinutes = minutes.toString().padStart(2, '0');
    const constructSeconds = seconds.toString().padStart(2, '0');

    document.getElementById('timer2').innerText = `${constructMinutes}:${constructSeconds}`;
    if (timerTwo < 1) {
        clearInterval(intervalTwo);
        document.getElementById('timer2').innerText = "Pull two more jugs then start timer 3";
    }
    console.log(timerTwo);
}, 1000);
});

document.getElementById('timer-button-three').addEventListener('click', () => {

    let timerThree = 600;

    const intervalThree = setInterval(() => {
        timerThree--;
    
        const minutes = Math.floor(timerThree / 60);
        const seconds = timerThree % 60;
        
        const constructMinutes = minutes.toString().padStart(2, '0');
        const constructSeconds = seconds.toString().padStart(2, '0');
    
        document.getElementById('timer3').innerText = `${constructMinutes}:${constructSeconds}`;
        if (timerThree < 1) {
            clearInterval(intervalThree);
            document.getElementById('timer3').innerText = "Finished, Please move onto the step six";
        }
        console.log(timerThree);
    }, 1000);
    });

// Hidden Div

document.addEventListener('DOMContentLoaded', () => {
    const buttons = document.querySelectorAll('.clickable-button');
    const hiddenDiv = document.getElementById('hiddenDiv');
    const clickedButtons = new Set();

    buttons.forEach(button => {
        button.addEventListener('click', () => {
            clickedButtons.add(button);

            // Check if the number of clicked buttons matches the total number of buttons
            if (clickedButtons.size === buttons.length) {
                hiddenDiv.style.display = 'block';
            }
        });
    });
});

const steps = [
    "Slide 1: Welcome to Beerline Buddy!",
    "Please follow the steps below using the checklist and timers",
    "Before you start here is what you  will need",
    "Safety info",
    "Good luck!"
];

let currentStep = 0;

function updateStep() {
    document.getElementById('instruction-text').innerText = steps[currentStep];
    document.getElementById('previous-button').disabled = currentStep === 0;
    document.getElementById('next-button').disabled = currentStep === steps.length - 1;
}

document.getElementById('previous-button').addEventListener('click', () => {
    if (currentStep > 0) {
        currentStep--;
        updateStep();
    }
});

document.getElementById('next-button').addEventListener('click', () => {
    if (currentStep < steps.length - 1) {
        currentStep++;
        updateStep();
    }
});

updateStep(); // Initialize with the first step