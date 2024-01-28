import { createSlice } from "@reduxjs/toolkit";
import HistoriesData from "./data.json";
import { getRandomIntWithExceptions } from "./getRandomNumber";

export const historiesDataSlice = createSlice({
 name: "historiesData",
 initialState: {
  allHistories: HistoriesData,
  visibleHistories: JSON.parse(window.localStorage.getItem("MY_HISTORY")),
  selectedId: [],
 },
 reducers: {
  replaceHistory: (state, action) => {

   // I create a variable with the option number.
   let option = action.payload;

   // I check whether the option that is selected is the same as the current one so as not to do the same thing twice.
   if (state.selectedId.length == 1 && option == state.selectedId[0] && option !== 3) {
    return;
   }

   // I check if any option is selected.
   if (!option) {
    alert("choose one option from three");
    return;
   }

   //adds histories to the visibleHistories variable.
   if (option == 1 || option == 2) {
    let selectedHistory = state.allHistories[option - 1].sentence;
    state.visibleHistories = selectedHistory;
    state.selectedId = [
     option
    ]
   } else {
    let random = getRandomIntWithExceptions(3, 10, []);
    state.visibleHistories = state.allHistories[random - 1].sentence;
    state.selectedId = [
     random
    ]
   }
  },
  addHistory: (state, action) => {

   // I create a variable with the option number.
   let option = action.payload;

   // I check if any option is selected.
   if (!option) {
    alert("choose one option from three");
    return;
   }

   //adds histories to the visibleHistories variable.
   if (option == 1 || option == 2) {
    if (state.selectedId.includes(option)) {
     return;
    } else {
     let selectedHistory = state.allHistories[option - 1].sentence;
     if (state.visibleHistories) {
      state.visibleHistories = state.visibleHistories + " " + selectedHistory;
      state.selectedId = [
       ...state.selectedId,
       option
      ]
     } else {
      state.visibleHistories = state.visibleHistories + selectedHistory;
      state.selectedId = [
       ...state.selectedId,
       option
      ]
     }
    }
   } else {
    let random = getRandomIntWithExceptions(3, 10, state.selectedId)
    if (random == null) {
     return;
    }
    if (state.visibleHistories) {
     state.visibleHistories = state.visibleHistories + " " + state.allHistories[random - 1].sentence;
     state.selectedId = [
      ...state.selectedId,
      random
     ]
    } else {
     state.visibleHistories = state.visibleHistories + state.allHistories[random - 1].sentence;
     state.selectedId = [
      ...state.selectedId,
      random
     ]
    }
   }
  },
  clearHistory: (state) => {
   state.visibleHistories = "";
  }
 }
})

export const { replaceHistory, addHistory, getDataFromLocalStorage, clearHistory } = historiesDataSlice.actions;

export const visibleHistory = state => state.historiesData.visibleHistories;

export default historiesDataSlice.reducer;

