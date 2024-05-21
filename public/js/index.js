"use strict";
const form = document.getElementById("uv-form")
const address = document.getElementById("uv-address")
const searchEngine = document.getElementById("uv-search-engine");

form.addEventListener("submit", async (event) => {
    event.preventDefault();
  
    try {
      await registerSW();
    } catch (err) {
        console.log(err)
    }
    console.log()
    let iframes = document.getElementsByTagName('iframe')
    for (var i = 0; i < iframes.length; i++) {
        if (window.getComputedStyle(iframes[i]).display === "block") {
            var url = address.value.trim();
            if(reurl(url) != true) {
                url = searchEngine.value + address.value.trim()
            } else {
                url = search(address.value.trim())
            }
            iframes[i].src = __uv$config.prefix + __uv$config.encodeUrl(url);
        }
    }
  });

  function reurl(urll) {
    if (urll.startsWith("https://") || urll.startsWith("http://") || urll.includes(".")) {
        console.log('url')
        console.log(urll)
        return true;
    } else {
        console.log('not url')
        return false;

    }
  }
