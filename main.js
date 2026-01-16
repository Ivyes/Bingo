let Cards = document.querySelectorAll(".card");

for (let elem of Cards) {
    elem.addEventListener('click', function(){
        elem.classList.toggle('checked');
    })
};