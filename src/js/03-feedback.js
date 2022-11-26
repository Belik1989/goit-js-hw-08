// імпортуємо throttle
import throttle from 'lodash.throttle';
// оголошуємо змінні
const formEL = document.querySelector('.feedback-form');
const emailEl = document.querySelector('input[name="email"]');
const messageEl = document.querySelector('textarea[name="message"]');
// приводимо до константи наш storage key
const STORAGE_KEY = 'feedback-form-state';

let formData = {};

// задаємо слухачів на нашу форму formEl та використовуэмо throttle 
// для контролю кількості разів виклику функції(один раз в 500 мс)
formEL.addEventListener('input', throttle(saveForm, 500));
formEL.addEventListener('submit', onFormSubmit);

uploadForm();

function saveForm(evt) {
// отримуємо значення 
formData[evt.target.name] = evt.target.value;

// записуємо значення у сховище(за допомогою JSON.stringify
// приводимо масив formData до JSON-стрічки) 
localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
// console.log(JSON.stringify(formData));
}

function onFormSubmit(evt) {

// зупиняємо поведінку браузера за замовчуванням
evt.preventDefault();

// очищаємо форму
evt.target.reset();

// прибераємо данні зі сховища
localStorage.removeItem(STORAGE_KEY);
}

function uploadForm() {
// отримуємо данні зі сховища(JSON.parse перетворює наш JSON у 
// у валідне JavaScript значення)
const loadData = JSON.parse(localStorage.getItem(STORAGE_KEY));

// якщо в сховищі був об'єкт з ключем STORAGE_KEY - оновлюємо DOM
// якщо ні if не виконується
if (loadData) {
    emailEl.value = loadData.email;
    messageEl.value = loadData.message;
    }
}






// const STORAGE_MAIL_KEY = 'mail-form-state';
// const STORAGE_FB_KEY = 'feedback-form-state';

// let throttle = require('lodash.throttle');

// const formEl = document.querySelector('.feedback-form');
// const emailEl = document.querySelector('input[name="email"]');
// const messageEl = document.querySelector('textarea[name="message"]');

// formEl.addEventListener('input',  throttle(onTextareaInput, 250));
// formEl.addEventListener('submit', onFormSubmit);
// emailEl.addEventListener('input', throttle(onEmailInput, 250));
// messageEl.addEventListener('input', onTextareaInput);

// localFbInformaition();
// localMailInformaition();

// function onFormSubmit(evt) {
//     evt.preventDefault();
//     // console.log('Sending form');
//     evt.currentTarget.reset();
//     localStorage.removeItem(STORAGE_MAIL_KEY);
//     localStorage.removeItem(STORAGE_FB_KEY);
// }
    
// function onEmailInput(evt) {
//     const usersMail = evt.target.value;
//     // console.log(usersMail);
//     localStorage.setItem(STORAGE_MAIL_KEY, usersMail);
// }

// function onTextareaInput(evt) {
//     const feedbackMessage = evt.target.value;
//     // console.log(feedbackMessage);
//     localStorage.setItem(STORAGE_FB_KEY, feedbackMessage);
// }

// function localFbInformaition(){
//     const savedMessages = localStorage.getItem(STORAGE_FB_KEY);
//         if(savedMessages){
//         messageEl.value = savedMessages;
//         }
// }

// function localMailInformaition() {
//     const savedEmail = localStorage.getItem(STORAGE_MAIL_KEY);
//     if(savedEmail){
//         emailEl.value = savedEmail;
//     }
    
// }

