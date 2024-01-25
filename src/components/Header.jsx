import {useState} from "react"

import Play from "./PlayAll"
import AddAll from "./AddAll"
import FilterButton from "./FilterButton"
import SearchFilter from "./SearchFilter"

import classes from "../global.module.scss"

const Header = ({SongList, setSongList, setQueu, searchInp, setsearchInp}) => {

    const [filterValue, setFilterValue] = useState("Track Number");
    const [filterIsOpen, setfilterIsOpen] = useState(false);

    return (
        <div className={classes["Menu"]}>
        <div className={classes["Menu_play-add-side"]}>
          <Play songs={SongList} setSongs={setSongList} />
          <AddAll  SongList = {SongList} setQueu={setQueu}/>
        </div>
        <div className={classes["Menu_search-filter-side"]}>
          <FilterButton filterValue={filterValue} setFilterValue={setFilterValue} filterIsOpen={filterIsOpen} setfilterIsOpen={setfilterIsOpen} setSongList={setSongList}/>
          <SearchFilter searchInp={searchInp} setsearchInp={setsearchInp}/>
        </div>
      </div>
    )
}

export default Header