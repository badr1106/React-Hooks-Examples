import React, { useEffect, useState } from "react";

function HookIntervalCounter() {
  const [count, setCount] = useState(0);

  const tick = () => {
    setCount(count + 1);
    // setCount((prevCount) => prevCount + 1);
  };

  useEffect(() => {
    const interval = setInterval(tick, 1000);

    return () => {
      clearInterval(interval);
    };
  }, [count]);

  return <div>Hook Count : {count}</div>;
}

export default HookIntervalCounter;
