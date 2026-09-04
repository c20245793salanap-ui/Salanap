console.log("Hello world.");
console.log("From script.js file.");

const myName = "ARJAY";
let age = 20;
const number = "090946300889";
const address = "DITO LANG SA TABI TABI";

console.log(`Name: ${myName}`);
console.log(`Age: ${age}`);
console.log(`Number: ${number}`);
console.log(`Address: ${address}`);
console.log(67);

function greet(greetings, names = []) {
    if (Array.isArray(names)) {
        names = names.join(", ");
    }
    return `${greetings} sa enyu ${names}`;
}
console.log(greet("Mayung aga", ["Mark", "papalada", "yambot", "mamalada", "moew"]));


const heading = document.querySelector("h1");
heading.textContent = "ARJAY C. SALANAP.";
heading.style.color = "PURPLE";
heading.style.backgroundColor = "YELLOW";
heading.style.fontSize = "100px";
console.log(heading.textContent);

heading.addEventListener("click", function () {
    heading.style.color = "RED";
    console.log("Heading was clicked")
})

const contactHeading = document.querySelector("#contact h2");
console.log(contactHeading);

const projectsHeadingHeading = document.querySelector("#services h2");
console.log(projectsHeadingHeading);

const toggleButton = document.querySelector("#switch");
const body = document.querySelector("body");
let isOFF = false;

toggleButton.addEventListener("click", function () {
    isOFF = !isOFF;

    if (isOFF) {
        body.style.backgroundColor = "black";
        body.style.color = "white";
    } else {
        body.style.backgroundColor = "white";
        body.style.color = "black";
    }
})





