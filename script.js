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

