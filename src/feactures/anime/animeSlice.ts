import { createSlice } from "@reduxjs/toolkit";

interface AnimeState {
  search: string;
}

const initialState: AnimeState = {
  search: "",
};

const animeSlice = createSlice({
  name: "anime",
  initialState,
  reducers: {
    setSearch(state, action) {
      state.search = action.payload;
    },
  },
});

export const { setSearch } = animeSlice.actions;
export default animeSlice;
