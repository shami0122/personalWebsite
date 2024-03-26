function validateForm() {
    // Perform custom validation logic here
    // Check if all required fields are filled out

    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var subject = document.getElementById('subject').value;
    var message = document.getElementById('message').value;

    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!name || !email || !subject || !message) {
        alert('Please fill out all required fields.');
        return false; // Prevent form submission
    } else if (!emailRegex.test(email)) {
        alert('Please enter a valid email address.');
        return false; // Prevent form submission
    } else {
        // If form is valid, call sendMail() function
        sendMail();
        return false; // Prevent form submission
    }
}

function sendMail(){
    let params = {
      name: document.getElementById("name").value,
      email: document.getElementById("email").value,
      subject: document.getElementById("subject").value,
      message: document.getElementById("message").value,
    }
  
    emailjs.send("service_eajyrbg", "template_cq4p56b", params)
    .then(function(response) {
        console.log("Email sent successfully:", response);
        alert("Email Sent.");
        document.getElementById("contact-form").reset(); // Reset the form
    }, function(error) {
        console.error("Email sending failed:", error);
        alert("Failed to send email. Please try again later.");
    });
  }