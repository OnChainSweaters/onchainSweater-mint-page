import {
  ChainId,
  DAppProvider,
  useEtherBalance,
  useEthers,
  Config,
} from "@usedapp/core";
import { formatEther } from "@ethersproject/units";
import "../styles/globals.css";
import React from 'react'

// const config = {
//   readOnlyChainId: 1337,
//   readOnlyUrls: {
//     [1337]:
//       "http://localhost:7545",
//   },
//   multicallAddresses: {
//     1337: "0x18DE294188De5852049bF2091f7817cdf8e68D44", 
// },
// };

function Application({ Component, pageProps }) {
  return (
    <React.StrictMode>
      {/* <DAppProvider config={config}> */}
        <Component {...pageProps} />
      {/* </DAppProvider> */}
    </React.StrictMode>
  );
}

export default Application;
