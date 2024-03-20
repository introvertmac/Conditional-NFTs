async function connectPhantomWallet() {
    try {
        const provider = window.phantom?.solana;
        if (!provider) {
            throw new Error('Phantom provider not found.');
        }
        const resp = await provider.connect();
        console.log("Phantom Wallet Connected. Public Key:", resp.publicKey.toString());
        provider.on("disconnect", () => {
            console.log("Disconnected from Phantom Wallet.");
        });
    } catch (err) {
        console.log(err);
    }
}

function showPopup() {
    const popup = document.getElementById('popup');
    popup.classList.remove('hidden');

    document.getElementById('closeBtn').onclick = () => {
        popup.classList.add('hidden');
    };

    document.getElementById('connectBtn').onclick = () => {
        connectPhantomWallet();
        popup.classList.add('hidden');
    };
}

function detectPhantomWallet() {
    const isPhantomInstalled = window.phantom?.solana?.isPhantom;
    
    if (!isPhantomInstalled) {
        showPopup();
    } else {
        connectPhantomWallet();
    }
}

window.onload = detectPhantomWallet;
