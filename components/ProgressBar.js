function isNumber(n) { return !isNaN(parseFloat(n)) && !isNaN(n - 0) }

export default function ProgressBar({currentlySold = '?', maxSupply = '3333'}) {
  const percent = currentlySold > 0 ? (currentlySold /maxSupply) * 100 : 0;
  return (
    <div className="progress-wrap">
      <div className="progress"> 
        <div className="progress__bar" style={{width: `${percent}%`}}></div>
      </div>
      <div className="mint-progress-label">
          <p className="">{isNumber(currentlySold) ? currentlySold : 'N/A'}</p>
          <p className="">{maxSupply}</p>
        </div>  
    </div>
  );
}
