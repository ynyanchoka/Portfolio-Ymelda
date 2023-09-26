    


    (function() {
        emailjs.init("2PO7sDX2CIGi46_Oz"); // Replace "YOUR_API_KEY" with your actual Email.js API key

        // Your JavaScript code here

        // Example: Sending an email
        document.getElementById("contact-form").addEventListener("submit", function(event) {
            event.preventDefault();
            
            const formData = new FormData(this);
            
            emailjs.sendForm("service_whe36la", "template_50wtm9s", formData)
                .then(function(response) {
                    console.log("Sent:", response);
                }, function(error) {
                    console.log("Failed:", error);
                });
        });
    })();

