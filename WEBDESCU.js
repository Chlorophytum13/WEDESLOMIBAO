document.getElementById("contact-form").addEventListener("submit", function(event) {
  event.preventDefault();
  var name = document.getElementById("name").value;
  var email = document.getElementById("email").value;
  var message = document.getElementById("message").value;

  // Here you can add code to send the form data to your backend or handle it in any way you want
  
  document.getElementById("response").innerHTML = "<p>Thank you, " + name + ". Your message has been sent.</p>";
  document.getElementById("contact-form").reset();
});