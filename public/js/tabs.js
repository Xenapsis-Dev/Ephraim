
function tab1() {
    var iframes = document.getElementsByTagName('iframe');
    for (var i = 0; i < iframes.length; i++) {
        iframes[i].style.display = 'none'
    }

    document.getElementById('iframe1').style.display = "block"
}

function closetabs(e) {
    let x = e.target.id.substring(1)
    let x2 = x - 1
    console.log(x)
    document.getElementById("tabholder" + x).remove()
    document.getElementById("iframe" + x).remove()
    document.getElementById("iframe" + x2).style.display = "block"
}

function switchtab(e) {
    var tab = e.target.id
    var tabnum = tab.substring(3);
    console.log(tabnum)
    var iframes = document.getElementsByTagName('iframe');
    for (var i = 0; i < iframes.length; i++) {
        iframes[i].style.display = 'none'
    }
    var iframeid = "iframe" + tabnum
    console.log(iframeid)
    var iframe = document.getElementById(iframeid)
    iframe.style.display = "block"
    
}

function createtab(e) {
    var iframes = document.getElementsByTagName('iframe');

// Loop through each iframe
    for (var i = 0; i < iframes.length; i++) {
        iframes[i].style.display = 'none'
    }
    let iframe = document.createElement('iframe');
    let openiframe
    iframe.src = "/proxy.html"
    iframe.classList.add('flex', 'justify-center', 'items-center')
    iframe.style.width = '90%';
    iframe.style.height = '100vh';
    let framecounter = iframes.length + 1;
    iframe.setAttribute("id", "iframe" + framecounter)
    document.getElementById('iframecontainer').appendChild(iframe);
    let tabholder = document.createElement('div')
    tabholder.setAttribute('class', 'tabholder' + iframes.length)
    tabholder.setAttribute('id', 'tabholder' + iframes.length)
    document.getElementById('buttons').appendChild(tabholder)
    let newtab = document.createElement('button');
    newtab.innerHTML = "New Tab " + iframes.length ++;
    newtab.onclick = switchtab;
    newtab.setAttribute("id", "tab" + iframes.length)
    let closetab = document.createElement('button')
    closetab.onclick = closetabs;
    closetab.innerHTML = "X"
    closetab.setAttribute("id", "X" + iframes.length)
    closetab.setAttribute("class", "X")
    document.getElementById('tabholder' + iframes.length).appendChild(newtab)
    document.getElementById("tabholder" + iframes.length).appendChild(closetab)
    let oldplus = document.querySelectorAll('#plus')
    for (var i = 0; i < oldplus.length; i++) {
        oldplus[i].remove()
    }
    let newplus = document.createElement('button');
    newplus.innerHTML = "+"
    newplus.setAttribute("id", "plus")
    newplus.onclick = createtab;
    document.getElementById('buttons').appendChild(newplus)

};

setInterval(() => {
    let allframes = document.getElementsByTagName('iframe');
    for (var i = 0; i < allframes.length; i++) {
        const iframedoc = allframes[i].contentDocument
        const iframewin = allframes[i].contentWindow.document
        let iframeid = allframes[i].id.substring(6)
        console.log(iframeid)
        let tab = document.getElementById("tab" + iframeid)
        let search = iframedoc.getElementById('search')
        tab.innerHTML = iframedoc.title
    }
}, 1000);

