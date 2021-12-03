export default function ProgressBar({currentlySold}) {
  const totalSupply = 3333;


  return (
    <div className="progress-wrap">
      <div className="progress"> 
        <div className="progress__bar" style={{width: '30%'}}></div>
      </div>
      <div className="mint-progress-label">
          <p className="">33</p>
          <p className="">3333</p>
        </div>  
    </div>
  );
}
