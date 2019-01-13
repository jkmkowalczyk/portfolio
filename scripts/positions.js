let homeSection = document.getElementById("home");
let aboutSection = document.getElementById("about");
let experienceSection = document.getElementById("experience");
let skillsSection = document.getElementById("skills");
let contactSection = document.getElementById("contact");
let homeLink = document.getElementById("home-link");
let aboutLink = document.getElementById("about-link");
let experienceLink = document.getElementById("experience-link");
let skillsLink = document.getElementById("skills-link");
let contactLink = document.getElementById("contact-link");
let contactButton = document.getElementById('contact-button');
let clientWidth;
let pageYOffset;
let homeSectionTop;
let aboutSectionTop;
let experienceSectionTop;
let skillsSectionTop;
let contactSectionTop;

setSectionHeight();

function setSectionTop() {
    homeSectionTop = homeSection.getBoundingClientRect().top - pageYOffset;
    aboutSectionTop = aboutSection.getBoundingClientRect().top - pageYOffset;
    experienceSectionTop = experienceSection.getBoundingClientRect().top - pageYOffset;
    skillsSectionTop = skillsSection.getBoundingClientRect().top - pageYOffset;
    contactSectionTop = contactSection.getBoundingClientRect().top - pageYOffset;
}

function setSectionHeight() {
    clientWidth = document.documentElement.clientWidth;
    const clientHeight = document.documentElement.clientHeight;
    let sections = document.getElementsByTagName("section");
    console.log(clientHeight);
    for (let i = 0; i < sections.length; i++) {
        if (clientWidth < 1000)
            sections[i].style.height = clientHeight - 60 + 'px';
        else
            sections[i].style.height = clientHeight + 'px';
    }
}

function setActiveLink() {
    let scrollValue;
    if (clientWidth < 1000)
        scrollValue = pageYOffset * -1 + 160;
    else
        scrollValue = pageYOffset * -1 + 100;


    if (scrollValue <= aboutSectionTop) {
        homeLink.classList.add("active-link");
    } else {
        homeLink.classList.remove("active-link");
    }
    if (scrollValue >= aboutSectionTop && scrollValue < experienceSectionTop) {
        aboutLink.classList.add("active-link");
    } else {
        aboutLink.classList.remove("active-link");
    }
    if (scrollValue >= experienceSectionTop && scrollValue < skillsSectionTop) {
        experienceLink.classList.add("active-link");
    } else {
        experienceLink.classList.remove("active-link");
    }
    if (scrollValue >= skillsSectionTop && scrollValue < contactSectionTop) {
        skillsLink.classList.add("active-link");
    } else {
        skillsLink.classList.remove("active-link");
    }
    if (scrollValue >= contactSectionTop) {
        contactLink.classList.add("active-link");
    } else {
        contactLink.classList.remove("active-link");
    }
}

function setUp() {
    console.log('setup')
    pageYOffset = document.body.getBoundingClientRect().top;

    setSectionTop();
    setActiveLink();
}

function scrollToHome() {
    if (clientWidth < 1000)
        window.scrollTo(0, homeSectionTop - 60);
    else
        window.scrollTo(0, homeSectionTop);
}

function scrollToAbout() {
    if (clientWidth < 1000)
        window.scrollTo(0, aboutSectionTop - 60);
    else
        window.scrollTo(0, aboutSectionTop);
}

function scrollToExperience() {
    if (clientWidth < 1000)
        window.scrollTo(0, experienceSectionTop - 60);
    else
        window.scrollTo(0, experienceSectionTop);
}

function scrollToSkills() {
    if (clientWidth < 1000)
        window.scrollTo(0, skillsSectionTop - 60);
    else
        window.scrollTo(0, skillsSectionTop);
}

function scrollToContact() {
    if (clientWidth < 1000)
        window.scrollTo(0, contactSectionTop - 60);
    else
        window.scrollTo(0, contactSectionTop);
}

window.addEventListener("load", setUp);
window.addEventListener("scroll", setUp);
window.addEventListener("resize", setUp);
homeLink.addEventListener("click", scrollToHome);
aboutLink.addEventListener("click", scrollToAbout);
experienceLink.addEventListener("click", scrollToExperience);
skillsLink.addEventListener("click", scrollToSkills);
contactLink.addEventListener("click", scrollToContact);
contactButton.addEventListener("click", scrollToContact);