function custombookmark() {
    var url = window.prompt('What is the link to your website?')
    var title = window.prompt('What is the name of the bookmark you are making? (Required)')
    var img = window.prompt('What image would you like to use for the bookmark?')
    var uvstring = "/uv/service/"
    var encodedurl = __uv$config.encodeUrl(url)
    var finalurl = uvstring + encodedurl
    console.log(finalurl)
    var bookmark = "bookmark";
    let counter = 0;
    var block = `<div><button value="${url}" id="${title}" onclick="loadpage(${title})"><div class="autobookdiv"><img class="autobookimg" src="${img}" ></div></button></div>`
    while (localStorage.getItem(bookmark + counter) !== null) {
        counter++;
    }
    bookmark = bookmark + counter
    localStorage.setItem(bookmark, block);
    document.querySelector(".geforcenow").insertAdjacentHTML("afterend", block);
};