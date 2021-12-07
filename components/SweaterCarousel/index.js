import {useState} from 'react';
export default function SweaterCarousel() {
  const [currentSweater, setCurrentSweater] = useState(1);
  const totalSweaters = 4;
  const setCurrentSweaterSafe = (target) => {
    if (target >= totalSweaters) {
      return setCurrentSweater(1)
    } else if (target == 0) {
      return setCurrentSweater(totalSweaters)
    } else {
      setCurrentSweater(target)
    }
  }
  return (
    <>
      <div className="top-10 md:top-16 sweaterCarouselWrapper">
        <div className="sweaterCarousel">
          <img src={`/animated_peak_2.gif`} alt="" />
          {/* <div className="sweaterNavigation">
            <a  id="wat" className="arrowLeft" onClick={() =>setCurrentSweaterSafe(currentSweater-1)}></a>
            <a className="arrowRight" onClick={() => setCurrentSweaterSafe(currentSweater+1)}></a>
          </div> */}
        </div>

      </div>

    </>
  );
}
