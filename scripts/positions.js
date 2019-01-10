let aboutSection = document.getElementById("about");
let experienceSection = document.getElementById("experience");
let skillsSection = document.getElementById("skills");
let contactSection = document.getElementById("contact");

// const siteHeight = document.body.scrollHeight;
const clientHeight = document.documentElement.clientHeight;
setSectionHeight();

const boundingRectTop = document.body.getBoundingClientRect().top;
const aboutSectionTop = aboutSection.getBoundingClientRect().top - boundingRectTop;
const experienceSectionTop = experienceSection.getBoundingClientRect().top - boundingRectTop;
const skillsSectionTop = skillsSection.getBoundingClientRect().top - boundingRectTop;
const contactSectionTop = contactSection.getBoundingClientRect().top - boundingRectTop;

let homeLink = document.getElementById("home-link");
let aboutLink = document.getElementById("about-link");
let experienceLink = document.getElementById("experience-link");
let skillsLink = document.getElementById("skills-link");
let contactLink = document.getElementById("contact-link");


function setSectionHeight() {
    const clientHeight = document.documentElement.clientHeight;
    console.log(experienceSection.getBoundingClientRect().top);
    let sections = document.getElementsByTagName("section");
    for (let i = 0; i < sections.length; i++) {
        sections[i].style.height = clientHeight + 'px';
    }
}

function setActiveLink() {
    const scroll = window.pageYOffset + 1 || document.documentElement.scrollTop + 1;
    if (scroll <= aboutSectionTop) {
        homeLink.classList.add("active-link");
    } else {
        homeLink.classList.remove("active-link");
    }

    if (scroll >= aboutSectionTop && scroll < experienceSectionTop) {
        aboutLink.classList.add("active-link");
    } else {
        aboutLink.classList.remove("active-link");
    }
    if (scroll >= experienceSectionTop && scroll < skillsSectionTop) {
        experienceLink.classList.add("active-link");
    } else {
        experienceLink.classList.remove("active-link");
    }

    if (scroll >= skillsSectionTop && scroll < contactSectionTop) {
        skillsLink.classList.add("active-link");
    } else {
        skillsLink.classList.remove("active-link");
    }

    if (scroll >= contactSectionTop) {
        contactLink.classList.add("active-link");
    } else {
        contactLink.classList.remove("active-link");
    }
}

function onScroll() {
    const scroll = window.pageYOffset || document.documentElement.scrollTop;
    const windowPosition = clientHeight + scroll;
    setActiveLink();
    setSectionHeight();
}

function scrollToHome() {
    window.scrollTo(0, 0);
}

function scrollToAbout() {
    window.scrollTo(0, aboutSectionTop);
}

function scrollToExperience() {
    window.scrollTo(0, experienceSectionTop);
}

function scrollToSkills() {
    window.scrollTo(0, skillsSectionTop);
}

function scrollToContact() {
    window.scrollTo(0, contactSectionTop);
}

window.addEventListener("load", onScroll);
window.addEventListener("scroll", onScroll);
homeLink.addEventListener("click", scrollToHome);
aboutLink.addEventListener("click", scrollToAbout);
experienceLink.addEventListener("click", scrollToExperience);
skillsLink.addEventListener("click", scrollToSkills);
contactLink.addEventListener("click", scrollToContact);

