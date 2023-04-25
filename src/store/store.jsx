import { configureStore } from "@reduxjs/toolkit";
import Data from "./dataSlice";

export default configureStore({
  reducer: {
    data: Data.reducer,
  },
});
