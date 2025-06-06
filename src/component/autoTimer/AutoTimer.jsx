import { useEffect, useState } from "react";
import "../../style/autoTimer/autoTimer.css";

function AutoTimer() {
  const [isStart, setIsStart] = useState(true);
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    if (!isStart) return;

    const timer = setInterval(() => {
      setSeconds((prev) => prev + 1);
    }, 1000);

    return () => clearInterval(timer);
  }, [isStart]);

  const handleToggleTimer = () => {
    setIsStart((prev) => !prev);
  };

  const handleClearTimer = () => {
    setSeconds(0);
    setIsStart(true);
  };

  const minutes = Math.floor(seconds / 60);
  const remainingSeconds = seconds % 60;

  return (
    <div className="conteinerAutoTimer">
      <div className="textItems">
        <h3>Auto Timer</h3>
        <p>
          {seconds >= 60 ? `${minutes} хв : ` : ""}
          {`${remainingSeconds < 10 ? `0${remainingSeconds}` : remainingSeconds}
          сек`}
        </p>
      </div>

      <div className="btnItems">
        <button
          type="button"
          onClick={handleToggleTimer}
          className={isStart ? "btnPause" : "btnStart"}
        >
          {isStart ? "Пауза" : "Продовжити"}
        </button>
        <button type="button" onClick={handleClearTimer} className="btnClear">
          Скинути
        </button>
      </div>
    </div>
  );
}

export default AutoTimer;
