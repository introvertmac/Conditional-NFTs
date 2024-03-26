// Centralized configuration for easier updates and maintenance
const config = {
    rpcUrl: "https://mainnet.helius-rpc.com/?api-key=10b26a1d-9d27-492a-abd2-db5613728fe8",
    connectionOptions: 'confirmed',
    defaultLimit: 10
};

// Fetch Solana balance
async function getSolBalance(publicKeyStr) {
    try {
        const connection = new solanaWeb3.Connection(config.rpcUrl, config.connectionOptions);
        const publicKey = new solanaWeb3.PublicKey(publicKeyStr);
        const balanceInLamports = await connection.getBalance(publicKey);
        const balanceInSOL = balanceInLamports / solanaWeb3.LAMPORTS_PER_SOL;
        return balanceInSOL.toFixed(2);
    } catch (error) {
        console.error(`Error getting SOL balance for ${publicKeyStr}:`, error);
        return 'Error fetching balance';
    }
}

// Extract public key from URL
function getPublicKeyFromURL() {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get('publicKey');
}

// Fetch assets owned by the public key
async function getAssetsByOwner(publicKeyStr) {
    try {
        const response = await fetch(config.rpcUrl, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                jsonrpc: '2.0',
                id: 'getAssetsByOwner',
                method: 'getAssetsByOwner',
                params: {
                    ownerAddress: publicKeyStr,
                    page: 1,
                    limit: config.defaultLimit
                }
            })
        });
        const data = await response.json();
        if (data?.result?.items) {
            displayNFTs(data.result.items);
        } else {
            displayNFTs([]);
        }
    } catch (error) {
        console.error(`Error fetching assets for ${publicKeyStr}:`, error);
        displayNFTs([]);
    }
}

// Display NFTs in the UI
function displayNFTs(nfts) {
    const gallery = document.getElementById('nftContainer') || document.querySelector('ul');
    gallery.innerHTML = '';
    if (!nfts.length) {
        const noNFTMessage = document.createElement('li');
        noNFTMessage.textContent = 'No NFTs found.';
        gallery.appendChild(noNFTMessage);
        return;
    }

    nfts.forEach(nft => {
        const listItem = document.createElement('li');
        listItem.className = 'nft-item';
        const image = document.createElement('img');
        image.src = nft.content.links.image;
        image.alt = nft.content.metadata.name || 'Unnamed NFT';
        image.style.width = "100px";
        image.style.height = "auto";
        const paragraph = document.createElement('p');
        paragraph.textContent = nft.content.metadata.name || 'Unnamed NFT';
        listItem.appendChild(image);
        listItem.appendChild(paragraph);
        gallery.appendChild(listItem);
    });
}

// Setup the profile page
function setupProfilePage() {
    const publicKeyStr = getPublicKeyFromURL();
    if (publicKeyStr) {
        document.getElementById('publicKey').textContent = publicKeyStr;
        getSolBalance(publicKeyStr).then(balance => {
            document.getElementById('walletBalance').textContent = `${balance} SOL`;
        });
        getAssetsByOwner(publicKeyStr);
    } else {
        document.getElementById('publicKey').textContent = 'Unavailable';
        document.getElementById('walletBalance').textContent = 'Unavailable';
    }
}

// Dropdown toggle functionality
function toggleDropdown() {
    const dropdownContent = document.getElementById("dropdown-content");
    dropdownContent.classList.toggle("show");

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
}

// Initial setup and event listeners
document.addEventListener('DOMContentLoaded', () => {
    setupProfilePage();

    // Disconnect functionality, if applicable
    const disconnectBtn = document.getElementById('disconnect');
    if (disconnectBtn) {
        disconnectBtn.addEventListener('click', async () => {
            try {
                await window.solana.disconnect();
                window.location.href = 'index.html';
            } catch (error) {
                console.error('Error disconnecting wallet:', error);
            }
        });
    }

    toggleDropdown();
});



