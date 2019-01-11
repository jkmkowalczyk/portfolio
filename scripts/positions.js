let aboutSection = document.getElementById("about");
let experienceSection = document.getElementById("experience");
let skillsSection = document.getElementById("skills");
let contactSection = document.getElementById("contact");
let homeLink = document.getElementById("home-link");
let aboutLink = document.getElementById("about-link");
let experienceLink = document.getElementById("experience-link");
let skillsLink = document.getElementById("skills-link");
let contactLink = document.getElementById("contact-link");
// const siteHeight = document.body.scrollHeight;
const clientHeight = document.documentElement.clientHeight;
let aboutSectionTop;
let experienceSectionTop;
let skillsSectionTop;
let contactSectionTop;
setSectionTop();
setSectionHeight();
setActiveLink();

function setSectionTop() {
    let boundingRectTop = document.body.getBoundingClientRect().top;
    aboutSectionTop = aboutSection.getBoundingClientRect().top - boundingRectTop;
    experienceSectionTop = experienceSection.getBoundingClientRect().top - boundingRectTop;
    skillsSectionTop = skillsSection.getBoundingClientRect().top - boundingRectTop;
    contactSectionTop = contactSection.getBoundingClientRect().top - boundingRectTop;
}


function setSectionHeight() {
    const clientHeight = document.documentElement.clientHeight;
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

function settings() {
    const scroll = window.pageYOffset || document.documentElement.scrollTop;
    const windowPosition = clientHeight + scroll;
    setActiveLink();
    setSectionHeight();
    setSectionTop();
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

window.addEventListener("load", settings);
window.addEventListener("scroll", settings);
window.addEventListener("resize", settings);
homeLink.addEventListener("click", scrollToHome);
aboutLink.addEventListener("click", scrollToAbout);
experienceLink.addEventListener("click", scrollToExperience);
skillsLink.addEventListener("click", scrollToSkills);
contactLink.addEventListener("click", scrollToContact);