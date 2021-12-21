/** @format */

import React, { useState } from "react";

function useFlip(initialState = true) {
  const [state, setState] = useState(initialState);
  const flip = () => {
    setState((state) => !state);
  };
  return [state, flip];
}

export default useFlip;
