async function getSolBalance(publicKeyStr) {
    try {
        // Establish a connection to the Solana blockchain
        const connection = new solanaWeb3.Connection(solanaWeb3.clusterApiUrl('mainnet-beta'), 'confirmed');
        const publicKey = new solanaWeb3.PublicKey(publicKeyStr);
        // Fetch the balance in lamports
        const balanceInLamports = await connection.getBalance(publicKey);
        // Convert lamports to SOL
        const balanceInSOL = balanceInLamports / solanaWeb3.LAMPORTS_PER_SOL;
        return balanceInSOL;
    } catch (error) {
        console.error('Error getting SOL balance:', error);
        return 0;
    }
}

function setupProfilePage() {
    const publicKeyStr = getPublicKeyFromURL();
    document.getElementById('publicKey').textContent = publicKeyStr || 'Unavailable';

    // Display the SOL balance if the public key is available
    if (publicKeyStr) {
        getSolBalance(publicKeyStr).then(balance => {
            document.getElementById('walletBalance').textContent = `Balance: ${balance.toFixed(2)} SOL`;
        });
    }

    // Setup disconnect functionality
    document.getElementById('disconnect').addEventListener('click', async () => {
        try {
            await window.phantom?.solana.disconnect();
            window.location.href = 'index.html'; // Redirect to the main page upon disconnect
        } catch (error) {
            console.error('Error disconnecting wallet:', error);
        }
    });
}

function getPublicKeyFromURL() {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get('publicKey');
}

function toggleDropdown() {
    const dropdownContent = document.getElementById("dropdown-content");
    dropdownContent.classList.toggle("show");
}

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

document.addEventListener('DOMContentLoaded', setupProfilePage);
