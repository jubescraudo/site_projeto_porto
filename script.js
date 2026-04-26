function toggleTheme() {
  const body = document.body;
  body.classList.toggle("dark");

  // salva no navegador
  if (body.classList.contains("dark")) {
    localStorage.setItem("tema", "dark");
  } else {
    localStorage.setItem("tema", "light");
  }

  // muda ícone
  const btn = document.querySelector(".toggle");
  btn.textContent = body.classList.contains("dark") ? "Theme ☀️" : "Theme 🌙";
}

// fade 
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

//botao fotos
let imagens = [
  "img/botoeira1.jpeg",
  "img/botoeira2.jpeg",
  "img/botoeira3.jpeg",
  "img/botoeira4.jpeg",
  "img/principal1.jpeg",
  "img/principal2.jpeg",
  "img/principal3.jpeg",
  "img/principal4.jpeg"
];

let indexAtual = 0;

function abrirGaleria() {
  document.getElementById("galeria").style.display = "flex";
  mostrarImagem();
}

function fecharGaleria() {
  document.getElementById("galeria").style.display = "none";
}

function mostrarImagem() {
  document.getElementById("imgGrande").src = imagens[indexAtual];
}

function trocarImagem(direcao) {
  indexAtual += direcao;

  if (indexAtual < 0) indexAtual = imagens.length - 1;
  if (indexAtual >= imagens.length) indexAtual = 0;

  mostrarImagem();
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