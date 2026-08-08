import {vi} from "../public/lang/vi.js"
import {us} from "../public/lang/us.js"
function applyLang(lang){
    const elements = document.querySelectorAll('[data-lang]');
    console.log(">>>EL: ",elements)
    elements.forEach((el,index) =>{
        const key = el.getAttribute('data-lang');
       const value =  key.split('.').reduce((oldVal,currentVal) => oldVal?.[currentVal],lang);

       if(value){
        el.textContent = value;
       }
    })
}


export function setLang(lang = 'vi'){
    localStorage.setItem('lang',JSON.stringify(lang));  
    loadLang();
}

export function getLang(){
    const lang = JSON.parse(localStorage.getItem('lang'))||'vi';
    console.log(lang)
    return lang;
}

export function loadLang(){
    console.log("Lang")
    const lang = getLang();
    const data = lang == 'vi'?vi:us;
    console.log(data)   
    applyLang(data);
}

// setLang('us');
loadLang();