import { useState } from "react";

import classes from "../global.module.scss";

import arrowDown from "../img/arrowdown.png";
import arrowUp from "../img/arrowup.png";
import play from "../img/play.jpg";

const Play = ({ songs, setSongs }) => {
  const [isOpen, setIsOpen] = useState(false);

  const PlayBoo = () => {
    songs.map((el) => {
      return el.isPlaying = true;
    });
    setSongs([...songs]);
  };

  const dropDown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div style = {{
      position: 'relative'
    }}>
      <div className={classes["playAll"]}>
        <div className={classes["playAll_button"]} onClick={PlayBoo}>
          <img src={play} alt="Play" width="20px" height="20px" />
          <div>Play All</div>
        </div>
        <div className={classes["playAll_button_arrow"]}>
          {isOpen ? (
            <img src={arrowUp} alt="arrowUp" width="15px" height="15px" onClick={dropDown} />
          ) : (
            <img
              src={arrowDown}
              alt="arrowDown"
              width="15px"
              height="15px"
              onClick={dropDown}
            />
          )}
        </div>
      </div>
      <div className={classes["playAll_dropDown"]}>
        {isOpen
          ? songs.map((el) => {
              return (
                <div
                  onClick={() => {
                    el.isPlaying = true;
                    setSongs([...songs]);
                  }}
                >
                  {el.SongName}
                </div>
              );
            })
          : null}
      </div>
    </div>
  );
};

export default Play;
