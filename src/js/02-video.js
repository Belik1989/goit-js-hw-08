
import Player from '@vimeo/player';
let throttle = require('lodash.throttle');

// // оголошуємо змінні
const iframe = document.querySelector('iframe');
const player = new Player(iframe);

player.on('play', function () {
console.log('played the video!');
});

// 1.Відслідковуєио зміну часу через timeupdate
// 2.зберігаємо час в localStorage  з ключем "videoplayer-current-time"
// 3. Використовуємо setCurrentTime() для відтворення відео з того ж місця при 
// перезагрузці сторінки
// 4. За допомогои бібліотеки lodash.throttle використовуємо прийом __throttle
// щоб наш час зберігався кожну секунду в localStorage
player.on('timeupdate', throttle(timeSave, 1000));

function timeSave() {
player.getCurrentTime().then(function (seconds) {
    localStorage.setItem('videoplayer-current-time', seconds);
});
}

player.setCurrentTime(localStorage.getItem('videoplayer-current-time') || 0);

console.log(
'localStorage.getItem(videoplayer-current-time)',
localStorage.getItem('videoplayer-current-time')
);

