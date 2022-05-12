import React, { useState } from "react";
import HookMouseEffect from "./HookMouseEffect";

function HookMouseContainerEffect() {
  const [display, setDisplay] = useState(true);
  return (
    <div>
      <button onClick={() => setDisplay(!display)}>Toogle Display</button>
      {display && <HookMouseEffect />}
    </div>
  );
}

export default HookMouseContainerEffect;
