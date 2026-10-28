const ScoreBoard = ({ moves, matches, total }) => {
  return (
    <div className="mb-4 flex justify-between text-lg text-rd-teal-950">
      <span>Moves: {moves} </span>
      <span>Matches: {matches}/{total} </span>
    </div>
  );
};

export default ScoreBoard