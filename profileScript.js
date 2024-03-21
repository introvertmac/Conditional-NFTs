let pubKey = null; // This will hold the public key globally

async function getSolBalance(publicKeyStr) {
    try {
        const rpcUrl = "https://mainnet.helius-rpc.com/?api-key=10b26a1d-9d27-492a-abd2-db5613728fe8";
        const connection = new solanaWeb3.Connection(rpcUrl, 'confirmed');
        const publicKey = new solanaWeb3.PublicKey(publicKeyStr);
        const balanceInLamports = await connection.getBalance(publicKey);
        const balanceInSOL = balanceInLamports / solanaWeb3.LAMPORTS_PER_SOL;
        return balanceInSOL.toFixed(2);
    } catch (error) {
        console.error('Error getting SOL balance:', error);
        return 'Error fetching balance';
    }
}

async function fetchNFTs(publicKeyStr) {
    // Placeholder for fetching NFTs. Implement this according to your specific requirements.
    console.log("Fetching NFTs for publicKey:", publicKeyStr);
    return [
        { name: "NFT 1", description: "This is NFT 1" },
        { name: "NFT 2", description: "This is NFT 2" },
    ];
}

function getPublicKeyFromURL() {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get('publicKey');
}

// Updated disconnect function
async function disconnect() {
    try {
        // Assuming 'provider' is your wallet provider
        await provider.disconnect();
        window.location.href = 'index.html'; // Redirect to the main page after disconnecting
        pubKey = null; // Forget the public key
        console.log("Disconnected and public key forgotten.");
    } catch (error) {
        console.error('Error disconnecting wallet:', error);
    }
}

function setupEventListeners() {
    document.getElementById('disconnect').addEventListener('click', disconnect);

    // Assuming 'provider' is the Solana wallet provider you're interacting with
    if (provider) {
        provider.on('connect', (publicKey) => {
            pubKey = publicKey.toString();
            console.log("Connected with public key:", pubKey);
        });

        provider.on('disconnect', () => {
            pubKey = null;
            console.log("Disconnected and public key forgotten.");
        });
    }
}

async function setupProfilePage() {
    const publicKeyStr = getPublicKeyFromURL();
    if (publicKeyStr) {
        pubKey = publicKeyStr;
        document.getElementById('publicKey').textContent = publicKeyStr;
        
        const balance = await getSolBalance(publicKeyStr);
        document.getElementById('walletBalance').textContent = `${balance} SOL`;

        const nfts = await fetchNFTs(publicKeyStr);
        console.log("NFTs:", nfts);
    } else {
        document.getElementById('publicKey').textContent = 'Unavailable';
        document.getElementById('walletBalance').textContent = 'Unavailable';
    }
}

function toggleDropdown() {
    const dropdownContent = document.getElementById("dropdown-content");
    dropdownContent.classList.toggle("show");
}

window.onclick = function(event) {
    if (!event.target.matches('#avatar')) {
        var dropdowns = document.getElementsByClassName("dropdown-content");
        for (let i = 0; i < dropdowns.length; i++) {
            var openDropdown = dropdowns[i];
            if (openDropdown.classList.contains('show')) {
                openDropdown.classList.remove('show');
            }
        }
    }
};

window.onload = () => {
    setupProfilePage();
    setupEventListeners();
};
