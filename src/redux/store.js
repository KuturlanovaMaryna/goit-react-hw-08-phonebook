import { configureStore } from "@reduxjs/toolkit";
import { contactsReducer } from "./phone.reduser";

export const store = configureStore( {
  reducer: {
    contacts: contactsReducer,

  },
});

