// поиск елементов
var showPrevBtn = document.getElementById('show-prev');
var showNextBtn = document.getElementById('show-next');
var slideImg = document.getElementById('slide-img');

// подписываемся на сабытия
showPrevBtn.addEventListener('click', onShowPrevBtnClick);
showNextBtn.addEventListener('click', onShowNextBtnClick);

// создаем массив с картинками
var imgUrls = [
    'https://avatars.mds.yandex.net/i?id=875d7e96cb94917ebbd3498db1598802b15ca8f3-6335046-images-thumbs&n=13',
    'https://avatars.mds.yandex.net/i?id=49a0ca437b3107b9d27f38f85c68f83481037341-4628606-images-thumbs&n=13',
    'https://avatars.mds.yandex.net/i?id=aa42f0bc82d663d6b7cdc9a45ea7173f3be66c38-7552315-images-thumbs&n=13',
    'https://avatars.mds.yandex.net/i?id=a1c9b918f64f1525262eadec7b071ff7ea54aecb-4838366-images-thumbs&n=13'
];

// начальное положение
var curentImgIndex = 0;
showPrevBtn.disabled = true;
slideImg.src = imgUrls[curentImgIndex];

// оперделение функций
function onShowPrevBtnClick() {
    slideImg.src = imgUrls[curentImgIndex];
    console.log('perv clicked');
    // Условие достижения конца списка картинок
    curentImgIndex--;
    if (curentImgIndex === 0) {
        showPrevBtn.disabled = true;
    }
}
function onShowNextBtnClick() {
    curentImgIndex++;
    slideImg.src = imgUrls[curentImgIndex];
    console.log('next clicked');
    showPrevBtn.disabled = false;
    // Условие достижения конца списка картинок
    if (curentImgIndex === (imgUrls.length-1)) {
        showNextBtn.disabled = true;
    }
}