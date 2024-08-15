const form = document.getElementById("uv-form")
const address = document.getElementById("uv-address")
var searchEngine = document.getElementById("uv-search-engine");
var searchEnginee = document.getElementById("uv-search-engine");

form.addEventListener("submit", (event) => {
    event.preventDefault();
  
    try {
        registerSW();
    } catch (err) {
        console.log(err)
    }
    let iframes = document.getElementsByTagName('iframe')
    for (var i = 0; i < iframes.length; i++) {
        if (window.getComputedStyle(iframes[i]).display === "block") {
            var url = address.value.trim();
            if (localStorage.getItem("engine")) {
                var searchEnginee = localStorage.getItem("engine")

            } else {
                searchEnginee = searchEngine.value
            }
            if(reurl(url) != true) {
                url = searchEnginee + address.value.trim()
                console.log("searching")
                console.log(searchEnginee)
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


