
const menu=document.querySelector('.menu'),nav=document.querySelector('.nav');
if(menu&&nav){menu.addEventListener('click',()=>{nav.classList.toggle('open');menu.setAttribute('aria-expanded',nav.classList.contains('open'))});}
document.querySelectorAll('form[data-demo]').forEach(form=>{
 form.addEventListener('submit',e=>{e.preventDefault();const note=form.querySelector('.form-note');if(note){note.textContent='Thank you. Your interest has been received for this demo form. Connect it to your preferred backend before launch.';note.style.color='#1E40AF';note.style.fontWeight='700';}form.reset();});
});
