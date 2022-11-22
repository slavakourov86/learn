function logValue(id) {
    var el = document.getElementById(id);
    console.log(el.value);
}

function getValue(id) {
    var el = document.getElementById(id);
    return el.value;
}


var firstNameId = 'first-name';
var firstNameEl = document.getElementById(firstNameId);
var lastNameId = 'last-name';
var lastNameEl = document.getElementById(lastNameId);
var addressId = 'address';
var addressEl = document.getElementById(addressId);
var citiesId = 'cities';
var citiesEl = document.getElementById(citiesId);
var hobbiesId = 'hobbies';
var hobbiesEl = document.getElementById(hobbiesId);
var avatarWrapperId = 'avatar-wrapper';
var avatarWrapperEl = document.getElementById(avatarWrapperId);
var avatarId = 'avatar';
var avatarEl = document.getElementById(avatarId);

logValue(firstNameId);
logValue(lastNameId);
var value = getValue(firstNameId);

window.alert(value);


// console.log(lastNameEl.value);
firstNameEl.setAttribute('value', 'Andrew')
// console.logfirstNameEl.className);
firstNameEl.className = 'first-name default-input error-input';
avatarEl.src = 'https://avatars.mds.yandex.net/i?id=0da35e50cb4005b229e728e2df58e3592d070bf8-5390940-images-thumbs&n=13';
hobbiesEl.value = 'Мне интересно программирование';