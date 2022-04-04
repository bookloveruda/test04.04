'use strict';


const gallery = document.querySelector('.gallery');
const galleryUl = document.querySelector('.gallery>ul');
const galleryUlLi = galleryUl.querySelectorAll('li');
const liSize = galleryUlLi.length

const arrBg = [];

for(let i=0; i<galleryUlLi.length; i++){
  arrBg.push(`url(img/${i}.jpg) no-repeat 50%/cover`);
  galleryUlLi[i].style.background = arrBg[i];
}



let i = -1;

const autoGallery=()=>{
  i++;
  console.log(`i -> ${i}`);

  const gap = galleryUlLi[1].offsetLeft - galleryUlLi[0].offsetLeft;
  const goto = (-i*gap) + 'px';

  gallery.style.left = goto;
  gallery.style.transition = 'all 0.5s';

  if(i>=liSize-1) i= -1;    
  //(i>=4) 
}
let setIn = setInterval(autoGallery,4000);




const arrow = document.querySelectorAll('span.arrow');

arrow.forEach(el=>{
  el.addEventListener('mouseover' , ()=> clearInterval(setIn));
  el.addEventListener('mouseout' , ()=> setIn = setInterval(autoGallery,4000));
});



const itemsUlLi = document.querySelectorAll('.items>ul>li');

itemsUlLi.forEach(el => el.addEventListener('mouseover',()=> clearInterval(setIn) ));
itemsUlLi.forEach(el => el.addEventListener('mouseout',()=> setIn = setInterval(autoGallery,4000) ));




(()=>autoGallery())();