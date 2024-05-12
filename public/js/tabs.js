let tabsactive = 1
const iframes = document.getElementsByTagName('iframe')
function closetab(e) {
    console.log("closing")
    let xnum = e.target.id.substring(1)
    document.getElementById('tabholder' + xnum).remove()
    document.getElementById('iframe' + xnum).remove()
    tabsactive -= 1
}
function switchtab(e) {
    let tabnum = e.target.id.substring(3)
    for (var i = 0; i < iframes.length; i++) {
        iframes[i].style.display = 'none'
    }
    iframes[tabnum].style.display = 'block'
}

function tab1() {
    for (var i = 0; i < iframes.length; i++) {
        iframes[i].style.display = 'none'
    }
    document.getElementById('iframe-1').style.display = 'block'
}


function newholder() {
    let tabholder = document.createElement('div')
    tabholder.id = "tabholder" + tabsactive
    tabholder.setAttribute("class", "tabholder")
    document.getElementById("buttons").appendChild(tabholder)
    let tab = document.createElement('button')
    tab.id = "tab" + tabsactive
    tab.setAttribute("class", "tab")
    tab.innerHTML = "New Tab " + tabsactive
    tab.onclick = switchtab;
    document.getElementById("tabholder" + tabsactive).appendChild(tab)
    let X = document.createElement("button")
    X.id = "X" + tabsactive
    X.setAttribute("class", "X")
    X.innerHTML = "X"
    X.onclick = closetab;
    document.getElementById("tabholder" + tabsactive).appendChild(X)
}

function plus() {
    document.getElementById("plus").remove()
    let newplus = document.createElement('button')
    newplus.id = "plus"
    newplus.setAttribute("class", "plus")
    newplus.innerHTML = "+"
    newplus.onclick = createtab;
    document.getElementById("buttons").appendChild(newplus)
    
}


function createtab() {
    newholder()
    plus()

    for (var i = 0; i < iframes.length; i++) {
        iframes[i].style.display = 'none'
    }

    let newframe = document.createElement("iframe")
    newframe.id = "iframe" + tabsactive
    newframe.setAttribute("class", "proxyframe")
    newframe.src = "/proxy.html"
    document.getElementById("iframecontainer").appendChild(newframe)
    tabsactive += 1
    console.log(tabsactive)

}

setInterval(() => {
    let tabholders = document.querySelectorAll(".tabholder")
    let Xs = document.querySelectorAll(".X")
    let tabs = document.querySelectorAll(".tab")
    let frames = document.querySelectorAll('.proxyframe')
    for (var i = 0; i < tabsactive; i++) {
        try {
            tabholders[i].id = "tabholder" + (i + 1)
        } catch {

        }
    }
    for (var i = 0; i < tabsactive; i++) {
        try {
            Xs[i].id = "X" + (i + 1)
        } catch {

        }
    }
    for (var i = 0; i < tabsactive; i++) {
        try {
            tabs[i].id = "tab" + (i + 1)
        } catch {

        }
    }
    for (var i = 0; i < tabsactive; i++) {
        try {
            frames[i].id = "iframe" + (i + 1)
        } catch {

        }
    }
}, 100);

