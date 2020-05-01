let forward = false;
let right = false;
let left = false;
let back = false;

document.addEventListener("keydown", (e) => {
    if (e.key == "w") {
        forward = true
    } else if (e.key == "d") {
        right = true
    } else if (e.key == "a") {
        left = true
    } else if (e.key == "s") {
        back = true
    }
})
document.addEventListener("keyup", e => {
    if (e.key == "w") {
        forward = false
    } else if (e.key == "d") {
        right = false
    } else if (e.key == "a") {
        left = false
    } else if (e.key == "s") {
        back = false
    }
})