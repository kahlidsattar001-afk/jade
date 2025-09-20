// Hide all <section> elements
document.querySelectorAll("section").forEach(element => {
    element.style.display = "none";
});

// Hide element with ID #MainContent
const mainContent = document.querySelector("#MainContent");
if (mainContent) {
    mainContent.style.display = "none";
}

console.log("✅Lory lag gay successfully.");
