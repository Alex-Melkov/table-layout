import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { IPost } from "./types";

export const fetchPosts = createAsyncThunk(
    'post/fetchPostsStatus',
    async ( page: number ) => {
      let { data } = await axios.get<IPost[]>(`https://jsonplaceholder.typicode.com/posts?userId=${page}`);
      return data as IPost[];
    },
  );
