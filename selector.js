const imgSec = document.querySelector('.imgSec');
const musicSec = document.querySelector('.musicSec');
const mixSec = document.querySelector('.mixSec');
const streamSec = document.querySelector('.streamSec');
const newSec = document.querySelector('.newSec');
const contactSec = document.querySelector('.contactSec');

const coverImage = document.querySelector('.coverImage');
const music = document.querySelector('.music');
const mixtape = document.querySelector('.mixtape');
const streaming = document.querySelector('.streaming');
const news = document.querySelector('.newsCover');
const contactForm = document.querySelector('.contactForm');

imgSec.onclick = (e) =>{
footer.style.display = 'block';
coverImage.style.display = 'block';
music.style.display = 'none';
mixtape.style.display = 'none';
streaming.style.display = 'none';
news.style.display = 'none';
contactForm.style.display = 'none';
alert('Please scroll slowly on this page ...');
};

musicSec.onclick = (e) =>{
footer.style.display = 'block';
coverImage.style.display = 'none';
music.style.display = 'block';
mixtape.style.display = 'none';
streaming.style.display = 'none';
news.style.display = 'none';
contactForm.style.display = 'none';
};

mixSec.onclick = (e) =>{
footer.style.display = 'block';
coverImage.style.display = 'none';
music.style.display = 'none';
mixtape.style.display = 'block';
streaming.style.display = 'none';
news.style.display = 'none';
contactForm.style.display = 'none';
};

streamSec.onclick = (e) =>{
footer.style.display = 'block';
coverImage.style.display = 'none';
music.style.display = 'none';
mixtape.style.display = 'none';
streaming.style.display = 'block';
news.style.display = 'none';
contactForm.style.display = 'none';
alert('Do not play two or more songs simultaneously ...');
};

newSec.onclick = (e) =>{
footer.style.display = 'block';
coverImage.style.display = 'none';
music.style.display = 'none';
mixtape.style.display = 'none';
streaming.style.display = 'none';
news.style.display = 'block';
contactForm.style.display = 'none';
};

contactSec.onclick = (e) =>{
footer.style.display = 'block';
coverImage.style.display = 'none';
music.style.display = 'none';
mixtape.style.display = 'none';
streaming.style.display = 'none';
news.style.display = 'none';
contactForm.style.display = 'block';
};