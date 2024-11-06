function abouttext() {
    const description = document.getElementById('description');
    const button = document.getElementById('aboutButton');

    const shortText = "I am a computer engineering candidate with a strong sense of design and experience in various web-based projects. I have hands-on expertise in technologies such as Java, OOP, C#, .NET, C++, Maven, and SQL.";
    
    const fullText = "I am a computer engineering candidate with a strong sense of design and experience in various web-based projects. I have hands-on expertise in technologies such as Java, OOP, C#, .NET, C++, Maven, and SQL. I have also participated in projects like TÜBİTAK and TEKNOFEST, gaining valuable experience in the development process. My passion for technology drives me to continuously improve my skills and work on innovative projects, particularly in the fields of artificial intelligence. Recently, I have started focusing on image processing and am in the early stages of building expertise in this area.";

    const currentText = description.textContent.trim().replace(/\s+/g, " ");

    if (currentText === shortText) {
      description.textContent = fullText;
      button.textContent = "See Less";
  } else {
      description.textContent = shortText;
      button.textContent = "See More";
  }
  }