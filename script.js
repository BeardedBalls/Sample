// Example JavaScript (for form handling)
const form = document.getElementById('contact-form');

form.addEventListener('submit', function(event) {
    event.preventDefault();
    const formData = new FormData(this);
    // You can handle form data submission here (e.g., using fetch() to send data to a server)
    // Example:
    // fetch('submit.php', {
    //     method: 'POST',
    //     body: formData
    // })
    // .then(response => response.json())
    // .then(data => {
    //     // Handle response
    // })
    // .catch(error => console.error('Error:', error));
    this.reset();
});
