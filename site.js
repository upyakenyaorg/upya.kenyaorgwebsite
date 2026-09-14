
const menu=document.querySelector('.menu'),nav=document.querySelector('nav');
if(menu){menu.addEventListener('click',()=>{nav.classList.toggle('open');menu.textContent=nav.classList.contains('open')?'Close':'Menu';});}
