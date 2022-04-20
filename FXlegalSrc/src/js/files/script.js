// Подключение функционала "Чертогов Фрилансера"
import { isMobile } from "./functions.js";
// Подключение списка активных модулей
import { flsModules } from "./modules.js";




let 
images = document.images,
imagesTotalCount = images.length,
imagesLoadedCount = 0,
subLogo = document.querySelector('.preloader__main-img'),
preloader = document.querySelector('.preloader');

for( let i = 0; i < imagesTotalCount; i++ ){
    let imagesClone = new Image();
    imagesClone.onload = imageLoaded;
    imagesClone.onerror = imageLoaded;
    imagesClone.src = images[i].src
}

function imageLoaded(){
    imagesLoadedCount++;
    subLogo.style.height = (((100 / imagesTotalCount) * imagesLoadedCount)) + '%'
    if (imagesLoadedCount >= imagesLoadedCount){
        setTimeout(() => {
            if (!preloader.classList.contains('done') && subLogo.style.height == '100%') {
                document.querySelector('.wrapper').classList.add('load');
                preloader.classList.add('load');
            }
        }, 1000);
    }
}




