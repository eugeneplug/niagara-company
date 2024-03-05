let blocks = document.querySelectorAll('.sectionSixContentBlock');

blocks.forEach(function(block) {
    let p = block.querySelector('p'); 
    let rotate = block.querySelector('.rotate');

    block.addEventListener('click', function() {
        if (block.style.height !== '130px') {
            block.style.height = '130px';
            block.style.transition = '0.15s';
            p.style.display = 'block';
            rotate.style.transform = 'rotate(-45deg)'
            rotate.style.transition = '0.15s';
            rotate.style.marginTop = '-15px';
            
        } else {
            block.style.height = '';
            p.style.display = '';
            rotate.style.transform = ''
            rotate.style.marginTop = '';
           
        }
    });
});







