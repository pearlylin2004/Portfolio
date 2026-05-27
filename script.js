function copyEmail() {
    // The email address you want to copy
    var emailText = "pearlylin2004@gmail.com";

    // Copy the text inside the clipboard
    navigator.clipboard.writeText(emailText).then(function() {
        // Alert the user that it was successful
        alert("Copied to clipboard: " + emailText);
    }).catch(function(err) {
        console.error("Could not copy text: ", err);
    });
}

// Function to display a specific project modal window
function openModal(modalId) {
    const modal = document.getElementById(modalId);
    if (modal) {
        modal.classList.add('active');
        document.body.style.overflow = 'hidden'; // Locks baseline scroll mechanics
    }
}

// Function to close a specific project modal window
function closeModal(modalId) {
    const modal = document.getElementById(modalId);
    if (modal) {
        modal.classList.remove('active');
        document.body.style.overflow = ''; // Restores baseline scroll mechanics
    }
}

// Clean UI Check: Closes modal window if user clicks background overlay instead of card box
function closeModalOnOverlay(event) {
    if (event.target === event.currentTarget) {
        closeModal(event.target.id);
    }
}