document.addEventListener('DOMContentLoaded', function() {
    var form = document.getElementById('contactForm');
    
    if (form) {
        form.addEventListener('submit', function(event) {
            event.preventDefault();
            
            var name = document.getElementById('name').value;
            var email = document.getElementById('email').value;
            var message = document.getElementById('message').value;
            var messageDiv = document.getElementById('formMessage');
            
            if (name.length < 2) {
                messageDiv.innerHTML = '<div style="background-color: #ffcccc; padding: 15px; border-radius: 4px; color: #cc0000;">❌ Please enter your full name.</div>';
                return;
            }
            
            if (email.indexOf('@') === -1 || email.indexOf('.') === -1) {
                messageDiv.innerHTML = '<div style="background-color: #ffcccc; padding: 15px; border-radius: 4px; color: #cc0000;">❌ Please enter a valid email address.</div>';
                return;
            }
            
            if (message.length < 10) {
                messageDiv.innerHTML = '<div style="background-color: #ffcccc; padding: 15px; border-radius: 4px; color: #cc0000;">❌ Please enter a message (at least 10 characters).</div>';
                return;
            }
            
            messageDiv.innerHTML = '<div style="background-color: #ccffcc; padding: 15px; border-radius: 4px; color: #006600;">✅ Thank you! We will contact you soon.</div>';
            form.reset();
            
            setTimeout(function() {
                messageDiv.innerHTML = '';
            }, 5000);
        });
    }
    
    console.log('🌿 GreenTech Solutions loaded successfully!');
});