const allDropdowns = []

function initialize() {
    allDropdowns.push(document.getElementById("Degrees"));
    allDropdowns.push(document.getElementById("Admissions"));
    allDropdowns.push(document.getElementById("academics"));
    allDropdowns.push(document.getElementById("studentExperience"));
    allDropdowns.push(document.getElementById("aboutUAT"));
    allDropdowns.push(document.getElementById("newsEvents"));
}

function onClickDegrees() {
    document.getElementById("Degrees").classList.toggle("show");
}

function onClickAdmission() {
    document.getElementById("Admissions").classList.toggle("show");
}

function onClickAcademics() {
    document.getElementById("academics").classList.toggle("show");
}

function onClickStudentExperience() {
    document.getElementById("studentExperience").classList.toggle("show");
}

function onClickAbout() {
    document.getElementById("aboutUAT").classList.toggle("show");
}

function onClickNewsEvents() {
    document.getElementById("newsEvents").classList.toggle("show");
}

window.onclick = function (event) {
    if (!event.target.matches('.dropbtn')) {
        allDropdowns.forEach(dropdownElement => {
            if (dropdownElement.classList.contains('show')) {
                dropdownElement.classList.remove('show');
            }
        })
    }
}