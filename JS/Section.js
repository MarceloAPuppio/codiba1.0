import {Captcha} from './Captcha.js'
import {$} from './Tools.js'
const captcha_visor=$('#captcha_visor')
const captcha_text=$('#captcha_text')
//Genero el Captcha aleatorio
captcha_visor.innerHTML=Captcha.captchaGenerate();
//Inicio la validación del captcha
window.onload=()=>{
Captcha.captchaValidate(captcha_visor,captcha_text)
captcha_text.addEventListener('input',()=>{Captcha.captchaValidate(captcha_visor,captcha_text)})
}



document.querySelector("#btn-sales").addEventListener('click',function(){
    document.querySelector("#section2bis").style.display="block";
    document.querySelector("#section2bis").scrollIntoView();
})
document.querySelector("#btn-volver").addEventListener('click',function(){
    document.querySelector("#section2bis").style.display="none";
    document.querySelector("#section2").scrollIntoView();
})
document.querySelector("#btn-azucar").addEventListener('click',function(){
    document.querySelector("#section2bisazucar").style.display="block";
    document.querySelector("#section2bisazucar").scrollIntoView();
})
document.querySelector("#btn-volver-azucar").addEventListener('click',function(){
    document.querySelector("#section2bisazucar").style.display="none";
    document.querySelector("#section2").scrollIntoView();
})
document.querySelector("#btn-fecula").addEventListener('click',function(){
    document.querySelector("#section2bisfecula").style.display="block";
    document.querySelector("#section2bisfecula").scrollIntoView();
})
document.querySelector("#btn-volver-fecula").addEventListener('click',function(){
    document.querySelector("#section2bisfecula").style.display="none";
    document.querySelector("#section2").scrollIntoView();
})
document.getElementById("Form").addEventListener("submit",function(e){
    e.preventDefault();
    //descomentar cuando termine las pruebas
    // document.getElementById("Form").submit();
    // document.getElementById("Form").reset();
    swal("Muchas Gracias", "Nos pondremos en contacto con usted a la brevedad", "success");
    
    
})
