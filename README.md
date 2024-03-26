# Solwall

Solwall is a web application that allows users to view their Solana wallet balance and NFT collection. The core feature of Solwall is the ability to display "conditional NFTs," which are NFTs that have a special property that allows them to be redeemed for a gift.

## Dependencies

Solwall has the following dependencies:

- Solana web3.js library: This library provides the necessary functionality to interact with the Solana blockchain, including fetching the balance of a wallet and retrieving NFT metadata.
- Axios: A library for making HTTP requests from the browser.
- URLSearchParams: A built-in browser API for working with URL query parameters.

## Functionality

### Wallet Balance

When a user visits Solwall, the application fetches the balance of their Solana wallet and displays it in the top right corner of the screen. The balance is displayed in SOL, the native currency of the Solana blockchain.

### NFT Gallery

Solwall displays the user's NFT collection in a gallery view. Each NFT is represented by an image, along with the name of the NFT (if available). If an NFT has the special property that makes it a "conditional NFT," clicking on the image will open a link to redeem the gift associated with the NFT.

### Conditional NFTs

A "conditional NFT" is an NFT that has a special property that allows it to be redeemed for a gift. Solwall checks each NFT in the user's collection to see if it has this property, and if it does, adds a click event listener to the NFT's image. Clicking on the image opens a link to redeem the gift associated with the NFT.

### Responsive Design

Solwall is designed to be responsive, meaning it will adjust its layout based on the size of the user's screen. On smaller screens, the navigation bar collapses into a dropdown menu, and the NFT gallery adjusts to display fewer columns.

## Future Work

Potential future work on Solwall includes:

- Adding support for other blockchain networks besides Solana.
- Implementing a search bar to allow users to search their NFT collection.
- Adding pagination to the NFT gallery to improve performance for users with large collections.
- Allowing users to connect their wallets directly from Solwall, rather than requiring them to do so through a third-party service.


`The API key is protected with Domain and IP whitelisting as whole website is just client side operations`
