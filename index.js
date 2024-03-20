function showPopup(message1, message2, link) {
    const popup = document.getElementById('popup');
    const messageElement1 = document.getElementById('message1');
    const messageElement2 = document.getElementById('message2');
    const closeBtn = document.getElementById('closeBtn');

    messageElement1.textContent = message1;
    if (link) {
        messageElement2.innerHTML = `${message2} <a href="${link}" target="_blank">Phantom Wallet</a>`;
    } else {
        messageElement2.textContent = message2;
    }

    popup.classList.remove('hidden');

    // Fix for close button
    closeBtn.onclick = () => {
        popup.classList.add('hidden');
    };
}

function detectPhantomWallet() {
    const isPhantomInstalled = window.phantom?.solana?.isPhantom;
    
    if (isPhantomInstalled) {
        showPopup("Phantom Wallet Detected!", "");
    } else {
        showPopup("Phantom Wallet Not Detected.", "Get it here:", "https://phantom.app/");
    }
}

window.onload = detectPhantomWallet;
