
//creo un array de 6 elementos
let arr= new Array(6)

//genera una letra minúscula aleatoria entre a y z
const generateChar =()=>String.fromCharCode(Math.floor(Math.random() * 26+97))

//genera un número aleatorio entre 0 y 9
const generateNumber=()=>Math.floor(Math.random()*10)

export class Captcha {
    static captcha=arr;
    static captchaGenerate(){
        for (let index = 0; index < this.captcha.length; index++) {
            if(index%2===0)this.captcha[index]=generateNumber();
            else this.captcha[index]=generateChar();
        }
        return this.captcha.join("")
    }
    static captchaValidate(elementA, elementB){
        
            if(elementA.innerHTML.trim()!=elementB.value.trim()){
                elementB.setCustomValidity("Captcha incorrecto")
            }
            else elementB.setCustomValidity("")
        
    }
}