document.getElementById('contactForm').addEventListener('submit', function(e) {
    e.preventDefault(); // Prevent form submission for demo purposes

    // Retrieve form values
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    // Basic form validation
    if (name === "" || email === "" || message === "") {
        showResponseMessage("All fields are required.", "error");
    } else {
        // Prepare data for submission
        const formData = new FormData();
        formData.append('name', name);
        formData.append('email', email);
        formData.append('message', message);
        formData.append('access_key', '634d483d-8a4d-45f3-ae7f-3ae17353f2c9'); // API key

        // Send form data using Fetch API
        fetch('https://api.web3forms.com/submit', {
            method: 'POST',
            body: formData
        })
        .then(response => response.json())
        .then(data => {
            if (data.success) {
                showResponseMessage("Thank you for your message. We will get back to you soon!", "success");
            } else {
                showResponseMessage("There was an error submitting your message. Please try again.", "error");
            }
        })
        .catch(error => {
            showResponseMessage("There was an error with the request. Please try again.", "error");
        });

        // Reset the form fields after submission
        document.getElementById('contactForm').reset();
    }
});

function showResponseMessage(message, type) {
    const responseMessage = document.getElementById('responseMessage');
    responseMessage.textContent = message;
    responseMessage.className = `response-message ${type}`; // Assign success or error class
}
