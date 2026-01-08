import { configureStore } from "@reduxjs/toolkit";
import animeSlice from "./feactures/anime/animeSlice";
import { animeApi } from "./feactures/anime/animeApi";

export const store = configureStore({
  reducer: {
    anime: animeSlice.reducer,
    [animeApi.reducerPath]: animeApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(animeApi.middleware),
});

// Infer types for global usage
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
