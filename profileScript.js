async function getSolBalance(publicKeyStr) {
    try {
        const connection = new solanaWeb3.Connection(solanaWeb3.clusterApiUrl('mainnet-beta'), 'confirmed');
        const publicKey = new solanaWeb3.PublicKey(publicKeyStr);
        const balanceInLamports = await connection.getBalance(publicKey);
        const balanceInSOL = balanceInLamports / solanaWeb3.LAMPORTS_PER_SOL;
        return balanceInSOL.toFixed(2); // Format the balance to two decimal places
    } catch (error) {
        console.error('Error getting SOL balance:', error);
        return 'Error fetching balance';
    }
}

function getPublicKeyFromURL() {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get('publicKey');
}

function setupProfilePage() {
    const publicKeyStr = getPublicKeyFromURL();
    if (publicKeyStr) {
        document.getElementById('publicKey').textContent = publicKeyStr;
        getSolBalance(publicKeyStr).then(balance => {
            document.getElementById('walletBalance').textContent = `Balance: ${balance} SOL`;
        });
    } else {
        document.getElementById('publicKey').textContent = 'Unavailable';
        document.getElementById('walletBalance').textContent = 'Balance: Unavailable';
    }

    document.getElementById('disconnect').addEventListener('click', async () => {
        try {
            await window.solana.disconnect();
            window.location.href = 'index.html'; // Redirect to the main page after disconnecting
        } catch (error) {
            console.error('Error disconnecting wallet:', error);
        }
    });
}

function toggleDropdown() {
    const dropdownContent = document.getElementById("dropdown-content");
    dropdownContent.classList.toggle("show");
}

// Close the dropdown if the user clicks outside of it
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

document.addEventListener('DOMContentLoaded', setupProfilePage);
