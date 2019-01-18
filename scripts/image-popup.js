let popup = document.getElementById('popup');
let bobber = document.getElementById('bobber');
let scrambler = document.getElementById('scrambler');
let ironMan = document.getElementById('iron-man');
let popupImage = document.getElementById("popup-image");
let closeButton = document.getElementById("close-button");

function showPopup() {
    popup.style.display = "flex";
    popupImage.src = this.src;
}

function closePopup() {
    popup.style.display = "none";
}

bobber.addEventListener("click", showPopup);
scrambler.addEventListener("click", showPopup);
ironMan.addEventListener("click", showPopup);
closeButton.addEventListener("click", closePopup);
