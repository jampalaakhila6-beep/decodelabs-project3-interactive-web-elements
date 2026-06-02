// Dark Mode Toggle

const themeBtn = document.getElementById("themeBtn");

themeBtn.addEventListener("click", () => {

    document.body.classList.toggle("dark-mode");

    if(document.body.classList.contains("dark-mode")){
        themeBtn.textContent = "Disable Dark Mode";
    }
    else{
        themeBtn.textContent = "Enable Dark Mode";
    }

});


// Counter App

let count = 0;

const counter = document.getElementById("counter");

document.getElementById("increase").addEventListener("click", () => {
    count++;
    counter.textContent = count;
});

document.getElementById("decrease").addEventListener("click", () => {
    count--;
    counter.textContent = count;
});

document.getElementById("reset").addEventListener("click", () => {
    count = 0;
    counter.textContent = count;
});


// Dynamic Message

const messageBtn = document.getElementById("messageBtn");
const message = document.getElementById("message");

messageBtn.addEventListener("click", () => {

    message.textContent =
    "Welcome to DecodeLabs Frontend Development Internship 🚀";

});