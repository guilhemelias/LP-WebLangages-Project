var btn = document.querySelector('.alert-button');
var label = document.querySelector('.alert-label');

btn.addEventListener('click', function() {

    if (btn.classList.contains('animation')) {
        btn.classList.remove('animation');
    } else {
        btn.classList.add('animation');
    }



});