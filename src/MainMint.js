import { useState } from "react";
import { ethers, BigNumber } from "ethers";
import cryptoBotsNFT from './CryptoBotsNFT.json';

const cryptoBotsNFTAddress = "0xFBb0b7c320AAdA50f99a615bb9A958815CC71309";

const MainMint = ({ accounts, setAccounts}) => {
    const [mintAmount, setMintAmount] = useState(1);
    const isConnected = Boolean(accounts[0]);

    async function handleMint(){
        if(window.ethereum) {
            const provider = new ethers.providers.Web3Provider(window.ethereum);
            const signer = provider.getSigner();
            const contract = new ethers.Contract(
                cryptoBotsNFTAddress,
                cryptoBotsNFT.abi,
                signer
            );
            try{
                const response = await contract.mint(BigNumber.from(mintAmount));
                console.log('Response: ', response);
            } catch (err){
                console.log('Error: ',err)
            }
        }
    }

    const handleDecrement = () => {
        if(mintAmount <= 1) return;
        setMintAmount(mintAmount - 1);
    };

    const handleIncrement = () => {
        if(mintAmount >= 5) return;
        setMintAmount(mintAmount + 1);
    };

    return (
        <div>
            <h1>CryptoBots</h1>
            <p>Wanna know if this NFT hype going to remain for long ? Mint CryptoBots to help you out with their robo brains.</p>
            {isConnected ? (
                <div>
                    <div>
                        <button onClick={handleDecrement}>-</button>
                        <input type="number" value={mintAmount} />
                        <button onClick={handleIncrement}>+</button>
                     </div>
                     <button onClick={handleMint}>Mint Now</button>
                </div>
            ): (
                <p>You must be connected to Mint.</p>
            )}
           
        </div>
    );


};

export default MainMint;