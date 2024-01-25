import { useEffect, useRef, useState } from "react";

import Play from "./img/play.jpg";
import Pause from "./img/pause.png";
import Heart from "./img/heart.png";
import Right from "./img/right.png";
import Share from "./img/share.jpg";
import arrowDown from "./img/arrowdown.png";
import dots from "./img/dots.png"

import classes from "./global.module.scss";

const SongRow = ({ songs, ind, setSongs, setQueu }) => {
  const audioRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(songs[ind].isPlaying);

  useEffect(() => {
    const audio = audioRef.current;
    if (audio) {
      const handleAudioEnd = () => {
        setIsPlaying(false);

        songs[ind].isPlaying = false;
        console.log("Music finished");
        setQueu((prev) => {
          prev.pop();
          return [...prev];
        });
      };

      audio.addEventListener("ended", handleAudioEnd);

      return () => {
        audio.removeEventListener("ended", handleAudioEnd);
      };
    }
  }, []);

  useEffect(() => {
    setIsPlaying(songs[ind].isPlaying);
    if (songs[ind].isPlaying) {
      audioRef.current.play();
    } else {
      audioRef.current.pause();
    }
  }, [ind, songs]);

  const play = () => {
    audioRef.current.play();
    setIsPlaying(true);
    setSongs((data) => {
      songs[ind].isPlaying = true;
      return [...data];
    });
  };

  const pause = () => {
    audioRef.current.pause();
    setIsPlaying(false);
    setSongs((data) => {
      songs[ind].isPlaying = false;
      return [...data];
    });
  };

  return (
    <div className={classes["song-row"]}>
      <div className={classes["play-pause"]}>
        <img src={dots} alt="dots" width="15px" height="15px"/>
        {isPlaying ? (
          <img src={Pause} alt="Pause" width="40px" height="20px" onClick={pause} />
        ) : (
          <img src={Play} alt="Play" width="40px" height="20px" onClick={play} />
        )}
      </div>
      <div className={classes["songName"]}>{songs[ind].SongName}</div>
      <div className={classes["artistName"]}>{songs[ind].ArtistName}</div>
      <div className={classes["track"]}>{songs[ind].Track}</div>
      <div className={classes["rate"]}>
        <div style={{
          display: "flex", gap: "4px"
        }}>
          <img src={Heart} alt="Heart" width="20px" height="20px" />
          <img src={Right} alt="Right" width="20px" height="20px" />
        </div>
        <div style={{
          display: "flex", gap: "4px"
        }}>
          <img src={Share} alt="Share" width="20px" height="20px" />
          <img src={arrowDown} alt="arrowDown" width="20px" height="20px" />
        </div>
      </div>
      <audio src={songs[ind].file} ref={audioRef} />
    </div>
  );
};

export default SongRow;
