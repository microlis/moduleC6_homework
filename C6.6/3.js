let websocket = new WebSocket("wss://echo.websocket.org/");

const mapLink = document.querySelector('#map-link');
const btn = document.querySelector('.j-btn-search');
const btnSend = document.querySelector('.j-btn-send');
const input = document.querySelector('.message');
const output = document.getElementById('output');
const status = document.getElementById('status');

const error = () => {
    status.textContent = 'Невозможно получить ваше местоположение';
}

const success = (position) => {
    console.log('position', position);
    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;


    mapLink.href = `https://www.openstreetmap.org/#map=18/${latitude}/${longitude}`;
    mapLink.textContent = 'Гео-локация';
}

btn.addEventListener('click', () => {
    mapLink.href = '';
    mapLink.textContent = '';

    if (!navigator.geolocation) {
        status.textContent = 'Геолокация не поддерживается вашим браузером';
    } else {
        status.textContent = 'Определение местоположения…';
        navigator.geolocation.getCurrentPosition(success, error);
    }
});

function writeToScreen(message) {
    let pre = document.createElement("p");
    pre.style.wordWrap = "break-word";
    pre.innerHTML = message;
    output.appendChild(pre);
}

btnSend.addEventListener('click', () => {
    let message = input.value;
    writeToScreen("Отправлено: " + message);
    websocket.send(message);
    input.value = '';
    websocket.onmessage = function (evt) {
        writeToScreen(
            '<span  class="response" style="color: blue;">RESPONSE: ' + evt.data + '</span>'
        );
    };
    websocket.onerror = function (evt) {
        writeToScreen(
            '<span style="color: red;">ERROR:</span> ' + evt.data
        );
    };
});