import { createSlice } from "@reduxjs/toolkit";
import { fetchBanner } from "../../services/banner.se";

export const bannerSlice = createSlice({
  name: "banner",
  initialState: {
    status: "idle",
    error: null,
    value: {},
  },
  reducers: {
    addData: (state, action) => {
      state.value = action.payload;
    },
    loading: (state) => {
      state.status = "loading";
    },
    succeeded: (state) => {
      state.status = "succeeded";
    },
    failed: (state) => {
      state.status = "failed";
    },
  },
});

export const { loading, succeeded, failed, addData } = bannerSlice.actions;

export const getBanners = () => async (dispatch) => {
  try {
    dispatch(loading());
    const result = await fetchBanner();
    dispatch(addData(result.data));
    dispatch(succeeded());
  } catch (error) {
    console.log(error);
    alert("err");
  }
};

export default bannerSlice.reducer;
