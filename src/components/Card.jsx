import { useState, useImperativeHandle } from "react";
import playFlipSoundOnce from "../utils/playFlipSoundOnce";

const Card = ({icon, gridSize, onClick, ref }) => {
  const [flipped, setFlipped] = useState(false);

  let baseClass = gridSize === 4
    ? "text-4xl sm:text-5xl"
    : gridSize === 6
      ? "text-3xl sm:text-4xl"
      : "text-2xl sm:text-3xl";

  baseClass = baseClass +
    " flex items-center justify-center" +
    " absolute inset-0" +
    " border rounded" +
    " backface-hidden";

  useImperativeHandle(ref, () => ({
    flip: () => {
      setFlipped(true);
      playFlipSoundOnce();
    },
    unflip: () => {
      setFlipped(false);
      playFlipSoundOnce();
    },
    get flipped() {
      return flipped;
    },
    get icon() {
      return icon;
    },
  }));
      
  return (
    <div 
      className="w-full h-full cursor-pointer select-none perspective"
      onClick={onClick}
    >
      <div 
        className={`
          relative w-full h-full
          transition-transform duration-500 transform-style preserve-3d
          ${flipped ? "rotate-y-180" : ""}
        `}
      >
        {/* front */}
        <div 
          className={`
              ${baseClass} 
              bg-white/70 backdrop-blur-sm border-rd-teal-300 text-rd-purple-700
            `}
        >
          {/* <img className="h-full w-full object-contain p-2" src="/images/Cat-RD-logo.png" alt="" /> */}
          ?
        </div>
        {/* Back/ icon side */}
        <div 
          className={`
              ${baseClass} 
              bg-rd-teal-300 hover:bg-rd-teal-400 transition-colors duration-300  border-rd-teal-700
              rotate-y-180
            `}
        >
          {icon} 
        </div>
      </div>
    </div>
  );
};

export default Card