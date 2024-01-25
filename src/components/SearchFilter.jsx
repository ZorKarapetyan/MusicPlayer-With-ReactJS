import classes from "../global.module.scss"

import searchIcon from "../img/search.png"

const SearchFilter = ({searchInp, setsearchInp}) => {

  return(
    <div className={classes["Menu_search-filter-side_Search"]}>
        <img
          className={classes["Menu_search-filter-side_Search_icon"]}
          src={searchIcon}
          alt="searchIcon"
          width="30px"
          height="30px"
        />
        <input
          value={searchInp}
          onChange={(event) => {
            setsearchInp(event.target.value);
          }}
          placeholder="Filter"
        />
      </div>
)
}

export default SearchFilter