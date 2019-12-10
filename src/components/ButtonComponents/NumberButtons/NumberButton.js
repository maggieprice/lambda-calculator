import React from "react";

const NumberButton = (bananaButton) => {
  return (
    <>
      <button className="button" onClick={()=> bananaButton.clickHandler(bananaButton.buttonName)
   }>
     {bananaButton.buttonName}
     </button>
    </>
  );
};
export default NumberButton