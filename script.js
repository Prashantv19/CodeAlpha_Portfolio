// Toggle menu on mobile
document.addEventListener("DOMContentLoaded", function () {
    const menuIcon = document.getElementById("menu-icon");
    const navMenu = document.getElementById("nav-menu");

    menuIcon.addEventListener("click", () => {
        navMenu.classList.toggle("active");
    });

    // Optional: Close the menu when a link is clicked (mobile UX)
    const navLinks = navMenu.querySelectorAll("a");
    navLinks.forEach(link => {
        link.addEventListener("click", () => {
            navMenu.classList.remove("active");
        });
    });
});
// Smooth scroll to "Get in Touch" when "Let's connect" is clicked
document.getElementById("connect-btn").addEventListener("click", function () {
    document.getElementById("contact").scrollIntoView({
        behavior: "smooth"
    });
});

// Download CV when "Download CV" is clicked
document.getElementById("download-cv-btn").addEventListener("click", function () {
    // Replace the path with your actual CV file path
    const cvUrl = "assets/Prashant_Resume.pdf";
    const link = document.createElement("a");
    link.href = cvUrl;
    link.download = "Prashant_Resume.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
});
// Form Submission to Firestore
document.addEventListener("DOMContentLoaded", function () {
    const form = document.querySelector(".contact-form");

    form.addEventListener("submit", function (e) {
        e.preventDefault();

        const name = document.getElementById("name").value;
        const email = document.getElementById("email").value;
        const message = document.getElementById("message").value;

        db.collection("contacts").add({
            name: name,
            email: email,
            message: message,
            timestamp: firebase.firestore.FieldValue.serverTimestamp()
        })
        .then(() => {
            alert("Your message has been submitted!");
            form.reset();
        })
        .catch((error) => {
            console.error("Error submitting message: ", error);
            alert("Error! Message not submitted.");
        });
    });
});
