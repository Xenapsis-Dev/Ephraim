let open = 0
function settings() {
    console.log("settings opened")
    if (open === 0) {
        open = 1
        document.getElementById('settings').style.display = "block"
    } else {
        open = 0
    }
    console.log(open)
}