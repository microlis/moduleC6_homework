const btn = document.querySelector('.j-btn-test');
const svg1 = document.querySelector('.btn_icon_first');
const svg2 = document.querySelector('.btn_icon_second');
let count = 0;

function change() {
    if (count % 2 === 0) {
        count++
        svg1.style.display = 'none';
        svg2.style.display = 'block';
    } else {
        count++
        svg1.style.display = 'block';
        svg2.style.display = 'none';
    }
}

btn.onclick = change;