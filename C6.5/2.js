const screenWidth = window.screen.width;
const screenHeight = window.screen.height;
const btn = document.querySelector('.btn');

btn.onclick = function () {
    alert(`Ширина экрана ${screenWidth}, высота экрана ${screenHeight}`);
}