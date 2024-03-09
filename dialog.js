const imagePop = document.querySelector('.imagePop');
const imageLoader = document.querySelector('.imageLoader');
const closeImages = document.querySelector('.closeImages');
const opener = document.querySelectorAll('.opener');

opener.forEach(opener =>{
opener.onclick = (e) =>{
imagePop.showModal();
var imageAttribute = opener.getAttribute('src');
imageLoader.setAttribute('src', imageAttribute);
}
});

closeImages.onclick = (e) =>{
imagePop.close();
};