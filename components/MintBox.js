import ProgressBar from "@components/ProgressBar";
import Banner from "@components/Banner";
import { useState, useEffect } from "react";
import contractAbi from "../contracts/OnChainSweaters.json";
import { Contract } from "@ethersproject/contracts";
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

export default function MintBox() {
  const [mintCount, setMintCount] = useState(1);
  const [account, setAccount] = useState(null);
  const [pendingTx, setPendingTx] = useState(null);
  const [contract, setContract] = useState(null);
  const [w3Client, setW3Client] = useState(null);
  const [provider, setProvider] = useState(null);
  const [wrongNetworkError, setWrongNetworkError] = useState(null);
  const [mintError, setMintError] = useState(null);
  const [totalSupply, setTotalSupply] = useState(null);
  const [freeSupply, setFreeSupply] = useState(null);
  const [saleOpened, setSaleOpened] = useState(false);
  const [maxSupply, setMaxSupply] = useState(3333);
  // const {abi, address} = addressAndAbi(chainId)
  console.log("contract", contract);
  console.log("account", account);
  console.log("provider", provider);
  console.log("totalSupply", totalSupply);
  console.log("free supply", freeSupply);

  const checkTotalSupply = async () => {
    if (contract !== null && w3Client) {
      const result = await contract.methods.getTotalMinted().call({ from: account });
      return parseInt(result);
    }
  };

  const checkSaleOpened = () => {
    if (contract !== null && w3Client) {
      return contract.methods.isPublicSaleOpen().call({ from: account });
    }
  };

  const mintNFT = async (count) => {
    if (contract === null) {
      return null;
    }
    const price = totalSupply >= freeSupply ? 0.02 : 0;
    console.log(price);
    console.log(totalSupply, freeSupply);
    const value = String(count * price);
    try {
      const txData = await contract.methods
        .mintPublicSale(count)
        .send({ from: account, value: Web3.utils.toWei(value) });
      console.log(txData);
      setPendingTx(txData);
    } catch (err) {
      console.log(err);
      setMintError(err.message);
    }
  };

  useEffect(async () => {
    if (contract === null && w3Client) {
      const networkID = await w3Client.eth.net.getId();
      console.log("netowkrID", networkID);
      if (!contractAbi.networks[networkID]) {
        setWrongNetworkError(
          "Please connect to Ethereum Mainnet in order to mint"
        );
        return;
      }
      const NFTContract = new w3Client.eth.Contract(
        contractAbi.abi,
        contractAbi.networks[networkID].address
      );
      const freeSupplyResult =
        await NFTContract.methods.MAX_FREE_MINT_SUPPLY.call({
          from: account,
        }).call();
      console.log(freeSupplyResult)
      setFreeSupply(parseInt(freeSupplyResult));

      const maxSupplyResult = await NFTContract.methods.MAX_SUPPLY.call({
        from: account,
      }).call();
      console.log(maxSupplyResult)
      setMaxSupply(parseInt(maxSupplyResult, 10));

      setContract(NFTContract);
      setTotalSupply(await checkTotalSupply());
    }
  }, [w3Client]);

  useEffect(async () => {
    if (provider === null && window.ethereum) {
      const mmProvider = window.ethereum;
      setProvider(mmProvider);
      setW3Client(new Web3(mmProvider));
      const accounts = await mmProvider.request({
        method: "eth_requestAccounts",
      });
      setAccount(accounts[0]);
      mmProvider.on("accountsChanged", (accounts) => {
        setAccount(accounts[0]);
        setWrongNetworkError(null);
      });
    }
  }, []);

  useEffect(async () => {
    if (contract !== null) {
      const timeout = setInterval(async () => {
        const mintedCount = await checkTotalSupply();
        setTotalSupply(mintedCount);
        console.log("Minted count", mintedCount);
      }, 5000);
      return () => clearInterval(timeout);
    }
  }, [contract]);

  useEffect(async () => {
    if (pendingTx !== null) {
      console.log("SHOULD CHECK FOR TRANSACTIONS STATUS");
      // const timeout = setInterval(async () => {
      //   const mintedCount = await checkTotalSupply();
      //   setTotalSupply(mintedCount);
      //   console.log("Minted count", mintedCount);
      // }, 5000);
      // return () => clearInterval(timeout);
    }
  }, [pendingTx]);

  useEffect(async () => {
    if (contract !== null && saleOpened === false) {
      const timeout = setInterval(async () => {
        const isSaleOpened = await checkSaleOpened();
        if (isSaleOpened !== saleOpened) {
          setSaleOpened(isSaleOpened);
        }
        console.log("sale opened", isSaleOpened);
      }, 5000);
      return () => clearInterval(timeout);
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
      await mintNFT(mintCount);
    } catch (ex) {
      console.log(ex);
    }
  }

  const handleChange = (event) => {
    setMintCount(event.target.value);
  };

  return (
    <div className="pt-6 pb-16 sm:pb-24">
      <Banner test="This is just a test" />
      <div className="mint-section">
        <div className="mint-box">
          <div className="mint-box-content">
            <h1 className="text-3xl md:text-6xl mx-auto title-shadow  text-black body-title  text-center font-pixel uppercase tracking-tight">
              {/* <span className="text-yellow">MINTING </span>
              <span className=" text-green inline">OPENS </span>
              <span className=" text-red ">VERY </span> */}
              {saleOpened ? (
                <span className=" text-yellow block ">Minting is opened!</span>
              ) : (
                <span className=" text-yellow block">MINTING VERY SOON...</span>
              )}
            </h1>
            {pendingTx ? (
              <>
                <p className="text-lg mint-progress-text text-brownText">
                  Bravo! Your transaction is pending.{" "}
                  <a
                    href={`https://etherscan.io/tx/${pendingTx.transactionHash}`}
                  >
                    Check it here.
                  </a>
                </p>
              </>
            ) : (
              <>
                <p className="text-lg mt-4 mb-4 pb-0 text-brownText">
                  Mint is free for the first 300 tokens. Then 0.03Ξ. Max 10 NFTs
                  per wallet.
                </p>
                <ProgressBar
                  currentlySold={totalSupply}
                  maxSupply={maxSupply}
                />
                <p className="text-lg mint-progress-text text-brownText">
                  Current Mint Price:
                  <b>{totalSupply >= freeSupply ? "0.02Ξ" : "FREE"}</b>
                </p>
                {wrongNetworkError ? (
                  <p>{wrongNetworkError}</p>
                ) : (
                  <div>
                    <div className="mint-box-form">
                      {account ? (
                        <>
                          <input
                            className="mint-box-input"
                            type="number"
                            onChange={handleChange}
                            value={mintCount}
                            max={
                              totalSupply > freeSupply
                                ? "10"
                                : Math.max(totalSupply - freeSupply, 10)
                            }
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
                )}
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
