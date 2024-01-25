import classes from "../global.module.scss";

import Plus from "../img/plus.png";

const AddAll = ({SongList, setQueu}) => {

  function addAll() {
    for(let idx = 0; idx < SongList.length; idx++){
      setQueu(prev => {
        prev.push(SongList[idx].SongName)
        return idx === SongList.length - 1 ? [...prev] : prev
      })
    }
  }

  return (
    <div className={classes["AddAll"]} onClick={addAll}>
      <img alt="plus" src={Plus} width="20px" height="20px" />
      <div>Add All</div>
    </div>
  );
};

export default AddAll;
