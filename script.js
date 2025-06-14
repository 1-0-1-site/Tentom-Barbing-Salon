
    window.addEventListener("DOMContentLoaded", () => {
        document.body.classList.add("fade-in");
    });


    const menuBtn = document.querySelector(".menu-toggle");
    const navLinks = document.querySelector(".nav-links");

    menuBtn.addEventListener("click", () => {
        navLinks.classList.toggle("active");
    });


    const form = document.querySelector("form");
    const dateInput = document.querySelector("#date");

    form.addEventListener("submit", function (e) {
    const selectedDate = new Date(dateInput.value);
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    if (selectedDate < today) {
    e.preventDefault();
    alert("Please select a future date.");
    }


    });