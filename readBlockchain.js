const {ethers} = require("ethers")

const provider = new ethers.providers.JsonRpcProvider(`https://mainnet.infura.io/v3/e15f901714b945e292c3607159b5348f`);


const getBlock = async()=>{
    // const block = await provider.getBlockNumber();
    // console.log("current block number is: ",block);

    const balance = await provider.getBalance("0xEF0BdD4B1528023B09f51c75d1752376f78912F9")
    console.log("account balance in BN is: " , balance);

    const balanceEther = ethers.utils.formatEther(balance);
    console.log("account balance in ether is: " , balanceEther);

    const balanceGue = ethers.utils.parseEther(balanceEther);
    console.log("account balance in GBG: " , balanceGue)


     
}

getBlock();