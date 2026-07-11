async function loadBottom(){
    const response = await fetch('/components/bottom_mobile/BottomMobile.html');
    const html = await response.text();

    console.log(html)
    const bottom = document.getElementById('bottom-placeholder');
    bottom.innerHTML = html;

}

loadBottom();