import { useState } from "react";

export default init => {
  const [state, setState] = useState(init);
  const handleOnChange = (event, newValue) => setState(newValue);
  const reset = () => setState(init);
  return [state, handleOnChange, reset];
};
