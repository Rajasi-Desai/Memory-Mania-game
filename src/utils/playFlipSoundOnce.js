let soundQueue = false;

const playFlipSoundOnce = (audioFile = `${import.meta.env.BASE_URL}sounds/flip.wav`) => {
  if(soundQueue) return;

  soundQueue = true;

  requestAnimationFrame(() => {
    const audio = new Audio(audioFile);
    audio.play();
    soundQueue = false;
  });
}

export default playFlipSoundOnce;