// import React from "react";
// import ReactCompareImage from "react-compare-image";

// const VerticalImageComparison = ({ before, after, altBefore, altAfter }) => {
//   return (
//     <div className="w-[90%] max-w-md mx-auto">
//       <ReactCompareImage
//         leftImage={before}
//         rightImage={after}
//         leftImageLabel={altBefore}
//         rightImageLabel={altAfter}
//         vertical
//         sliderLineColor="#fff"
//         handleSize={40}
//       />
//     </div>
//   );
// };

// export default VerticalImageComparison;

import React, { useState } from "react";
import ReactCompareImage from "react-compare-image";
import { useLockBodyScroll } from "./useLockBodyScroll";

const VerticalImageCompare = ({ before, after, altBefore, altAfter }) => {
  const [isDragging, setIsDragging] = useState(false);

  useLockBodyScroll(isDragging);

  return (
    <div
      className="w-[90%] max-w-md mx-auto select-none touch-none rounded-lg overflow-hidden !border-2 !border-secondary"
      onMouseDown={() => setIsDragging(true)}
      onMouseUp={() => setIsDragging(false)}
      onTouchStart={() => setIsDragging(true)}
      onTouchEnd={() => setIsDragging(false)}
    >
      <ReactCompareImage
        leftImage={before}
        rightImage={after}
        leftImageLabel={altBefore}
        rightImageLabel={altAfter}
        vertical={true}
        sliderLineColor="#fff"
        handleSize={40}
      />
    </div>
  );
};

export default VerticalImageCompare;
