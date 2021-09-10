import { combinedReducers, combineReducers } from "redux";

const songsReducer = () => {
    return [
      { title: "All along the watchtower", duration: "4:34" },
      { title: "Texas flood", duration: "9:16" },
      { title: "Comfortably numb", duration: "6:09" },
      { title: "Shape of you", duration: "3:18" },
    ];
};

const selectedSongReducer = (selectedSong = null, action) => {
  if (action.type === "SONG_SELECTED") {
    return action.payload;
  }

  return selectedSong;
};

export default combineReducers({
    songs: songsReducer,
    selectedSong: selectedSongReducer
});