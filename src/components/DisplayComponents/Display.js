import React, {useState} from "react";

const Display = () => {
  const[value, setValue] = useState(0)
  return <div className="display">{value/* Display any props data here */}</div>;
};

export default Display