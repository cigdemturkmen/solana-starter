import wallet from "../wba-dev-wallet.json"
import { createUmi } from "@metaplex-foundation/umi-bundle-defaults"
import { 
    createMetadataAccountV3, 
    CreateMetadataAccountV3InstructionAccounts, 
    CreateMetadataAccountV3InstructionArgs,
    DataV2Args
} from "@metaplex-foundation/mpl-token-metadata";
import { createSignerFromKeypair, signerIdentity, publicKey } from "@metaplex-foundation/umi";
// TODO
// Define our Mint address
const mint = publicKey("<mint address>")

// Create a UMI connection
const umi = createUmi('https://api.devnet.solana.com');
const keypair = umi.eddsa.createKeypairFromSecretKey(new Uint8Array(wallet));
const signer = createSignerFromKeypair(umi, keypair);
umi.use(signerIdentity(createSignerFromKeypair(umi, keypair)));

(async () => {
    try {
        // Start here
        // let accounts: CreateMetadataAccountV3InstructionAccounts = {
        //     ???
        //}

        // let data: DataV2Args = {
        //     ???
        // }

        // let args: CreateMetadataAccountV3InstructionArgs = {
        //     ???
        // }

        // let tx = createMetadataAccountV3(
        //     umi,
        //     {
        //         ...accounts,
        //         ...args
        //     }
        // )

        // let result = await tx.sendAndConfirm(umi);
        // console.log(bs58.encode(result.signature));
    } catch(e) {
        console.error(`Oops, something went wrong: ${e}`)
    }
})();



// region: Note to Self
/*
       let metadata: DataV2Args = {
            name: "Your Token Name",
            symbol: "SYM",
            uri: "https://your-token-uri.com",
            sellerFeeBasisPoints: 500,
            creators: [
                {
                    address: signer.publicKey,
                    verified: true,
                    share: 100
                }
            ], // (optional)
            collection: null, // which collection this token will be belong to(used for NFTs). (optional) 
            uses: null // how many times the token can be used. for assets with limited use
        };


    // collection object looks like:
    collection: {
        key: publicKey("<collection public key>"), // Replace with your collection public key
        verified: false // Set to true if the collection is verified
    }

    // uses object looks like:
      uses: {
        useMethod: "Single", // Method of use
        remaining: 10, // Remaining uses
        total: 10 // Total uses
    }

    // uri in metadata is for additional metadata. It points to the json file allows you to store extensive metadata about the token in a centralized location(a server, IPFS, or Arweave). 
    This way, you are not limited by the on-chain storage limitations and costs.
    
*/
// endregion Note to Self
