function submitForm(event) {
  event.preventDefault();

  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const message = document.getElementById("message").value.trim();

  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (!name) {
      alert("Please enter your name.");
      return;
  }
  if (!email) {
      alert("Please enter your email.");
      return;
  }
  if (!emailPattern.test(email)) {
      alert("Please enter a valid email address.");
      return;
  }
  if (!message) {
      alert("Please enter a message.");
      return;
  }

  const mailtoLink = `mailto:gokaydervisoglu@gmail.com?subject=Contact from ${encodeURIComponent(name)}&body=${encodeURIComponent(message)}`;

  alert("All fields are valid. Redirecting to your mail application...");
  window.location.href = mailtoLink;
}