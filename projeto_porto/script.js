// fade sections
const sections=document.querySelectorAll('section')
const obs=new IntersectionObserver(e=>{
 e.forEach(entry=>{
  if(entry.isIntersecting){
    entry.target.classList.add('show')
  }
})
},{threshold:.2})
sections.forEach(s=>obs.observe(s))

// header effect
window.addEventListener('scroll',()=>{
 document.getElementById('header').classList.toggle('scrolled',window.scrollY>50)
})

// parallax
window.addEventListener('scroll',()=>{
 let scroll=window.scrollY
 document.querySelectorAll('#inicio img').forEach(el=>{
  el.style.transform=`translateY(${scroll*0.1}px)`
 })
})

// dark mode toggle
function toggleTheme(){
 document.body.classList.toggle('dark')
}

// menu mobile 
function toggleMenu(){
  const nav = document.querySelector('nav');
  const btn = document.querySelector('.menu-btn');

  nav.classList.toggle('show');
  btn.classList.toggle('active');
}


let isDown = false;
let startX;
let scrollLeft;