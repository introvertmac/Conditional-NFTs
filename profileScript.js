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

function getPublicKeyFromURL() {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get('publicKey');
}

async function getAssetsByOwner(publicKeyStr) {
    const url = `https://mainnet.helius-rpc.com/?api-key=10b26a1d-9d27-492a-abd2-db5613728fe8`;
    try {
        const response = await fetch(url, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                jsonrpc: '2.0',
                id: 'getAssetsByOwner',
                method: 'getAssetsByOwner',
                params: {
                    ownerAddress: publicKeyStr,
                    page: 1,
                    limit: 100
                }
            })
        });
        const data = await response.json();
        if (data && data.result && data.result.items) {
            return data.result.items;
        }
        return [];
    } catch (error) {
        console.error('Error fetching assets by owner:', error);
        return [];
    }
}

function displayNFTs(nfts) {
    const nftContainer = document.getElementById('nftContainer');
    nftContainer.innerHTML = ''; // Clear the container

    if (!nfts.length) {
        nftContainer.innerHTML = '<p>No NFTs found.</p>';
        return;
    }

    nfts.forEach(nft => {
        // Ensure the use of correct variables for image and name, adjust accordingly
        const div = document.createElement('div');
        div.className = 'nft';
        const imageUrl = nft.metadata ? nft.metadata.image : 'placeholder.jpg'; // Adjust the path to a placeholder image as necessary
        const name = nft.metadata ? nft.metadata.name : 'Unknown';
        div.innerHTML = `
            <img src="${imageUrl}" alt="${name}" style="width: 100%;"/>
            <p>${name}</p>
        `;
        nftContainer.appendChild(div);
    });
}

function setupProfilePage() {
    const publicKeyStr = getPublicKeyFromURL();
    if (publicKeyStr) {
        document.getElementById('publicKey').textContent = publicKeyStr;
        getSolBalance(publicKeyStr).then(balance => {
            document.getElementById('walletBalance').textContent = `${balance} SOL`;
        });
        getAssetsByOwner(publicKeyStr).then(nfts => {
            displayNFTs(nfts);
        });
    } else {
        document.getElementById('publicKey').textContent = 'Unavailable';
        document.getElementById('walletBalance').textContent = 'Unavailable';
    }

    // Reattach disconnect event listener to ensure functionality
    document.getElementById('disconnect').addEventListener('click', async () => {
        try {
            await window.solana.disconnect();
            window.location.href = 'index.html';
        } catch (error) {
            console.error('Error disconnecting wallet:', error);
        }
    });
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

document.addEventListener('DOMContentLoaded', setupProfilePage);
