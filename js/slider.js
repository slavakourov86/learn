var slider1 = {
    imgUrls: [],
    curentImgIndex: 0,
    showPrevBtn: document.getElementById('show-prev'),
    showNextBtn: document.getElementById('show-next'),
    slideImg: document.getElementById('slide-img'),

    init: function() {
        console.log('Стартуем')
        // подписываемся на сабытия
        this.showPrevBtn.addEventListener('click', this.onShowPrevBtnClick);
        this.showNextBtn.addEventListener('click', this.onShowNextBtnClick);

        // создаем массив с картинками
        this.imgUrls.push('https://avatars.mds.yandex.net/i?id=875d7e96cb94917ebbd3498db1598802b15ca8f3-6335046-images-thumbs&n=13');
        this.imgUrls.push('https://avatars.mds.yandex.net/i?id=49a0ca437b3107b9d27f38f85c68f83481037341-4628606-images-thumbs&n=13');
        this.imgUrls.push('https://avatars.mds.yandex.net/i?id=aa42f0bc82d663d6b7cdc9a45ea7173f3be66c38-7552315-images-thumbs&n=13');
        this.imgUrls.push('https://avatars.mds.yandex.net/i?id=a1c9b918f64f1525262eadec7b071ff7ea54aecb-4838366-images-thumbs&n=13');
        
        // начальное положение
        this.showPrevBtn.disabled = true;
        this.slideImg.src = this.imgUrls[this.curentImgIndex];
    },

    onShowPrevBtnClick: function(event) {
        this.slideImg.src = this.imgUrls[this.curentImgIndex];
        console.log('perv clicked');
        // Условие достижения начала списка картинок
        this.curentImgIndex--;
        if (this.curentImgIndex === 0) {
            this.showPrevBtn.disabled = true;
        }
    },
    onShowNextBtnClick: function(event) {
        this.curentImgIndex++;
        this.slideImg.src = this.mgUrls[this.curentImgIndex];
        console.log('next clicked');
        this.showPrevBtn.disabled = false;
        // Условие достижения конца списка картинок
        if (this.curentImgIndex === (this.imgUrls.length-1)) {
            this.showNextBtn.disabled = true;
        }
    }
};