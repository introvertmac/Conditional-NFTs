// Function to get the Phantom provider, or open Phantom's website if not installed
function getPhantomProvider() {
    if ('phantom' in window) {
        const provider = window.phantom?.solana;
        if (provider?.isPhantom) {
            return provider; // Phantom is installed
        }
    }

    // If Phantom is not installed, redirect users to download Phantom
    window.open('https://phantom.app/', '_blank');
    return null;
}

// Display status based on the Phantom wallet detection
function displayStatus() {
    const statusElement = document.getElementById('status');
    const provider = getPhantomProvider();
    if (provider) {
        statusElement.textContent = "Phantom Wallet Detected!";
        statusElement.classList.add('detected');
    } else {
        statusElement.textContent = "Redirecting to Phantom Wallet...";
        statusElement.classList.add('not-detected');
    }
}

// Run displayStatus on page load
window.onload = displayStatus;
