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


window.toggleFAQ = function(faqId) {
    var answerDiv = document.getElementById(faqId);
    
    if (answerDiv.style.display === 'none' || answerDiv.style.display === '') {
        var allFaqs = document.querySelectorAll('[id^="faq"]');
        for (var i = 0; i < allFaqs.length; i++) {
            allFaqs[i].style.display = 'none';
        }
        answerDiv.style.display = 'block';
    } else {
        answerDiv.style.display = 'none';
    }
};

var themeToggle = document.getElementById('themeToggle');

if (themeToggle) {
    themeToggle.addEventListener('click', function() {
        document.body.classList.toggle('dark-mode');
        if (document.body.classList.contains('dark-mode')) {
            localStorage.setItem('theme', 'dark');
        } else {
            localStorage.setItem('theme', 'light');
        }
    });
    
    if (localStorage.getItem('theme') === 'dark') {
        document.body.classList.add('dark-mode');
    }
}
var newsletterForms = document.querySelectorAll('#newsletterForm');

for (var j = 0; j < newsletterForms.length; j++) {
    newsletterForms[j].addEventListener('submit', function(event) {
        event.preventDefault();
        var msgDiv = this.querySelector('#newsletterMessage') || document.createElement('div');
        msgDiv.innerHTML = '<div style="background-color: #ccffcc; padding: 10px; border-radius: 4px; color: #006600; margin-top: 10px;">✅ Subscribed successfully!</div>';
        this.appendChild(msgDiv);
        this.querySelector('input[type="email"]').value = '';
        
        setTimeout(function() {
            msgDiv.innerHTML = '';
        }, 3000);
    });
}

var themeToggle = document.getElementById('themeToggle');

if (themeToggle) {
    themeToggle.addEventListener('click', function() {
        document.body.classList.toggle('dark-mode');
        if (document.body.classList.contains('dark-mode')) {
            localStorage.setItem('theme', 'dark');
        } else {
            localStorage.setItem('theme', 'light');
        }
    });
    
    if (localStorage.getItem('theme') === 'dark') {
        document.body.classList.add('dark-mode');
    }
}
var currentPage = window.location.pathname.split('/').pop() || 'index.html';
var navLinks = document.querySelectorAll('.nav a');

for (var k = 0; k < navLinks.length; k++) {
    var linkHref = navLinks[k].getAttribute('href');
    if (linkHref === currentPage) {
        navLinks[k].style.fontWeight = 'bold';
        navLinks[k].style.textDecoration = 'underline';
    }
}
var currentPage = window.location.pathname.split('/').pop() || 'index.html';
var navLinks = document.querySelectorAll('.nav a');

for (var k = 0; k < navLinks.length; k++) {
    var linkHref = navLinks[k].getAttribute('href');
    if (linkHref === currentPage) {
        navLinks[k].style.fontWeight = 'bold';
        navLinks[k].style.textDecoration = 'underline';
    }
}