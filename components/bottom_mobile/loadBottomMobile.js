async function loadBottom(){
    const response = await fetch('/components/bottom_mobile/BottomMobile.html');
    const html = await response.text();
    const bottom = document.getElementById('bottom-placeholder');
    bottom.innerHTML = html;

}

loadBottom();