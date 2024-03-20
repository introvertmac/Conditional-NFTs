function toggleDropdown() {
    const dropdownContent = document.getElementById("dropdown-content");
    dropdownContent.classList.toggle("show");
}

// Extract the public key from the URL parameters
function getPublicKeyFromURL() {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get('publicKey');
}

// Setup the profile page functionalities
function setupProfilePage() {
    // Display the public key
    const publicKey = getPublicKeyFromURL();
    document.getElementById('publicKey').textContent = publicKey || 'Unavailable';

    // Handle the disconnect functionality
    document.getElementById('disconnect').addEventListener('click', async () => {
        try {
            await window.phantom?.solana.disconnect();
            alert('Wallet disconnected successfully.');
            window.location.href = 'index.html'; // Redirect back to the main page
        } catch (error) {
            console.error('Error disconnecting wallet:', error);
            alert('Failed to disconnect the wallet.');
        }
    });
}

document.addEventListener('DOMContentLoaded', setupProfilePage);

// Close the dropdown if the user clicks outside of it
window.onclick = function(event) {
    if (!event.target.matches('#avatar')) {
        const dropdowns = document.getElementsByClassName("dropdown-content");
        for (let i = 0; i < dropdowns.length; i++) {
            let openDropdown = dropdowns[i];
            if (openDropdown.classList.contains('show')) {
                openDropdown.classList.remove('show');
            }
        }
    }
};
