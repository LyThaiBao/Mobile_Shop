import { loadLang } from "../../utils/lang.js";
import {checkEmail} from "../../utils/checkEmail.js"
async function loadFooter(){
    const footer = document.getElementById('footer');
    const response = await fetch('/components/footer/footer.html');
    const html = await response.text();
    footer.innerHTML = html;
    checkEmail();
    loadLang();
}

loadFooter();