const Graffiti = () => {
  return (
    <div className="fixed inset-0 flex items-center justify-center z-50 pointer-events-none">
      <div className="text-6xl sm:text-8xl font-black bg-clip-text text-transparent bg-linear-to-r from-pink-300 via-rd-purple-300 to-rd-purple-700 drop-show-lg shadow-black animate-bounce">
        You Win!
      </div>
    </div>
  );
};

export default Graffiti