const changeFocus1 = () => {
    let phone1 = document.getElementById("phone1").value
    if (phone1.length === 3) {
        document.getElementById("phone2").focus()
    }
}
const changeFocus2 = () => {
    let phone2 = document.getElementById("phone2").value
    if (phone2.length === 4) {
        document.getElementById("phone3").focus()
    }
}

let auth = () => {
    console.log

    const token = String(Math.floor(Math.random * 1000000)).padStart(6, "0")
    document.getElementById("target").innerText = token

    let time = 180;

    setInterval(function() {
        if (time >= 0) {
            let min = String(Math.floor(time/60))
            let sec = String(time % 60).padStart(2, "0")
            document.getElementById("check_time").innerText = min + ":" + sec
            time -= 1
        }
    }, 1000)
}