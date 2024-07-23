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