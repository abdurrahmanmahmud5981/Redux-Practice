import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { likeVideo } from "./likeAPI";

export const fetchLikes = createAsyncThunk('/video/fetchLikes', async (id)=>{
    const likes = await likeVideo(id)
    return likes;
})
const likesSlice = createSlice({
    name: 'likes',
    initialState: {
        likes: 0,
        loading: false,
        error: null,
    },
    extraReducers: (builder) => {
        builder
            // eslint-disable-next-line no-unused-vars
            .addCase(fetchLikes.pending, (state, action) => {
                state.loading = true;
            })
            .addCase(fetchLikes.fulfilled, (state, action) => {
                state.likes = action.payload;
                state.loading = false;
                state.error = null;
            })
            .addCase(fetchLikes.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message;
            });
    }
})

export default likesSlice.reducer;