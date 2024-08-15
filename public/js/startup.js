


document.addEventListener("DOMContentLoaded", function() {
    registerSW();
    
    setInterval(() => {
        let time = document.getElementById('time')
        let d = new Date();
        time.innerHTML = d.toLocaleTimeString();
    }, 1000);
    let firsttime = localStorage.getItem("first")
    if (firsttime === null) {
        window.location.href="./agreement.html"
    }
});

let script = document.createElement('script');
script.src = 'https://code.jquery.com/jquery-3.6.3.min.js';
document.getElementsByTagName('head')[0].appendChild(script);

var erudaon = false;
function erudaa() {
    if (erudaon === false) {
        const erudaonscript = document.createElement('script');
        erudaonscript.src = "//cdn.jsdelivr.net/npm/eruda"
        erudaonscript.onload = function() {
            eruda.init();
            eruda.show();
        }
        document.getElementsByTagName('head')[0].appendChild(erudaonscript)
        
        erudaon = true
    } else {
        eruda.destroy();
        erudaon = false
    }
}