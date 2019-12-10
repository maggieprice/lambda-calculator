import React from "react";

const OperatorButton = (bananaButton) => {
  return (
    <>
<button className="button" onClick={()=> bananaButton.clickHandler(bananaButton.buttonName)
   }>
     {bananaButton.buttonName}
     </button>
    </>
  );
};
export default OperatorButton