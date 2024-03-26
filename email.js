// EmailJS code

function sendMail(){
    let params = {
      subject: document.getElementById("subject").value,
      name: document.getElementById("name").value,
      email: document.getElementById("email").value, 
      message: document.getElementById("message").value,
    }
  
    emailjs.send("service_eajyrbg", "template_cq4p56b", params)
    .then(function(response) {
        console.log("Email sent successfully:", response);
        alert("Email Sent.");
        document.getElementById("contact-form").reset();
    }, function(error) {
        console.error("Email sending failed:", error);
        alert("Failed to send email. Please try again later.");
    });
  }