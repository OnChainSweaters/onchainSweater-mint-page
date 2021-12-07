export default function ProgressBar({currentlySold = '?', maxSupply = '3333'}) {

  return (
    <div className="progress-wrap">
      <div className="progress"> 
        <div className="progress__bar" style={{width: '30%'}}></div>
      </div>
      <div className="mint-progress-label">
          <p className="">{currentlySold ? currentlySold : 'N/A'}</p>
          <p className="">{maxSupply}</p>
        </div>  
    </div>
  );
}
