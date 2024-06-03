"use strict";
const form = document.getElementById("uv-form")
const address = document.getElementById("uv-address")
var searchEngine = document.getElementById("uv-search-engine");




form.addEventListener("submit", async (event) => {
    event.preventDefault();
  
    try {
      await registerSW();
    } catch (err) {
        console.log(err)
    }
    let iframes = document.getElementsByTagName('iframe')
    for (var i = 0; i < iframes.length; i++) {
        if (window.getComputedStyle(iframes[i]).display === "block") {
            var url = address.value.trim();
            if (localStorage.getItem("engine")) {
                var searchEngine = localStorage.getItem("engine")

            } 
            if(reurl(url) != true) {
                url = searchEngine + address.value.trim()
                console.log("searching")
                console.log(searchEngine)
            } else {
                url = search(address.value.trim())
                console.log("going to website")
            }
            iframes[i].src = __uv$config.prefix + __uv$config.encodeUrl(url);
            
        }
    }
  });

  function reurl(urll) {
    if (urll.startsWith("https://") || urll.startsWith("http://") || urll.includes(".")) return true;
    return false;
  }


