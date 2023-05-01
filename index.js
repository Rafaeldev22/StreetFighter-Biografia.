const controls = document.querySelectorAll('.control');

let currentItem = 0;
const items = document.querySelectorAll('.item');

const maxItems = items.length;

controls.forEach((control) => {
    control.addEventListener('click', (e) => {
        isLeft = e.target.classList.contains("arrow-left")

        if(isLeft){
            currentItem -= 5;
        } else {
            currentItem += 5;
        }

        if(currentItem >= maxItems){
            currentItem = 0;
        }
        if(currentItem < 0){
            currentItem = maxItems - 1;
        }

        items.forEach((item) => item.classList.remove("current-item"));
        items[currentItem].scrollIntoView({
            inline:"center",
            behavior: "smooth"
        });

        items[currentItem].classList.add("currentItem");

    })
});

const btnMobile = document.getElementById('btn-menu');

function toggleMenu(){
    const menuMobile = document.getElementById('menu-mobile');
    menuMobile.classList.toggle('active');
}

btnMobile.addEventListener('click', toggleMenu);
