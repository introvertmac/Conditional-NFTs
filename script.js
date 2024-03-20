// Toggle the visibility of the popup
function togglePopup() {
    const popup = document.getElementById('popup');
    popup.classList.toggle('hidden');
}

// Show options or messages in the popup based on Phantom wallet detection
function detectPhantomWallet() {
    const walletText = document.getElementById('walletConnectText');
    const phantomLink = document.getElementById('phantomLink');

    if (window.phantom?.solana?.isPhantom) {
        // Phantom is detected, prepare to connect
        phantomLink.textContent = "Connect Phantom Wallet";
        phantomLink.onclick = async function() {
            try {
                // Attempt to connect to the Phantom wallet
                const response = await window.phantom.solana.connect();
                console.log("Wallet Connected:", response.publicKey.toString());
                // Handle successful connection, e.g., redirecting to a profile page
                window.location.href = `profile.html?publicKey=${response.publicKey.toString()}`;
            } catch (error) {
                console.error("Got error:", error);
                walletText.textContent = "Failed to connect. Please try again.";
                if (error.message === "User rejected the request.") {
                    alert("Connection request was rejected. Please try again.");
                } else {
                    alert("Failed to connect. Please try again later.");
                }
            }
        };
    } else {
        // Phantom is not detected, offer link to download
        walletText.innerHTML = "Phantom Wallet not detected.";
        phantomLink.textContent = "Get Phantom Wallet";
        phantomLink.classList.remove('hidden');
        phantomLink.href = "https://phantom.app/";
        phantomLink.target = "_blank";
    }
}

document.getElementById('connectButton').addEventListener('click', () => {
    togglePopup();
    detectPhantomWallet();
});

// Optionally, handle clicks outside the popup to close it
window.onclick = function(event) {
    const popup = document.getElementById('popup');
    if (event.target == popup) {
        togglePopup();
    }
};
