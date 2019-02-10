let popup = document.getElementById('popup');
let bobber = document.getElementById('bobber');
let scrambler = document.getElementById('scrambler');
let ironMan = document.getElementById('iron-man');
let popupImage = document.getElementById("popup-image");
let closeButton = document.getElementById("close-button");

function showPopup() {
    disableScroll();
    popup.style.display = "flex";
    popupImage.src = this.src;
}

function closePopup() {
    enableScroll();
    popup.style.display = "none";
}

function preventDefault(e) {
    e = e || window.event;
    if (e.preventDefault)
        e.preventDefault();
    e.returnValue = false;
}

function preventDefaultForScrollKeys(e) {
    let keys = {37: 1, 38: 1, 39: 1, 40: 1};
    if (keys[e.key]) {
        preventDefault(e);
        return false;
    }
}

function disableScroll() {
    window.onwheel = preventDefault;
    window.onmousewheel = document.onmousewheel = preventDefault;
    window.ontouchmove = preventDefault;
    document.onkeydown = preventDefaultForScrollKeys;
}

function enableScroll() {
    window.onmousewheel = document.onmousewheel = null;
    window.onwheel = null;
    window.ontouchmove = null;
    document.onkeydown = null;
}


bobber.addEventListener("click", showPopup);
scrambler.addEventListener("click", showPopup);
ironMan.addEventListener("click", showPopup);
closeButton.addEventListener("click", closePopup);
