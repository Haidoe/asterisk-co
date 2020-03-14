import { useState } from "react";

export default init => {
  const [toggle, setToggle] = useState(init);
  const handleToggle = () => setToggle(!toggle);
  return [toggle, handleToggle];
};
