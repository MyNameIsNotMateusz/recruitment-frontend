import { configureStore } from "@reduxjs/toolkit";
import sentencesReducer from "../features/coreFeature/sentencesSlice";

export default configureStore({
 reducer: {
  sentences: sentencesReducer,
 }
})