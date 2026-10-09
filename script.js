// ========================================
// CIVIL PROJECT MONITORING SYSTEM
// JavaScript DOM
// ========================================

console.log("CPMS Website Loaded");


// ========================================
// DOM LOADED
// ========================================

document.addEventListener("DOMContentLoaded", function () {

    console.log("DOM Loaded Successfully");


    // ====================================
    // 1. ACTIVE NAVIGATION
    // ====================================

    let currentPage = window.location.pathname.split("/").pop();

    if (currentPage === "") {
        currentPage = "index.html";
    }

    let navLinks = document.querySelectorAll("nav a");

    navLinks.forEach(function (link) {

        let page = link.getAttribute("href");

        link.classList.remove("active");

        if (page === currentPage) {
            link.classList.add("active");
        }

    });


    // ====================================
    // 2. PROGRESS BAR ANIMATION
    // ====================================

    let progressBars =
        document.querySelectorAll(".progress div");

    progressBars.forEach(function (bar) {

        let finalWidth = bar.style.width;

        bar.style.width = "0%";

        setTimeout(function () {

            bar.style.width = finalWidth;

        }, 300);

    });


    // ====================================
    // 3. PROJECT CARD CLICK
    // ====================================

    let projectCards =
        document.querySelectorAll(".project-card");

    projectCards.forEach(function (card) {

        card.addEventListener("click", function (event) {

            // Do not show alert when clicking View Details
            if (event.target.tagName === "A") {
                return;
            }

            let projectName =
                card.querySelector("h3");

            if (projectName) {

                alert(
                    "You selected: " +
                    projectName.textContent
                );

            }

        });

    });


    // ====================================
    // 4. BUTTON HOVER
    // ====================================

    let buttons =
        document.querySelectorAll(".btn");

    buttons.forEach(function (button) {

        button.addEventListener(
            "mouseenter",
            function () {

                button.style.transform =
                    "translateY(-3px)";

            }
        );


        button.addEventListener(
            "mouseleave",
            function () {

                button.style.transform =
                    "translateY(0)";

            }
        );

    });


    // ====================================
    // 5. DYNAMIC COPYRIGHT YEAR
    // ====================================

    let copyright =
        document.querySelector(".copyright");

    if (copyright) {

        let year =
            new Date().getFullYear();

        copyright.textContent =
            "© " + year +
            " Civil Project Monitoring System";

    }

});


// ========================================
// VIEW PROJECTS
// ========================================

function viewProjects() {

    window.location.href =
        "projects.html";

}


// ========================================
// SHOW PROJECT
// ========================================

function showProject(name) {

    alert(
        "You selected: " + name
    );

}


// ========================================
// DOWNLOAD REPORT
// ========================================

function downloadReport() {

    alert(
        "Sample report is ready for download."
    );

}


// ========================================
// CONTACT FORM
// ========================================

function submitForm() {

    alert(
        "Thank you! Your message has been submitted."
    );

}