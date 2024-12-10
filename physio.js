const form = document.getElementById('appointmentForm');
const popup = document.getElementById('popup');
const popupName = document.getElementById('popupName');
const popupEmail = document.getElementById('popupEmail');
const popupAppointment = document.getElementById('popupAppointment');
const popupMessage = document.getElementById('popupMessage');

// Handle form submission
form.addEventListener('submit', function(event) {
    event.preventDefault();  // Prevent form from submitting to server

    // Get values from form fields
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const appointment = document.getElementById('appointment').value;
    const message = document.getElementById('message').value;

    // Update the popup with the form data
    popupName.textContent = name;
    popupEmail.textContent = email;
    popupAppointment.textContent = appointment;
    popupMessage.textContent = message;

    // Show the popup
    popup.style.display = 'flex';
});

// Confirm details and show success alert
function confirmDetails() {
    // Show confirmation alert
    alert("Your appointment has been booked successfully!");

    // Close the popup after confirmation
    closePopup();
}

// Close the popup
function closePopup() {
    popup.style.display = 'none';
}