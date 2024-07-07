import { combineReducers, configureStore } from "@reduxjs/toolkit";
import movieListSlice from "./slices/movie-list/movie-list-slice";
import movieDetailsSlice from "./slices/movie-details/movie-details";
import appSlice from "./slices/app-slice/app-slice";

const rootReducer = combineReducers({
    movieListSlice,
    movieDetailsSlice,
    appSlice
});

export const store = configureStore({
    reducer: rootReducer,
});

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

//@ts-ignore
window.store = store