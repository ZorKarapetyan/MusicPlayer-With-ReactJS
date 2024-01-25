import { useEffect, useState } from "react";

import SongRow from "./songRow";
import MusicUpload from "./components/MusicUpload";

import classes from "./global.module.scss";

import Halo from "./songs/Halo.mp3";
import Header from "./components/Header";



const SongList = () => {
  const [searchInp, setsearchInp] = useState("");
  const [queu, setQueu] = useState([])
  const [SongList, setSongList] = useState([
    {
      SongName: "Halo",
      ArtistName: "Blackbird Blackbird",
      Track: +Math.round(Math.random()*100),
      file: Halo,
      isPlaying: false,
    },
    {
      SongName: "Blind",
      ArtistName: "Bbackbird Blackbird",
      Track: +Math.round(Math.random()*100),
      file: Halo,
      isPlaying: false,
    },
  ]);


  useEffect(() => {
    setSongList(prev => prev.map(el => el.SongName === queu[queu.length - 1] ? {...el, isPlaying: true} : {...el, isPlaying: false}))
  }, [queu])


  const handleSearch = (el) => {
    if (searchInp.length > 0) {
      let song = el.SongName;
      let artist = el.ArtistName;
      let track = el.Track;
      if (
        song.toLowerCase().includes(searchInp.toLowerCase()) ||
        artist.toLowerCase().includes(searchInp) ||
        track === +searchInp
      ) {
        return true;
      }
      return false;
    } else if (searchInp.length === 0) {
      return true;
    }
  };

  function addMusic (song) {
    setSongList((prev) => {
      for(let el of prev){
        if(el.file === song){
          return prev
        }
      }
        prev.push(
          {
            SongName: "unknown",
            ArtistName: "unknown",
            Track: +Math.round(Math.random()*100),
            file: song,
            isPlaying: true,
          },)
        return [...prev]
    })
}

  return (
    <div className={classes["Main"]}>
      
      <Header SongList={SongList} setSongList={setSongList} setQueu={setQueu} searchInp={searchInp} setsearchInp={setsearchInp}/>

      <div className={classes["List"]}>
        <div className={classes["first-side"]}>
          <div className={classes["play-pause"]}></div>
          <div className={classes["songName"]}>Song Name</div>
          <div className={classes["artistName"]}>Artist Name</div>
          <div className={classes["track"]}>Track</div>
          <div className={classes["rate"]}></div>
        </div>

        <div className={classes["second-side"]}>
          {SongList.map((el, ind) => {
            return handleSearch(el) ? (
              <SongRow songs={SongList} setSongs={setSongList} ind={ind} setQueu={setQueu}/>
            ) : null
          })}
        </div>
      </div>
      <MusicUpload addMusic = { addMusic }/>
    </div>
  );
};

export default SongList;
