import { createSlice } from "@reduxjs/toolkit";
import { getRandomIntWithExceptions } from "./getRandomNumber";
import data from "../coreFeature/data.json";

//This bool variable is intended to prevent the showWarning function from running if it is already running.
let isTestRunning = false;

//function to display a one second warning. The function is displayed if none of the three available options is selected.
const showWarning = () => {
 if (isTestRunning) return;

 isTestRunning = true;

 const warning = document.querySelector(".warning-container");

 warning.classList.add("active");

 setTimeout(() => {
  warning.classList.remove("active");
  isTestRunning = false;
 }, 1500);
}

export const sentencesSlice = createSlice({
 name: "sentences",
 initialState: {
  allSentences: data,
  displayedSentences: JSON.parse(window.localStorage.getItem("MY_SENTENCES")),
  selectedId: [],
 },
 reducers: {
  replaceSentence: (state, action) => {

   //I create variable with the option number.
   let option = action.payload;

   // I check whether the option that is selected is the same as the current one so as not to do the same thing twice.
   if (state.selectedId.length == 1 && option == state.selectedId[0] && option !== 3) {
    return;
   }

   // I check if any option is selected.
   if (!option) {
    showWarning();
    return;
   }

   //Adds history to the displayedSentences array.
   if (option == 1 || option == 2) {
    let selectedSentence = state.allSentences[option - 1].sentence;
    state.displayedSentences = [
     selectedSentence
    ]
    state.selectedId = [
     option
    ]
   } else {
    let random = getRandomIntWithExceptions(3, 10, []);
    state.displayedSentences = [
     state.allSentences[random - 1].sentence
    ]
    state.selectedId = [
     random
    ]
   }
  },
  addSentence: (state, action) => {

   // I create a variable with the option number.
   let option = action.payload;

   // I check if any option is selected.
   if (!option) {
    showWarning();
    return;
   }

   //Adds history to the displayedSentences array.
   if(option == 1 || option == 2) {
    if(state.selectedId.includes(option)) {
     return;
    } else {
     let selectedSentence = state.allSentences[option - 1].sentence;
     state.displayedSentences = [
      ...state.displayedSentences,
      selectedSentence
     ]
     state.selectedId = [
      ...state.selectedId,
      option
     ]
    }
   } else {
    let random = getRandomIntWithExceptions(3, 10, state.selectedId);
    if (random == null) {
     return;
    } 
    state.displayedSentences = [
     ...state.displayedSentences,
     state.allSentences[random - 1].sentence
    ]
    state.selectedId = [
     ...state.selectedId,
     random
    ]
   }

   //sorting the array alphabetically
   state.displayedSentences.sort();
  },
  clearSentences: (state, action) => {
   state.displayedSentences = [];
   state.selectedId = [];
  }
 }
});

export const { replaceSentence, addSentence, clearSentences } = sentencesSlice.actions;

export const selectedSentences = state => state.sentences.displayedSentences;

export default sentencesSlice.reducer;