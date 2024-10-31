import { ethers } from "ethers";
import abi from "./abi.json";
import tokenabi from "./tokenabi.json";

const contract_address = "0xe19D79B31278B65Aa7b77F3AEA260A3e21A5a618";

// Define the Amoy network details
const amoyNetwork = {
  chainId: "0x1F", // Use the correct chain ID in hex format, 80002 is for Mumbai
  chainName: "Amoy Network",
  rpcUrls: ["https://rpc.amoy.network"], // Actual RPC URL
  nativeCurrency: {
    name: "Amoy",
    symbol: "AMOY",
    decimals: 18,
  },
  blockExplorerUrls: ["https://explorer.amoy.network"], // Actual block explorer URL
};

const usdc_contract = "0x7cB3D276cCBD8DF74D0d7ef550f3201de0C1bF1C";
// Check if MetaMask is installed
const checkMetaMask = () => {
  return (
    typeof window !== "undefined" &&
    window.ethereum &&
    window.ethereum.isMetaMask
  );
};

// Request MetaMask account access
const requestAccount = async () => {
  if (!checkMetaMask()) {
    throw new Error("Please install MetaMask to continue");
  }

  try {
    const accounts = await window.ethereum.request({
      method: "eth_requestAccounts",
    });
    return accounts[0];
  } catch (error) {
    throw new Error("Failed to connect to MetaMask");
  }
};

// Switch to Amoy network if not already on it
const switchToAmoyNetwork = async () => {
  try {
    await window.ethereum.request({
      method: "wallet_addEthereumChain",
      params: [amoyNetwork],
    });
    console.log("Switched to Amoy network");
  } catch (error) {
    console.error("Failed to switch networks:", error);
  }
};

// Define buyRoom function
export const buyRoom = async (_tokenId) => {
  try {
    if (!checkMetaMask()) {
      throw new Error("Please install MetaMask to continue");
    }

    // Request account access first
    // await requestAccount();

    // Create provider - using window.ethereum directly
    const provider = new ethers.BrowserProvider(window.ethereum);

    // Get signer
    const signer = await provider.getSigner();

    // Check current network
    // const { chainId } = await provider.getNetwork();
    // if (chainId !== parseInt(amoyNetwork.chainId, 16)) {
    //   await switchToAmoyNetwork();
    //   return; // Exit if the network switch is successful
    // }

    const token = new ethers.Contract(usdc_contract, tokenabi, signer);

    // Create contract instance
    const contract = new ethers.Contract(contract_address, abi, signer);

    const res = await token.allowance(signer.address, contract_address);

    console.log("Res of allowance", res);

    if (res.toString() === "0") {
      const approve = await token.approve(
        contract_address,
        "12412521512521521521125"
      );
      console.log("asfasfas");

      await approve.wait();

      console.log("arparvea", approve);
    }

    console.log("contactr of buk", contract);

    // Call the buyRoom function
    const transaction = await contract.buyRoomBatch([_tokenId], {
      gasLimit: 300000, // Add a reasonable gas limit
    });

    // Wait for transaction to be mined
    const receipt = await transaction.wait();

    console.log("Transaction successful:", receipt);
    return receipt;
  } catch (error) {
    console.error("Error executing buyRoom:", error);
    if (error.code === 4001) {
      throw new Error("Transaction rejected by user");
    } else if (error.message.includes("user rejected")) {
      throw new Error("User rejected the connection request");
    } else {
      throw new Error(`Failed to execute buyRoom: ${error.message}`);
    }
  }
};

// Event listeners for account and network changes
if (checkMetaMask()) {
  window.ethereum.on("accountsChanged", (accounts) => {
    console.log("Account changed:", accounts[0]);
    // You might want to trigger a refresh here
  });

  window.ethereum.on("chainChanged", (chainId) => {
    console.log("Network changed:", chainId);
    window.location.reload();
  });
}

// Utility functions
export const isMetaMaskInstalled = checkMetaMask;

export const getCurrentAccount = async () => {
  if (!checkMetaMask()) return null;
  try {
    const accounts = await window.ethereum.request({
      method: "eth_accounts",
    });
    return accounts[0];
  } catch (error) {
    console.error("Error getting current account:", error);
    return null;
  }
};
