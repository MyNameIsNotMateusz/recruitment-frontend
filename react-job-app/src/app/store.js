import { configureStore } from "@reduxjs/toolkit";
import historiesDataReducer from "../features/coreFeature/historiesDataSlice";

export default configureStore({
 reducer: {
  historiesData: historiesDataReducer
 }
})