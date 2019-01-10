let ups = document.getElementById("experience-grid-ups");
let spyroSoft = document.getElementById("experience-grid-spyro-soft");
let ccaEurope = document.getElementById("experience-grid-cca-europe");
let lideo = document.getElementById("experience-grid-lideo");
let upsDescription = document.getElementById("experience-grid-ups-desc");
let spyroSoftDescription = document.getElementById("experience-grid-spyro-soft-desc");
let ccaEuropeDescription = document.getElementById("experience-grid-cca-europe-desc");
let lideoDescription = document.getElementById("experience-grid-lideo-desc");
let descriptions = document.getElementsByClassName("experience-grid-desc");

lideoDescription.style.opacity = 1;

function showDescription(description) {
    for (let i = 0; i < descriptions.length; i++) {
        descriptions[i].style.opacity = 0;
    }
    description.style.opacity = 1;
}

ups.addEventListener("mouseover", function () {
    showDescription(upsDescription)
});
spyroSoft.addEventListener("mouseover", function () {
    showDescription(spyroSoftDescription)
});
ccaEurope.addEventListener("mouseover", function () {
    showDescription(ccaEuropeDescription)
});
lideo.addEventListener("mouseover", function () {
    showDescription(lideoDescription)
});