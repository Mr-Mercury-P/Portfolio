document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("contactForm").addEventListener("submit", function(event) {
        event.preventDefault();

        var name = document.getElementById("nameInput").value;
        var email = document.getElementById("emailInput").value;
        var message = document.getElementById("messageInput").value;

        alert("Form submitted successfully!\nName: " + name + "\nEmail: " + email + "\nMessage: " + message);
    });
});

function openProject(projectId) {
    alert("You clicked on " + projectId);
}
