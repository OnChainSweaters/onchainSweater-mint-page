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
      <div className="top-16 sweaterCarouselWrapper">
        <div className="sweaterCarousel">
          <img src={`/sweater-${currentSweater}.png`} alt="" />
          <div className="sweaterNavigation">
            <a className="arrowLeft" onClick={() =>setCurrentSweaterSafe(currentSweater-1)}></a>
            <a className="arrowRight" onClick={() => setCurrentSweaterSafe(currentSweater+1)}></a>
          </div>
        </div>

      </div>

    </>
  );
}
