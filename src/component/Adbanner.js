import React, { useEffect, useState } from "react";
const Addbanner = () => {
  const publisherId = process.env.REACT_APP_GOOGLE_ADS_PUBLISHER_ID;
  const adSlot = process.env.REACT_APP_AD_SLOT;

  // useEffect(() => {
  //   document.addEventListener("DOMContentLoaded", () => {
  //     (window.adsbygoogle = window.adsbygoogle || []).push({});
  //     setScriptLoaded(true);
  //   });
  // }, []);

  const [scriptLoaded, setScriptLoaded] = useState(false);

  return (
    <>
      <div
        className="d-flex justify-content-center align-items-center content-wrapper ml-2"
        style={{ background: "#bfbfbf", borderRadius: "5px" }}
      >
        <div className="d-block text-dark text-center">
          {scriptLoaded ? (
            <ins className="adsbygoogle"
            style={{display:"block"}}
            data-ad-format="fluid"
            data-ad-layout-key="-ef+6k-30-ac+ty"
            data-ad-client="ca-pub-5145501464399379"
            data-ad-slot="9986375150"></ins>
          ) : (
            <></>
          )}
        </div>
      </div>
    </>
  );
};

export default Addbanner;
