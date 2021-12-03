import ProgressBar from "@components/ProgressBar";
import { useState } from "react";

export default function MintBox() {
  const [mintCount, setMintCount] = useState(1);

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

          <div className="mint-box-form">
            <input
              className="mint-box-input"
              type="number"
              onChange={handleChange}
              value={mintCount}
              max="10"
              min="1"
            />
            <button className="mint-button">Mint</button>
          </div>
        </div>
        </div>
      </div>
    </div>
  );
}
