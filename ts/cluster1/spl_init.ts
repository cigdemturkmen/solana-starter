import { Keypair, Connection, Commitment } from "@solana/web3.js";
import { createMint } from '@solana/spl-token';
import wallet from "../wba-dev-wallet.json"


// Import our keypair from the wallet file
const keypair = Keypair.fromSecretKey(new Uint8Array(wallet));

const commitment: Commitment = "confirmed";
const connection = new Connection("https://api.devnet.solana.com", commitment);

(async () => {
    try {
        // Create mint account. createMint fnc returns Public key of the mint account.
        const mint = await createMint(connection, keypair, keypair.publicKey, null, 6); // if a token has 6 decimal places, then 1_000_000 smallest units of the token make up 1 whole token.

        // We need the public key of that mint account in order to mint from it, so we write it to the console. 
        console.log("Mint: " + mint.toBase58());
    } catch(error) {
        console.log(`Oops, something went wrong: ${error}`)
    }
})()

// region : Note to Self
/*
    We create a mint account here. Mint has data about token like the total amount, authority etc. mint authority being me means only I can mint that token, 
    my wallet as the authority.
*/
// endregion : Note to Self