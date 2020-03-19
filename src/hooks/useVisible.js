import { useState } from "react";

export default visible => {
  const [toggle, setToggle] = useState(visible);

  const handleToggle = event => {
    if (!toggle) {
      setToggle(event);
    }
  };

  return [toggle, handleToggle];
};
