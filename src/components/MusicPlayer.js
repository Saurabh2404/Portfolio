import { useRef, useState } from "react";
import { Pause, Play } from "lucide-react";

function formatTime(seconds) {
  if (!Number.isFinite(seconds)) return "0:00";
  return `${Math.floor(seconds / 60)}:${String(Math.floor(seconds % 60)).padStart(2, "0")}`;
}

export default function MusicPlayer() {
  const audioRef = useRef(null);
  const [playing, setPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [error, setError] = useState("");
  const source = process.env.NEXT_PUBLIC_PORTFOLIO_AUDIO_URL;

  async function togglePlayback() {
    const audio = audioRef.current;
    if (!audio) return;
    if (!audio.paused) {
      audio.pause();
      return;
    }
    setError("");
    try {
      await audio.play();
    } catch {
      setError("Audio unavailable. Please try again.");
    }
  }

  return (
    <section className="journey-player music-player" aria-label="Music player">
      <audio
        ref={audioRef}
        src={source || undefined}
        preload="metadata"
        onLoadedMetadata={() => setDuration(audioRef.current.duration)}
        onDurationChange={() => setDuration(audioRef.current.duration)}
        onTimeUpdate={() => setCurrentTime(audioRef.current.currentTime)}
        onPlay={() => setPlaying(true)}
        onPause={() => setPlaying(false)}
        onEnded={() => setPlaying(false)}
        onError={() => { setPlaying(false); setError("Audio unavailable. Please try again."); }}
      />
      <span className={`record ${playing ? "record-playing" : ""}`} aria-hidden="true"><span /></span>
      <div className="music-controls">
        <span className="music-title">A little music</span>
        <input
          className="music-seek"
          type="range"
          min="0"
          max={Number.isFinite(duration) && duration > 0 ? duration : 0}
          step="0.1"
          value={currentTime}
          disabled={!source || !Number.isFinite(duration) || duration <= 0}
          aria-label="Seek audio"
          aria-valuetext={`${formatTime(currentTime)} of ${formatTime(duration)}`}
          style={{ "--progress": `${duration > 0 ? currentTime / duration * 100 : 0}%` }}
          onChange={(event) => {
            const time = Number(event.target.value);
            audioRef.current.currentTime = time;
            setCurrentTime(time);
          }}
        />
        <div className="music-times"><span>{formatTime(currentTime)}</span><span>{formatTime(duration)}</span></div>
        <button
          className="music-play"
          type="button"
          onClick={togglePlayback}
          disabled={!source}
          aria-label={playing ? "Pause music" : "Play music"}
          title={!source ? "Audio track not added yet" : playing ? "Pause music" : "Play music"}
        >
          {playing ? <Pause size={19} fill="currentColor" /> : <Play size={19} fill="currentColor" />}
        </button>
      </div>
      <span className={`record ${playing ? "record-playing" : ""}`} aria-hidden="true"><span /></span>
      {error && <p className="music-error" role="status">{error}</p>}
    </section>
  );
}
