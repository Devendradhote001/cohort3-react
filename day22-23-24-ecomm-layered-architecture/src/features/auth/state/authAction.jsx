import { createAsyncThunk } from "@reduxjs/toolkit";
import { api } from "../../../config/api";
import { toast } from "react-toastify";

export const loginUserAction = createAsyncThunk(
  "auth/login",
  async (credentials, thunkApi) => {
    try {
      console.log("thunk action triggered..");
      let res = await api.post("/auth/login", credentials);
      toast.success("user logged in");
      localStorage.setItem("accessToken", res.data.accessToken);
      return res.data;
    } catch (error) {
      toast.error("login failed");
      return thunkApi.rejectWithValue("login failed");
    }
  }
);

export const hydrateUserAction = createAsyncThunk(
  "/auth/hydrate",
  async (_, thunkApi) => {
    let token = localStorage.getItem("accessToken");

    try {
      let res = await api.get("/auth/me", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      return res.data;
    } catch (error) {
      toast.error("Unauthorized user");
      return thunkApi.rejectWithValue("Unauthorized user");
    }
  }
);
