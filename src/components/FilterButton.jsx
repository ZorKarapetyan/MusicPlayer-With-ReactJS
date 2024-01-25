import {useEffect} from "react"

import classes from "../global.module.scss"

import arrowUp from "../img/arrowup.png"
import arrowDown from "../img/arrowdown.png"
import arrowUpDown from "../img/arrowupdown.png"

const FilterButton = ({filterValue, setFilterValue, filterIsOpen, setfilterIsOpen, setSongList}) => {

    useEffect(() => {
        if (filterValue === "Song Name") {
          setSongList(prev => {
           const arr =  prev.sort((a,b) => a.SongName.localeCompare(b.SongName))
           return [...arr]
          })
        } else if (filterValue === "Artist Name") {
          setSongList(prev => {
            const arr =  prev.sort((a,b) => a.ArtistName.localeCompare(b.ArtistName))
            return [...arr]
           })
        } else if (filterValue === "Track Number") {
          setSongList(prev => {
            const arr =  prev.sort((a,b) => a.Track - b.Track)
            return [...arr]
          });
        }
      }, [filterValue])

return (
    <div style={{position: "relative"}}>
            <div
                onClick={() => setfilterIsOpen(prev => !prev)}
              className={classes["Menu_search-filter-side_filter-button"]}
            >
              <img src={arrowUpDown} alt="arrowUpDown" width="20px" height="20px" />
              <div
              >{filterValue}</div>
              {filterIsOpen ? (
                <img src={arrowUp} alt="arrowUp" width="20px" height="20px" />
              ) : (
                <img src={arrowDown} alt="arrowDown" width="20px" height="20px" />
              )}
            </div>

            {filterIsOpen ? (
              <div className={classes["filter_dropDown"]}>
                <div
                  onClick={(event) => {
                    setFilterValue(event.target.textContent);
                    setfilterIsOpen(false);
                  }}
                >
                  Track Number
                </div>
                <div
                  onClick={(event) => {
                    setFilterValue(event.target.textContent);
                    setfilterIsOpen(false);
                  }}
                >
                  Song Name
                </div>
                <div
                  onClick={(event) => {
                    setFilterValue(event.target.textContent);
                    setfilterIsOpen(false);

                  }}
                >
                  Artist Name
                </div>
              </div>
            ) : null}
          </div>
      )

}

export default FilterButton