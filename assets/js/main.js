

let blocks = document.querySelectorAll('.sectionSixContentBlock');

blocks.forEach(function(block) {
    let p = block.querySelector('p'); 
    let rotate = block.querySelector('.rotate');

    block.addEventListener('click', function() {
        // Определяем целевую высоту в зависимости от размера экрана
        let targetHeight = window.innerWidth < 900 ? '193px' : '130px';
        
        // Проверяем, соответствует ли текущая высота целевой
        if (block.style.height !== targetHeight) {
            // Устанавливаем высоту и отображаем текст
            block.style.height = targetHeight;
            p.style.display = 'block';

            // Применяем поворот, если ширина экрана больше 450px
            if (window.innerWidth > 450) {
                rotate.style.transform = 'rotate(-45deg)';
            } else {
                rotate.style.transform = '';
            }
        } else {
            // Сбрасываем стили для закрытия блока
            block.style.height = '';
            p.style.display = '';
            rotate.style.transform = '';
        }

        // Устанавливаем общие стили анимации
        block.style.transition = 'height 0.15s';
        rotate.style.transition = 'transform 0.15s, margin-top 0.15s';
        rotate.style.marginTop = block.style.height === targetHeight ? '-15px' : '';
    });
});





let x = 'Смотреть еще 4';
let y = 'Мы ценим каждого сотрудника и стремимся предоставить равные возможностив развитии и продвижении. Если Вы разделяете нашу позицию и ценности, а так же нацелены нарезультат, тогда реализуйте себя в одном из наших направлений!'



function updateValue() {
    if (window.innerWidth < 699) {
        x = 'Смотреть еще 3';
        y = 'Мы ценим каждого сотрудника и стремимся предоставить равные возможности в развитии и продвижении.'
    } else {
        x = 'Смотреть еще 4';
        y = 'Мы ценим каждого сотрудника и стремимся предоставить равные возможностив развитии и продвижении. Если Вы разделяете нашу позицию и ценности, а так же нацелены нарезультат, тогда реализуйте себя в одном из наших направлений!'
    }
    document.getElementById("x").innerHTML = x;
    document.getElementById("y").innerHTML = y;
}


updateValue();


window.addEventListener('resize', updateValue);


