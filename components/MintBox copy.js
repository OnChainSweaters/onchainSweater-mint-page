import ProgressBar from "@components/ProgressBar";
import { useState, useEffect } from "react";
import web3Connector from "./web3Connection";
import contractAbi from "../contracts/OnChainSweaters.json";
import { Contract } from '@ethersproject/contracts'
import { ethers, utils } from "ethers";
import web3 from 'web3';

import {
  BigNumber,
  BigNumberish
} from '@ethersproject/bignumber'
import { useEthers, useEtherBalance, useContractFunction, useSendTransaction, useContractCall} from "@usedapp/core";

const addressAndAbi = (networkID) => {
  if (networkID) {
    return {abi: contractAbi.abi, address: contractAbi.networks[networkID].address}
  }
  return {}
}

const makeContract = (networkID) => {
  const {address, abi} = addressAndAbi(networkID)
  if (address) {
    return new Contract(address, abi)
  }
}


function useTotalSupply(
  address,
  abi
) {
  const [totalSupply] =
    useContractCall(
      address && {
          abi,
          method: "getTotalMinted", // Method to be called
          address,
          args: [], // Method arguments - address to be checked for balance
        }
    ) ?? [];
  return totalSupply;
}


export default function MintBox() {
  const [mintCount, setMintCount] = useState(1);
  const { activateBrowserWallet, account, deactivate, chainId, library} = useEthers();
  // const [networkID, setNetworkID] = useState(null);
  const {abi, address} = addressAndAbi(chainId)
  const contract = makeContract(chainId)
  const { state: mintState, send: sendMint } = useContractFunction(contract, 'mintPublicSale', { transactionName: 'Mint' })
  // const { state: mintTotalState, send:sendTotalMinted } = useContractFunction(contract, 'getTotalMinted', { transactionName: 'getTotal' })
  console.log(address, abi)
  const totalSupply = useContractCall({
        abi,
        method: "getTotaddlMinted",
        address,
        args: [],
      }
  )
  // const totalSupply = useTotalSupply(address, abi);
  // const totalSupply = "test"

  console.log('totalSupply', totalSupply)

  const mintNFT = (count) => {
    console.log('minting')
    sendMint( BigNumber.from(count))
  }

  const getTotalMinted = () => {
    sendTotalMinted()
  }


  useEffect(async() => {
      console.log('totalSupply', totalSupply)
  }, [totalSupply])



  async function connect() {
    try {
      await activateBrowserWallet();
    } catch (ex) {
      console.log(ex);
    }
  }

  async function disconnect() {
    try {
      deactivate(connector);
    } catch (ex) {
      console.log(ex);
    }
  }

  async function mint() {
    try {
      // console.log(contractAbi);
      // const price = 0;

      // const mintNow = (count) => {
      //   return send({ value:  BigNumber.from(count)})
      // }
      // // console.log(BigNumber.from(3))
      // const totalSupply = await contract.getTotalMinted();
      // console.log(totalSupply);
      // await contract.getTotalMinted();
      // console.log(getTotalMinted)
      // const tx = await mintNow(1)
      mintNFT(1)
    } catch (ex) {
      console.log(ex);
    }
  }

  const handleChange = (event) => {
    setMintCount(event.target.value);
  };

  // useEffect(async () => {
  //   if (connector) {

  //     connector.handleAccountChange(console.log)
  //   }
  // }, [connector]);

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
                { account ? (
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
