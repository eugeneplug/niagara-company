let btn = document.querySelector ('.navMobileBurger');
let burgermenu = document.querySelector('.burgermenu');

let stick1 = document.querySelector('.stick1');
let stick2 = document.querySelector('.stick2');
let stick3 = document.querySelector('.stick3');





btn.addEventListener('click', function() {
    if(burgermenu.style.display !== 'block') {
        burgermenu.style.display = 'block'
        stick2.style.display = 'none'
        stick1.style.transform = 'rotate(-47deg)'
        stick3.style.transform = 'rotate(47deg)'

        stick1.style.top = '4px'
        stick3.style.top = '-5px'
        
    } else {
        burgermenu.style.display = ''
        stick2.style.display = ''
        stick1.style.transform = ''
        stick3.style.transform = ''

        stick1.style.top = ''
        stick3.style.top = ''
    }
});


