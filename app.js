const loading_text = document.querySelector('.loading_text');
const bg = document.querySelector('.bg');
let load = 0;

function bluring(){
   load++;
   if(load > 99){
       clearInterval(int)
   }
   loading_text.innerHTML = `${load}%`
   loading_text.style.opacity = scale(load,0,100,1,0);
   bg.style.filter = `blur(${scale(load, 0, 100, 20, 0)}px)`

}
const scale = (num,in_min,in_max,out_min,out_max) =>{
    return(num - in_min) * (out_max - out_min) / (in_max - in_min) + out_min
}
let int = setInterval(bluring,80);