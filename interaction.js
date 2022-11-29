

const {ethers} = require("ethers")

const provider = new ethers.providers.JsonRpcProvider(`https://goerli.infura.io/v3/e15f901714b945e292c3607159b5348f`)


const walletAddress = `0xaCBC9E801bB6A5BfBfA0922b6E7B6c3A04C853C0`

walletAbi = [
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "_user",
				"type": "address"
			}
		],
		"name": "sendEtherUser",
		"outputs": [],
		"stateMutability": "payable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "_num",
				"type": "uint256"
			}
		],
		"name": "setValue",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "_address",
				"type": "address"
			}
		],
		"name": "accountBalance",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "getValue",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "name",
		"outputs": [
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "sendEtherContract",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	}
]

const contractInteraction = async  ()=>{
    const walletContract = new ethers.Contract(walletAddress,walletAbi,provider)

    const contractName = await walletContract.name();
    console.log("the name function gives: " , contractName);

    const balanceAc  = await walletContract.accountBalance(`0x109385d8263b388880AB67cDa3a3790A56a8256C`)
    const balanceEther = ethers.utils.formatEther(balanceAc);
    console.log(balanceEther);

    const value = await walletContract.getValue();
    const valE = ethers.utils.formatEther(value);
    console.log(valE);
}

contractInteraction()
