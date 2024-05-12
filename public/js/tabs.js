
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
    let tabholder = document.querySelectorAll(".tabholder")
    let tabs = document.querySelectorAll(".tab")
    let Xs = document.querySelectorAll(".X")
    document.getElementById("tabholder" + x).remove()
    document.getElementById("iframe" + x).remove()
    var iframes = document.getElementsByTagName('iframe');
    for (var i = 0; i < iframes.length; i++) {
        iframes[i].style.display = 'none'
    }
    for (var i = 0; i < tabholder.length; i++) {
        tabholder[i].id = "tabholder" + (i);
        if (tabholder[i].id === "tabholder0") {
            tabholder[i].id = "tabholder1"
        }
    }
    for (var i = 0; i < tabs.length; i++) {
        tabs[i].id = "tab" + (i);
        if (tabs[i].id === "tab0") {
            tabs[i].id = "tab1"
        }
    }
    for (var i = 0; i < Xs.length; i++) {
        Xs[i].id = "X" + (i);
        if (Xs[i].id === "X0") {
            Xs[i].id = "X1"
        }
    }
    document.getElementById("iframe" + x2).style.display = "block"
}

function switchtab(e) {
    var tab = e.target.id
    var tabnum = tab.substring(3);
    var iframes = document.getElementsByTagName('iframe');
    for (var i = 0; i < iframes.length; i++) {
        iframes[i].style.display = 'none'
    }
    var iframeid = "iframe" + tabnum
    var iframe = document.getElementById(iframeid)
    iframe.style.display = "block"
    
}

function createtab(e) {
    var iframes = document.getElementsByTagName('iframe');


    for (var i = 0; i < iframes.length; i++) {
        iframes[i].style.display = 'none'
    }
    let framelen = iframes.length
    const iframe1 = framelen + 1
    let tabholder = document.createElement('div')
    tabholder.setAttribute('class', 'tabholder' + iframes.length)
    tabholder.setAttribute("class", "tabholder")
    tabholder.setAttribute('id', 'tabholder' + iframes.length)
    document.getElementById('buttons').appendChild(tabholder)
    let newtab = document.createElement('button');
    newtab.innerHTML = "New Tab " + iframes.length;
    newtab.onclick = switchtab;
    newtab.setAttribute("id", "tab" + iframes.length)
    newtab.setAttribute("class", "tab")
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
    newplus.setAttribute("class", "plus")
    newplus.onclick = createtab;
    document.getElementById('buttons').appendChild(newplus)
    console.log(iframe1)
    let iframe = document.createElement('iframe');
    iframe.src = "/proxy.html"
    iframe.classList.add('flex', 'justify-center', 'items-center')
    iframe.style.width = '90%';
    iframe.style.height = '100vh';
    iframe.setAttribute("id", "iframe" + iframes.length)
    iframe.setAttribute("class", "rounded-xl")
    iframe.setAttribute("class", "proxyframe")
    document.getElementById('iframecontainer').appendChild(iframe);
};

setInterval(() => {
    let alltabs = document.querySelectorAll(".tab")
    let allframes = document.getElementsByTagName("iframe")
    for (var i = 0; i < alltabs.length; i++) {
        const iframedoc = allframes[i + 1].contentDocument
        if (allframes[i] != document.getElementById('frame0')) {
            let tab = document.getElementById("tab" + (i + 1))
            console.log(i + 1)
            tab.innerHTML = iframedoc.title
        }
    }
}, 1000);
