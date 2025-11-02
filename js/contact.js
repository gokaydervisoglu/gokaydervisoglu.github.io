function showError(message) {
    const contactError = document.getElementById("my-contact-error");
    contactError.textContent = message;
    contactError.className = "my-contact-error show";

    setTimeout(() => {
        contactError.className = "my-contact-error";
    }, 3000);
}

function showSuccess(message) {
    const contactError = document.getElementById("my-contact-error");
    contactError.style.background = "rgba(76, 175, 80, 0.95)";
    contactError.style.boxShadow = "0 10px 30px rgba(76, 175, 80, 0.3)";
    contactError.textContent = message;
    contactError.className = "my-contact-error show";

    setTimeout(() => {
        contactError.className = "my-contact-error";
        contactError.style.background = "rgba(255, 77, 77, 0.95)";
        contactError.style.boxShadow = "0 10px 30px rgba(255, 77, 77, 0.3)";
    }, 3000);
}

function submitForm(event) {
    event.preventDefault();

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!name) {
        showError("Please enter your name.");
        return;
    }
    if (!email) {
        showError("Please enter your email.");
        return;
    }
    if (!emailPattern.test(email)) {
        showError("Please enter a valid email address.");
        return;
    }
    if (!message) {
        showError("Please enter a message.");
        return;
    }

    const mailtoLink = `mailto:gokaydervisoglu@gmail.com?subject=Contact from ${encodeURIComponent(name)}&body=${encodeURIComponent(message + "\n\n---\nSent from gokaydervisoglu.com")}`;

    showSuccess("Form submitted successfully! Redirecting to email...");
    
    setTimeout(() => {
        window.location.href = mailtoLink;
    }, 1500);
}
