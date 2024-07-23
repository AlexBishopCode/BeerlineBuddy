document.addEventListener('click', function(event) {
    if(event.target.classList.contains('fa-circle')) {
        event.classList.remove('fa-circle');
        event.classList.add('fa-circle-check');
    }
    console.log(event.target)
})