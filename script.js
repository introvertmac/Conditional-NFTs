function togglePopup() {
    const popup = document.getElementById('popup');
    popup.classList.toggle('hidden');
}

function showWalletConnectOption() {
    const walletText = document.getElementById('walletConnectText');
    const phantomLink = document.getElementById('phantomLink');
    walletText.innerHTML = "Phantom Wallet not detected.";
    phantomLink.textContent = "Get Phantom Wallet";
    phantomLink.classList.remove('hidden');
    phantomLink.addEventListener('click', () => window.open('https://phantom.app/', '_blank'));
}

document.getElementById('connectButton').addEventListener('click', () => {
    togglePopup();
    if (!window.phantom?.solana?.isPhantom) {
        showWalletConnectOption();
    } else {
        const walletText = document.getElementById('walletConnectText');
        walletText.innerHTML = "Connecting to Phantom Wallet...";
        const phantomLink = document.getElementById('phantomLink');
        phantomLink.classList.add('hidden');

        window.phantom.solana.connect({ onlyIfTrusted: true })
            .then(({ publicKey }) => {
                // Redirect to profile page with public key in URL for simplicity
                window.location.href = `profile.html?publicKey=${publicKey.toString()}`;
            })
            .catch((err) => {
                console.error('Failed to connect:', err);
                walletText.innerHTML = "Failed to connect. Please try again.";
            });
    }
});
