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
                    ownerAddress: publicKeyStr, // Use the dynamic public key
                    page: 1,
                    limit: 10, // Customize as needed
                }
            })
        });
        const data = await response.json();
        if (data && data.result && data.result.items) {
            displayNFTs(data.result.items);
        } else {
            displayNFTs([]); // Handle case with no items
        }
    } catch (error) {
        console.error('Error fetching assets by owner:', error);
        displayNFTs([]); // Ensure consistent error handling
    }
}

function displayNFTs(nfts) {
    const gallery = document.getElementById('nftContainer') || document.querySelector('ul'); // Adapt for potential different container types
    gallery.innerHTML = ''; // Clear the container before displaying new NFTs

    if (!nfts.length) {
        gallery.innerHTML = '<li>No NFTs found.</li>';
        return;
    }

    nfts.forEach(nft => {
        // Adapt to the response structure used in the given code snippet
        const imageUrl = nft.content.links.image; // Assume this structure based on provided code
        const name = nft.content.metadata.name || 'Unnamed NFT';
        const listItem = document.createElement('li');
        listItem.className = 'nft-item'; // Updated className for consistency
        listItem.innerHTML = `
            <img src="${imageUrl}" alt="${name}" style="width: 100px; height: auto;"/>
            <p>${name}</p>
        `;
        gallery.appendChild(listItem);
    });
}

function setupProfilePage() {
    const publicKeyStr = getPublicKeyFromURL();
    if (publicKeyStr) {
        document.getElementById('publicKey').textContent = publicKeyStr;
        getSolBalance(publicKeyStr).then(balance => {
            document.getElementById('walletBalance').textContent = `${balance} SOL`;
        });
        getAssetsByOwner(publicKeyStr); // Removed .then(...) as displayNFTs is already called inside getAssetsByOwner
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

document.addEventListener('DOMContentLoaded', setupProfilePage);
