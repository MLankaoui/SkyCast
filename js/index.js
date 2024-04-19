function sendEmail() {
    Email.send({
        Host : "smtp.elasticemail.com",
        Username : "marouanelankaoui066@gmail.com",
        Password : "8B04A372C349681380E34BE216229432918C",
        To : 'marouanelankaoui066@gmail.com',
        From : document.getElementById('email').value,
        Subject : "New contact form enquiry",
        Body : "Name: " + document.getElementById('name').value
            + " <br> Email: " + document.getElementById('email').value
            + " <br> Message: " + document.getElementById('message').value
    }).then(
      message => alert('you have successfully sent the message')
    );
}