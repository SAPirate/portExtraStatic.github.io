
// 1st tab

const tabs = document.querySelectorAll('[data-tab-target]')
const tabContents = document.querySelectorAll('[data-tab-content]')


tabs.forEach(tab => {
    tab.addEventListener('click', () => {
        const target = document.querySelector(tab.dataset.tabTarget)
        tabContents.forEach(tabContent => {
            tabContent.classList.remove('active');
    })

    tabs.forEach(tab => {
        tab.classList.remove('active');
})

     tab.classList.add('active');
     target.classList.add('active');
    })
});


const form = document.getElementById('ticketForm');
const popup = document.getElementById('popup');
const overlay = document.getElementById('popup-overlay');
const confirmBtn = document.getElementById('confirm-popup');
const popupContent = document.getElementById('popup-content');

form.addEventListener('submit', function(event) {
    // Prevent the form from submitting
    event.preventDefault();

    // Get form values
    const name = document.getElementById('name').value;
    const surname = document.getElementById('surname').value;
    const identity = document.getElementById('identity').value;
    const email = document.getElementById('email').value;
    const pickup = document.getElementById('pickup').value;
    const destination = document.getElementById('destination').value;
    const date = document.getElementById('date').value;
    const tickets = document.getElementById('tickets').value;
    const train = document.getElementById('train-select').value;
    const time = document.getElementById('time-select').value;

    // Show the popup with the collected data
    popupContent.innerHTML = `
        <p><strong>Name:</strong> ${name} ${surname}</p>
        <p><strong>Identity Number:</strong> ${identity}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Pick-up:</strong> ${pickup}</p>
        <p><strong>Destination:</strong> ${destination}</p>
        <p><strong>Date:</strong> ${date}</p>
        <p><strong>Number of Tickets:</strong> ${tickets}</p>
        <p><strong>Train:</strong> ${train}</p>
        <p><strong>Time:</strong> ${time}</p>
    `;

    // Show the popup and overlay
    popup.style.display = 'block';
    overlay.style.display = 'block';
});

// Confirm button click - show success alert
confirmBtn.addEventListener('click', function() {
    alert("Ticket booking was successful!");
    popup.style.display = 'none';
    overlay.style.display = 'none';
});

// Close the popup when the overlay is clicked
overlay.addEventListener('click', function() {
    popup.style.display = 'none';
    overlay.style.display = 'none';
});