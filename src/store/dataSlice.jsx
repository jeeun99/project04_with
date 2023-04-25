import { createSlice } from "@reduxjs/toolkit";
import data from "./data";

let Data = createSlice({
  name: "data",
  initialState: data,
});

export default Data;
