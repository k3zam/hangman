const Part = ({ part, zIndex, show }) => {
  return (
    <img
      style={{ zIndex, opacity: show ? 1 : 0 }}
      className="absolute object-contain"
      src={`/hangman-parts/${part}.png`}
    />
  );
};
export const Hangman = ({ mistakeCount }) => {
  return (
    <div className="relative w-full max-w-[400px] h-full flex items-center">
      <Part part="platform" zIndex={60} show={mistakeCount >= 1} />
      <Part part="rope" zIndex={50} show={mistakeCount >= 2} />
      <Part part="face-0" zIndex={100} show={mistakeCount >= 3} />
      <Part part="torso" zIndex={90} show={mistakeCount >= 4} />
      <Part part="arms" zIndex={80} show={mistakeCount >= 5} />
      <Part part="legs" zIndex={80} show={mistakeCount >= 6} />
      <Part part="face-1" zIndex={110} show={mistakeCount >= 6} />
    </div>
  );
};
