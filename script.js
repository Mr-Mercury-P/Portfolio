document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("contactForm").addEventListener("submit", function(event) {
        event.preventDefault();

        var name = document.getElementById("name").value;
        var email = document.getElementById("email").value;
        var message = document.getElementById("message").value;

        alert("Form submitted successfully!\nName: " + name + "\nEmail: " + email + "\nMessage: " + message);
    });
});

function openProject(projectId) {
    alert("You clicked on " + projectId);
}
