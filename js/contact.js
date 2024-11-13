function showError(message) {
    const contactError = document.getElementById("my-contact-error");
    contactError.textContent = message;
    contactError.className = "my-contact-error show";

    setTimeout(() => {
        contactError.className = contactError.className.replace("show", "");
    }, 1500);
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

    const mailtoLink = `mailto:gokaydervisoglu@gmail.com?subject= ${encodeURIComponent(name)}&body=${encodeURIComponent(message)}`;

    
    setTimeout(() => {
        showError("Redirecting to mail application...");
        window.location.href = mailtoLink;
    }, 2000);
}
