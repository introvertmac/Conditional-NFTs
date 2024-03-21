let pubKey = null; // This will hold the public key globally

// Setup Solana connection
const rpcUrl = "https://mainnet.helius-rpc.com/?api-key=10b26a1d-9d27-492a-abd2-db5613728fe8"; 
const connection = new solanaWeb3.Connection(rpcUrl, 'confirmed');

async function getSolBalance(publicKey) {
    try {
        const balanceInLamports = await connection.getBalance(new solanaWeb3.PublicKey(publicKey));
        return (balanceInLamports / solanaWeb3.LAMPORTS_PER_SOL).toFixed(2);
    } catch (error) {
        console.error('Error getting SOL balance:', error);
        return 'Error fetching balance';
    }
}

async function fetchNFTs(publicKey) {
    // Placeholder for NFT fetching logic. This part needs implementation based on your specific needs.
    console.log("Fetching NFTs for publicKey:", publicKey);
    // The actual NFT fetching logic goes here. This might involve multiple steps:
    // 1. Fetching the token accounts by owner.
    // 2. Identifying NFTs among these tokens (usually by checking metadata).
    // 3. Optionally, fetching NFT metadata from a centralized server or IPFS.
    return []; // Return an array of NFTs.
}

function getPublicKeyFromURL() {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get('publicKey');
}

async function setupProfilePage() {
    const publicKeyStr = getPublicKeyFromURL();
    if (publicKeyStr) {
        pubKey = publicKeyStr;
        document.getElementById('publicKey').textContent = publicKeyStr;
        
        // Load balance and NFTs as early as possible
        const balance = await getSolBalance(publicKeyStr);
        document.getElementById('walletBalance').textContent = `${balance} SOL`;

        const nfts = await fetchNFTs(publicKeyStr);
        console.log("NFTs:", nfts);
    } else {
        document.getElementById('publicKey').textContent = 'Unavailable';
        document.getElementById('walletBalance').textContent = 'Unavailable';
    }
}

async function disconnect() {
    // Perform any necessary cleanup. This example assumes a hypothetical 'disconnect' function.
    console.log("Disconnecting...");
    pubKey = null;
    window.location.href = 'index.html'; // Redirect to the homepage or a disconnection confirmation page
}

function toggleDropdown() {
    const dropdownContent = document.getElementById("dropdown-content");
    dropdownContent.classList.toggle("show");
}

window.onclick = function(event) {
    if (!event.target.matches('#avatar')) {
        const dropdowns = document.getElementsByClassName("dropdown-content");
        for (let i = 0; i < dropdowns.length; i++) {
            if (dropdowns[i].classList.contains('show')) {
                dropdowns[i].classList.remove('show');
            }
        }
    }
};

window.onload = setupProfilePage;
