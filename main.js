let items = document.querySelectorAll('.slider .item');
let next = document.getElementById('next');
let prev = document.getElementById('prev');

let active = 0;
function loadshow(){
let stt = 0;
items[active].style.transform = `none`;
    items[active].style.zIndex = 1;
    items[active].style.filter = 'none';
    items[active].style.opacity = 1;
for(var i= active + 1; i< items.length; i++){
    stt++;
    items[i].style.transform = `translateX(${120 * stt}px)  scale(${1 - 0.2*stt}) perspective(16px) rotateY(-1deg)`;
    items[i].style.zIndex = -stt;
    items[i].style.filter = 'blur(5px)';
    items[i].style.opacity = stt > 2 ? 0 : 0.6;
}
stt = 0;
for(var i = active - 1; i>= 0; i--){

    stt++;
    items[i].style.transform = `translateX(${-120 * stt}px)  scale(${1 - 0.2*stt}) perspective(16px) rotateY(-1deg)`;
    items[i].style.zIndex = -stt;
    items[i].style.filter = 'blur(5px)';
    items[i].style.opacity = stt > 2 ? 0 : 0.6;
}
}

function nextSlide() {
    active = active + 1 < items.length ? active + 1 : 0;
    loadshow();
}

let autoSlide = setInterval(nextSlide, 3000); // Change slide every 3 seconds

// next.onclick = function() {
//     clearInterval(autoSlide); // Stop the auto slide
//     nextSlide();
//     autoSlide = setInterval(nextSlide, 3000); // Restart the auto slide
// }

// prev.onclick = function() {
//     clearInterval(autoSlide); // Stop the auto slide
//     active = active - 1 >= 0 ? active - 1 : items.length - 1;
//     loadshow();
//     autoSlide = setInterval(nextSlide, 3000); // Restart the auto slide
// }

loadshow();