import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { IPost } from "../Posts/types";

export const fetchPostsCount = createAsyncThunk(
    'post/fetchPostsCount',
    async () => {
      let { data } = await axios.get<IPost[]>(`https://jsonplaceholder.typicode.com/posts`);
      return data.length / 10;;
    },
  );
