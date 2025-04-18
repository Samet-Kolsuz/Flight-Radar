import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const api = axios.create({
    baseURL: "https://flight-radar1.p.rapidapi.com/",
    headers: {
        'x-rapidapi-key': '7c979f62c3msh709149f1f04c597p1e1f94jsn8a9bb75092fa',
        'x-rapidapi-host': 'flight-radar1.p.rapidapi.com'
      }
})

export default api;


