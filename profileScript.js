// Centralized configuration for easier updates and maintenance
const config = {
    rpcUrl: "https://mainnet.helius-rpc.com/?api-key=10b26a1d-9d27-492a-abd2-db5613728fe8",
    connectionOptions: 'confirmed',
    defaultLimit: 333
};

const collection_address = ['5KGxStnuZaqKT6ESZkemETDp35jeWeMvXSskvY9DuUsZ', 'GRMEik8e6kMmoE5GL9b3Qpr4M1c4HtTWPzube9JR9bRs', 'STKM3PzeFc6kdJiMXyQ3pRDa3ERCEGgM9NbPPGb2Rft', '4DbWtjdK3bkdneLmnqhQCZvue63kJ6zHUHNBmVfrySpV', 'FiidbA6cV8dtHJZv7vUDq5DQWqxvamT3pvfAmW2jfGh7', '2VbnDcLhtprz562EhrYopUYRp6wR4NueJCLcKdZVrLxc', 'HmaEMJeHe9GFH1K7rpLBnxswDvv7kGtgoPS3QBTFwmCK', '9gcPECZKFiTseW1mNdCebcaiFuo6JVoL7Au5HBSiux6', 'AMETVtodde1kS8RjBXtpjGz9cTPCc6uH2mh6ezYUv4R1', 'AMSNskm2RZqPXCZ6P2z6JLyHWMQF6pQ8RA8Q6x42Xufq', '3dMmK638wC3q7ae5Dh4o4qH4HFaNcjTHzNbChV827PyA', '5f1w2YWWKXGPL3pc1pwVojp3Cbjd6AXoPELiL93rvHK', 'ASSTEJiE1Qzti6Yq3WRz1yS9rp3Ze1CsybVMBWuiiUqH', 'EnZTCrJB2ZGw8EHGLJxiToT4ad4Xonr3Yn8W2C5QHfoT', 'AWAGxSixyio2swX1tt872x1mxr6Zw7vknz9dxFxeuz7U', 'BKPKoAPJ51qxZEgyi56NMPE8ahrgDB6ZUkb5bpNDKkCr', 'BDRPieTmdVdWXf4BSfke5x4BnrnVPkmQv1tbbEP6L6no', 'BNGZBH4iBZqL4op5ZoyYE11UuogYvvMtPVxgakZMBjxB', 'BZ3DohF6BHGkAnZAe1g8ohWVuh95bXT4FhiGw1BXJWfF', 'BiEZGGtnR4yGg8NdZB6Pjx6R9CRkVTWSTGnvUZhN3cNf', 'NssFra8frs2SedNnVR4qxKN83DAgAxGaomGiaZwnsmM', 'BLKDQXqcvpPabVjaAsWbW91f5BVFuAffbCAXemYiZdCJ', 'BoRKkxKPoAt7LcyVRPa9ZZT5MztkJuc4PiGrUXAgDHPH', 'BoRKiFyrcHwmuCdYFar5PH5L262R859nu3mttVg7TSW9', 'BPFPNHcajj5wdQK2WwXxBF52qy1kBauBk3R9YDxx6VGm', '3LmPM3GJn17HBCe27kwrDuGs7kLCEQStUduFc7uDpCe5', 'DYYvY7D3HkXGjVEgekMw93HBZtnsuU2Wn8EsLxUQk9Qx', 'BUzRCgjUyaNrRbevEG8kyDPsoLWtsV8fC2E5sYr272gy', 'DJtDuqwNJUgN3hPPakrQWKsPJZT5LxCxU3EzXiTWb5s9', 'AfuTgzbd5TBgYc5cquiDdMwDi8XexMRY1NDr6fXzCEKk', 'C87axeL4jxJphAhooZ4ayKRNPxfS1Wy5jVufLqfocUMG', 'CoGDyMJSsswtnyBqwv3PmhWgBZnpQEXifk9FiAvapYgh', 'F4bEvVmHJPjYjfW7S2FFPpJiiwXFjXF47YP9XtNfz2Bq', 'DkZzZ8SEDpyc3hgkcbKSCPgMo488aNarNwrMZ3g5aPkp', 'DAA1jBEYj2w4DgMRDVaXg5CWfjmTry5t8VEvLJQ9R8PY', '9fcbwc55Veu1NGB7KEcMaDsG5i4ReUdcRgWaySGLSs7f', 'HgYgqeKv1yUPGvSzBWTfBeL8BqsKLPc9idJ3kyoHrKfi', 'F3pF8cV8mcLn79gAuKKXyYDMUk4pVcFYQgLSsQjGfKjF', '6pbUdArXzJ1Y5zbj1bZnfWBQbPDFQePFi9hZunLpA7Pc', 'HZKEoezpMVutwqxEuffFGtN5BLdytZp27xL95ZvPiGPN', 'DGPTxgKaBPJv3Ng7dc9AFDpX6E7kgUMZEgyTm3VGWPW6', 'DGNRyqn9J87DowYjZy4EBzKhJmcrrzXJ6btrRrgnXVus', 'DSGZbfsrbnvarYiVC8Dhgn4Tb7WRpyHAdfem6PpPbnkB', 'GN3iYLvtV1yqt1jNiNYVFhHF1kmSRYKD4jNij7X1fX3P', 'BdYYPryL2yxVLB3WGpa2ddBGYSyyJ2PPQxia9ttiR2Sc', '5NQN1niYhq8dDK4uquL7jifAQUNUTbDca5dKdjgsg6U9', 'DRtHav8MkLD1wuXcFAftCM846DUy22eR112Rzt4HUYkW', 'DRDRb6qsokfYm6VDGRzqsiyLRFq1Ge2jMSN6BD8tu2Js', 'DPNTcMcvRs4XJVgKzKBqS3Tg6tRbEWyqJ6jgef5HkBxC', 'DUCKGVmCjdK7czWnebui2rtuKkmqZEJyYSAtVvrZdcN', 'EARLfi5X4ozr8Jt9gFKqX2H9p56BQWiQV8pzTuhAtBPE', '74rzBzHAMYpwLjCzKwLsspfXv4bomqz1SUhdqH1JkTc7', 'HbaW7rUWprssgicSimCVcwzetveoPayz5u2aYNm4ixMu', '8QZJt2VZY9XPjFp932QYNV3dSAnZDnaaeezyjJvVusxw', 'ENGMuxcbFMWrt3ZfQRT8VdvQKTsqhCoemMmd51zXjxrb', '6N1KfEftHKGSZTvWiVTkVi5QoWQya3feTZdFtscsxHq7', '4Hi7v4njVNAxCEMUV63EtRqQ7mnSCAJiRJTRJRU79DNs', 'CPksPf2gRp8Cx4w4n51EbSZHiS66knkw22dAzFr3KXfK', 'FSdotujgzdodpYMtWmzT6G62NAgtTdruKT9MekbqCaB8', 'FLRxZJb7Kpd5i9Q7WdH7r5uRqDL7oJVpqW3ew8FpE336', 'F3et27PYo8EY4YpJ4rneEU3nQR9XmCKRXdQdwDKaMdkJ', '5ZPXQBH8vsrGyaXBQjWoBMxCVeeAuzf3KAeDccQn3uJK', 'GNPDwCz66oXxqjK2FjAYXanemhR2M7ucx97bCWifgB55', 'GLooZYZyHr7v5KBPvTRnMuLrjpBe8UJAwyKXY3ejQAWP', 'GLoWFVaPoLu1batUU954jYkeZQLjzfyoNoXTkDKgn1QZ', 'GRSYoeJ6uXNo2BcvYKKu4QJYZZGeAoaYgrqzri2KBAJa', 'HAi9vA4pVx1znaYnVAnFo8JiRVrh8a2zKchp5TuLt9LM', 'FdjvW8RHo2vTr4DiWqkDHyUDhNWzkrYPjyd8SpGtK1Qs', 'JKEY4NAsmFyfyazqRGjUgxY7ZGNwKaRdns6ewi855SR', 'GSLvBoerv52UfB6zfTFZG5Ebi8s2LyJAuLBQrAzoRQ21', 'CVZsoKRea5n4oXr32ycuJYkvwyctMW42YTpw3qps3vU9', 'KTCDgnN8irtBh9AkYfSM3anLbjZCYmKBbzWy8w7v4iZ', '6XSpmfysiHnYskskEJLD1U9JbRc8jqYJs2oq9fWyUhtY', 'AFr8upuKzULqjEuCmmoXb6P1Df6m9FQgR4KoDj8hyLEA', 'LCiLU7SZdjhujPzisKGj6ZngsYMeFHLoHD5f9WfmnwX', '2dRL2GdjeyrF4xW9Ug43jsjN4mBt9b5haxtmp4JVBxzH', '8xEbE5aN4fEBbU37sscfhDZ7Bon6yvMn3w8mrAU4HNbq', 'MADoJepJwDCv5ELUZx4JathJFG3sUciMCtuVSgoRVsB', '54yiXmWKMVz8daGv4BddHYs5fKQg881wNbnms8w3NPym', 'MAQNiWAYh5yGCQKeWFzHLypThEjfTJfBQxwiF8P5Vax', 'DvX459iyryxg2NWmWC9Sez41gnBDVsHtWMZoXNdMT1j', 'E3qKHhr5mJJLDxj5D75gWftdnxScyRrFCNmNJcdvLHTs', 'MoLDseUCG6x2or3YHAa8cGR3cQ5BMjySStuhZPvc4Vc', 'FLGMKsU8hWS895N1BeA8HkRriEgmZgcb3AHcdGSSkqvM', '8rfcmmzLiNAmrbe4j7GTqAqb6La1mTPdFsyodXPfhSJu', '9Hq46kfr62ZEBDE9rcBbVnFvTfUy1PKRcn5WrLBsL5zW\t', 'AEaFvJvSXZdDGAAAR1PhVXHBX9FUa2BUQT64GhADqmwS', '4AdcUmh6RuRabgoijr83XANM3C6c848UyLqh47hwf9SB', '8Pd8CK8zsyxn9qdmLM4J8n1E6NrkJxQfUC9wLkd4Jx9M', 'NfNcsoekvshD5eXiyqgs5rC9Ak7zAfb6ngiJrDXCFea', '96Y7qpC4qEna6ZnRKi1HiBgHzZ1LdoVANvoz6j2JkUkp', 'A3rXGYEntSSmLVWqfu9vD81NXDGUwbhvB8ryL8HyXQad', 'C7zft5o2FjjEYLhHLHh7zwCLFvjqGKhqmrWixzrr74Hi', 'oDKDTNjxqeYHFbrB1PKZiMnqUwRx4u8eqSnfd5CB8Xs', '3bbdbu2x3FyjUXiSGv6JLbCBe9LW9pjWyzmGobAwGuwv', 'PiCoZPft9jUQiNuzQuGj3rwxxANS6j6yLRHfTRLyDGs\t', 'PxLcQ2cPZWNgW7SZm1HrHt7Ta6uEG16HF4ggN6dgjbE', '6KBCTyYSFPWAr9Kn4e8En2ABZN8BG65gp7rq6nyrUucQ', 'DevTuKHCHwqQZtoTk8bC4yXqfsJtpEcQFXzp6Hc6hGtu', 'PoGvabB3UmqyRFzt7BvTJ5xnyi53PsiiMWuX4TravKd', '4snqqCiFFnAzZcryfzvksdw1XMNPeyTJaa1PLD6qPXsp', 'PTLSuzbAewuTmQwpMqmZTmoJoPE7x1dDJccRu3s5WcT', 'D1uDBJbjKMV4wypjxUTdR7bFsgpi2Ze4tc1jZjXppmBV', 'E1KQxuDSVj7teLC14gETxwQPifBa6eecEkuAewjS9kxM', 'GC5tNrmpPnpqsVcVZtdWsGnHZpxVyPJb4kJW7sXCukWu', 'QUiErXKooUicq3koDk1pGxjhBfrccL9Bnw49zWUYUCu\t', 'RDNTmiKRLE2W4aRbd1Xw6sX9bZTgnPUhX3hH2Cov6sY', 'RTCSTqZ9FrnZ3wbwPRYzzHLwH8zukU4Dyq3HeAdqPWV', '8yqFXKErT2Cc12agRNUDN8owMvPwb3AtxNR65qA5crcf', '41QCWkBWijZDuP3i5T31SCjjWijpcBFLy2kcjYFeKgjw', 'REZDaXr3jf2hcjKKLARUQdC7PqVbtLMpXSrezydB36g', 'SMRNcqmcoxbu9HYEUC8G1RZ79yvcbS1vTQLzbahzoKS', 'GNFTLUHdRNHZd7t88ATpRK7uTZWkDAXkZYyseAcJpyUx\t', 'Zq5YzktHuP5heDTbGKtBQ6fZeVKcxXPwMZdqtg1etbj', 'F8FdDYD3PWndYoae9TrBcucXDWFwDvm6bZU2LQT1PwyB', 'DRiP2Pn2K6fuMLKQmt5rZWyHiUZ6WK3GChEySUpHSS4x', 'CMPSxy4cEN634t4EpwwPkwVXcf7vEjG68CeX6q2b5Qfh', 'WoMbiTtXKwUtf4wosoffv45khVF8yA2mPkinGosCFQ4', 'DASHYFhWiCoe8PNCHZJAjmvGBBj8SLtkvW2uYV2e3FrV', 'SoLPr7zxggXh9JUt8NGKyxLZGJmyWqgawcs9N9hmatP', 'DRiPMSLhU9rv212YUvz1ZVoB4irNwRB8Aqmb6jA1wB7j', 'PEEiTQbMc87HQ9TbXfHWWyW3bKiMExbGmAiMDR6NUiD', 'RNDtVB9yixR34sHuAryAcR5MW6hKaeDe2Njurf27UqJ', 'DRiP3vrQ7LuvQtmwL74RcejviWmQ1HuuKFcJdUpYG6Di', 'SLCNrXk2qPkjs7cL7TFVVTgr4aizTwvgStDjL8xvXpe', 'DVfgC2WX7TupFAn5eqJisqsozt4mevYByERq59eg3BEb', 'EToGe8sASQjsKLpNaYmJApB1DZEYfPGkE81tqS2rit9Q', '9aYhofozNtc8gdRxu8dZMNkFZPDZeyjpeu7AALaAnJKA', '4GuFbd9wXS9sHpDS5119LYttDGuL4kBzak1xC8CRxknK', 'CRoCtzAzdD5DEBWu2fDjmfLbABFuHwYjXuNDNj3dUhsK', 'SoLCyyxcLuhbiXo3dMbM9MKi1xw5DetpNk3twcquHbM', 'STCo3cwNqZEfH7ayBcv71yr2xAAvMpzq6WEuwcd2mZs', 'STCAE5N9bFKtQeLUQPgPnVPBcZHcYLTDDeBozoFNNVC', 'STBoNLYWNGMx9oS2PYDz18UrsYjwQKxjt3S5aWhaegn', 'TAuAUS8neSS3KPSqLXQ7u1aWkKgnVPzqNizihDYuXvN', 'TFLo4enZQpYGNTMNQAde8FRdeYkCfsrkrwV1aiSQCyv', '7eeTQ9hWTN7QkPtfXngZdcsjBz34o1RY2Y2GqsvCE2kz', 'TFEWaJpiEi7qAse8Q5ttMAC2WBCNeRoTQnCEDnkPpH8', 'WAVEgD18Ub6dg1AMEbCYMKMwAocjqaWQtuVVjFQbnaT', '3yZQmBg5vquJ6naf1MLzbakbY6E41R4Q9ZurhgDrYTuN', 'tinyVrmxcEUyVufgmFzGYe7C4mrGXDC21uLJAGVKXkg', 'GooDeBHLq7TnLmMRevoKV2zTXi4DkDuD2jwPpDESwkSP', '6B2EhUJ9VNQBbNrME35XkZXm7NRuq376VNiDoMtAA45', 'HLTQnaVCcqt45xikF2xt445mW28zcwY3rwScRmrbP1Mz', '6gnjsNAmBzxsz4MjRMSG4ArATejm4Z46XcaqgwSyaFDS', 'CRC62Kc7R1gG6bG7L23T8ifqHGQF6myKazuRYDNkZHdP', 'VLT1ERWF2SQ51ybTGAuSBDWFZCxYth8ox6faJG9WrmG', 'VFXDkMfw2kXzyTgoLvzAJ3bB9Z96agas5nwF6ekyaN7', 'FDRe8U5zGetHvZvPSFTyTwEkw14RMrPvVXo2mAwJyms7', '3NcPZLG4UW9Zjikpgg7Rmudo5HRfSwu6au8oN5PdkVHY', 'ZqaJn3BtnVctmz5twHNPAPUVWZGqBL2U3eXqWbewrWm', 'WABARDMXZdyTjieTGB5szaGx9cSshEKPCb9MpEgv8FQ', 'WETK1yZzmU3EEyaq7zKdrGsaGcYTCePuUUUm8gvhLJF', 'HP2WqVmkdxyWt8vwzsgVmfq2k8qExv2HpfmNzmdwD33', 'WiLShSZAyVSYqUsL62JyiDRPY1VTeJ4DEkko8TLijxw', 'WiWioBnHLpHQaxRizEMqLALAifvxKPUVAtMiSuKRozV', '7RhpZF8fAS67h5hF486HTEPNAP4B5WyUUeGsMLkkYMnq', 'GN9XiZ5WRd34JKZPszhjVR5Ghc9Y7Nos9U85WicKzBkk', '6N9P1YztsD1BSsCFKERf9ULYCBxZaTetwCNVmksQWwpW', 'DwF8a64ULh3mphfhh11NB3obRWJLx5KZfaTFZuff5xxs', '2n1XYijLpF36SKitd9dZSibKgy86pywhNtQCzkdvUh7S', 'FUK75szRNzepV9hRUZ5EBs4saboJUQFZrPqUDErD9oeX', '7HrP4p5j7ncX6RRegq43jfgYMVKVByHqgUAaJUTPvzue', 'EoQNw9NDchWKNLcCjhPffyt5VfYPWZpJu5r5Bh8KNE7W', 'AhppfTGZgroqXRYYGvjYrkmcTkvtiNEfWMymHNhMYAWe', '6VS3x42BTsgi26U6sNrEswvu1sqDJwZexhkuhfSNY7Wk', '8wAMHDzquTAhwpXSdtZYZCyGpuw2cqwbGQonFH5DRBUE', 'EJCzUqmSEy2DaZb4ZUzrD9sy5MzLmSdcLjAJwtup6dHa', '456uErQVdiNg8jVjb6d49ub4v6vCV2DUvJ9YVZp6XCWj', 'AFSRrKnrnZCm74gthHRRf1ugMe7DHXTFXSch57VKC3pX', '2VbnDcLhtprz562EhrYopUYRp6wR4NueJCLcKdZVrLxc', '9EipABR9Zqt4JeBS85nyjY2L5aQ6WP8U8UCr63Tvt9VM', 'ECuPkRGis6dbZLiZzTqLG7YS9XGLzUjBr45bCzYSFYFF', 'A52SJ3s7CVGzVfnjxP6tJEzgSSqvdgZ5mi34UigYe1py', 'GSgW24zzdx8e9UEecSaaTaFa3TPd7sQdNyze9NJPwUW', '6kHEcQ51PiHMRiYLgQgYXmqTfZWJVVB91TCiTJ4rP8BD', '7T4rXtusYKfpYcV365zPvVEhwtgF1FSqdNr2rDS6W7J7', '8GqDCawh25igLzRF8o77sevix3VLnqBvWxhcJWh6E2bX', '88EMjkGyFBMxMrknMDsGYaDJBKu9x7UM7hPMsWiHJc1T', 'BRPZXVHnk6gnPiDd72uriWfDbWyn1K8tqTpTrzuVAq4U', 'Awi3Z3VmZhEN4hMfNZ5gxN56mtYN6tEhPrjtH4G322bA', '537DncbziK8o54R5r8G5L2zwu6ESq3mKwjQm39vR8xbk', '58SZU1Xm93iRrhiEdyz5N91F3j1QXu9Hg2kg7fK9xMtX', 'HgiabSmd49o76tueUf6T2X2fQp5pacf7iZ5Qf7xy7F4z', 'AugNXkGAzC2DD3XaZTBpj3CrmtYSF2FReuGRBCkA1ncm', '3nmcUpv8yAmSjD5iECLAUjZ4wmScETRHYDx4Nxw588iA', 'FGaic8uPwbADUndqqjFnMCgfA1NwmxcHKZRtTqAofiqB']


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
            const filteredNFTs = data.result.items.filter(nft => {
                if (nft.grouping && nft.grouping.length > 0) {
                    const groupValue = nft.grouping[0].group_value;
                    return collection_address.includes(groupValue);
                }
                return false;
            });
            displayNFTs(filteredNFTs);
        } else {
            displayNFTs([]);
        }
    } catch (error) {
        console.error(`Error fetching assets for ${publicKeyStr}:`, error);
        displayNFTs([]);
    }
}


// Display NFTs in the UI
let nftIds = [];
const giftIds = ['J4czUdcDmXqNQY1eUUZ72todjFneUYEFxPbHNyTpyAcE', 'HejvsdxpEUwxfnK1U6LFwuXhKtZoA92bx9wGAPJLdJE5'];

function displayNFTs(nfts) {
    const gallery = document.getElementById('nftContainer') || document.querySelector('ul');
    gallery.innerHTML = '';
    const loader = document.getElementById('loader');
    
    if (loader) {
        loader.style.display = 'none';
    }



    if (!nfts.length) {
        const noNFTMessage = document.createElement('div');
        noNFTMessage.textContent = 'No NFTs found.';
        gallery.appendChild(noNFTMessage);
        return;
    }

    nfts.forEach(nft => {
        nftIds.push(nft.id);
        const nftItem = document.createElement('div');
        nftItem.className = 'nft';
        const image = document.createElement('img');
        image.src = nft.content.links.image;
        image.alt = nft.content.metadata.name || 'Unnamed NFT';
        if (giftIds.includes(nft.id)) {
            image.classList.add('clickable');
            image.addEventListener('click', function() {
                window.open('https://cal.com/manishbhattacharya/drip-haus', '_blank');
            });
        }
        const nameElement = document.createElement('p');
        nameElement.className = 'nft-name';
        nameElement.textContent = nft.content.metadata.name || 'Unnamed NFT';
        nftItem.appendChild(image);
        nftItem.appendChild(nameElement);
        gallery.appendChild(nftItem);
        console.log(nftIds);
        console.log(giftIds);
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

        // Show the loader
        const loader = document.getElementById('loader');
        if (loader) {
            loader.style.display = 'block';
        }

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
