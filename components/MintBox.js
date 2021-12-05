import ProgressBar from "@components/ProgressBar";
import { useState, useEffect } from "react";
import web3Connector from "./web3Connection";
import contractAbi from "../contracts/OnChainSweaters.json";
import { Contract } from "@ethersproject/contracts";
import { ethers, utils } from "ethers";
import web3 from "web3";

import { BigNumber, BigNumberish } from "@ethersproject/bignumber";
import Web3 from "web3";

const addressAndAbi = (networkID) => {
  if (networkID) {
    return {
      abi: contractAbi.abi,
      address: contractAbi.networks[networkID].address,
    };
  }
  return {};
};

const makeContract = (networkID) => {
  const { address, abi } = addressAndAbi(networkID);
  if (address) {
    return new Contract(address, abi);
  }
};
const MAX_SUPPLY = 3333; 

export default function MintBox() {
  const [mintCount, setMintCount] = useState(1);
  const [account, setAccount] = useState(null);
  const [contract, setContract] = useState(null);
  const [w3Client, setW3Client] = useState(null);
  const [provider, setProvider] = useState(null);
  const [totalSupply, setTotalSupply] = useState(null);
  const [totalSupplyPercent, setTotalSupplyPercenter] = useState(null);
  // const {abi, address} = addressAndAbi(chainId)
  console.log('contract', contract)
  console.log('account', account)
  console.log('provider', provider)
  console.log('totalSupply', totalSupply)
  
  


  const checkTotalSupply = () => {
    if (contract !== null && w3Client) {
      return contract.methods.getTotalMinted().call({from: account})
    }
  }

  const mintNFT = (count) => {
    sendMint(BigNumber.from(count));
  };

  useEffect(async () => {
    if (contract === null && w3Client) {
      const networkID = await w3Client.eth.net.getId();
      const NFTContract = new w3Client.eth.Contract(contractAbi.abi, contractAbi.networks[networkID].address)
      setContract(NFTContract)
    }
  }, [w3Client]);

  useEffect(async () => {
    if (provider === null && window.ethereum) {
      const mmProvider = window.ethereum;
      setProvider(mmProvider);
      setW3Client(new Web3(mmProvider))
      const accounts = await mmProvider.request({method: "eth_requestAccounts" });
      setAccount(accounts[0])
      mmProvider.on('accountsChanged', (accounts) => {
        setAccount(accounts[0])
      })
    }

  }, []);

  useEffect(async () => {
    if (contract !== null) {
      const timeout = setInterval(async () => {
        const mintedCount = await checkTotalSupply()
        setTotalSupply(mintedCount)
        console.log('Minted count', mintedCount)
      }, 5000)
      return () => clearInterval(timeout)
    }
  }, [contract]);

  async function connect() {
    try {
      // await activateBrowserWallet();
    } catch (ex) {
      console.log(ex);
    }
  }

  async function disconnect() {
    try {
      // deactivate(connector);
    } catch (ex) {
      console.log(ex);
    }
  }

  async function mint() {
    try {
      // mintNFT(1)
    } catch (ex) {
      console.log(ex);
    }
  }

  const handleChange = (event) => {
    setMintCount(event.target.value);
  };


  return (
    <div className="pt-6 pb-16 sm:pb-24">
      <div className="mint-section">
        <div className="mint-box">
          <div className="mint-box-content">
            <h1 className="text-3xl md:text-6xl mx-auto title-shadow  text-black body-title  text-center font-pixel uppercase tracking-tight">
              {/* <span className="text-yellow">MINTING </span>
              <span className=" text-green inline">OPENS </span>
              <span className=" text-red ">VERY </span> */}
              <span className=" text-yellow block">MINTING VERY SOON...</span>
            </h1>
            <ProgressBar />
            <p className="text-lg mint-progress-text">
              Current Mint Price: <b>FREE</b>
            </p>

            <div>
              <div className="mint-box-form">
                {account ? (
                  <>
                    <input
                      className="mint-box-input"
                      type="number"
                      onChange={handleChange}
                      value={mintCount}
                      max="10"
                      min="1"
                    />
                    <button onClick={mint} className="mint-button">
                      Mint
                    </button>
                  </>
                ) : (
                  <button onClick={connect} className="connect-button">
                    Connect
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
