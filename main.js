const slider = document.querySelector(".sliderContenedor")
const imgSlider = document.querySelectorAll(".contenidoSlider")

let contador = 1;
let width = imgSlider[0].clientWidth;
let intervalo = 3000;

document.addEventListener('DOMContentLoaded',()=>{
  slides()
})
window.addEventListener("resize", ()=>{
    width = imgSlider[0].clientWidth;
})

setInterval(()=>{
    slides();
},intervalo);


const slides=()=>{

    slider.style.transform = "translate("+(-width*contador)+"px)";
    slider.style.transition = "transform 1s";
    contador++;

    if(contador == imgSlider.length){
        setTimeout(function(){
            slider.style.transform = "translate(0px)";
            slider.style.transition = "transform 0s";
            contador=1;
        },1500)
    }
}
