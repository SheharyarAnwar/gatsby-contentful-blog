import {
  createSlice,
  PayloadAction,
  createAsyncThunk,
  AnyAction,
} from "@reduxjs/toolkit";
import { AuthParams, UserState } from "./index.interface";
import { firebase, auth } from "../../Config/firebaseConfig";
import {
  isFulfilledAction,
  isPendingAction,
  isRejectedAction,
} from "../helper";
const initialState: UserState = {
  loading: false,
  error: null,
  user: null,
};
const authenticateUser = createAsyncThunk(
  "root/authenticatedUser",
  async ({ email, password }: AuthParams, { rejectWithValue }) => {
    try {
      const response = await auth.signInWithEmailAndPassword(email, password);
      console.log(response);
      return response.user.toJSON();
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
const createUser = createAsyncThunk(
  "root/createUser",
  async ({ email, password }: AuthParams, { rejectWithValue }) => {
    try {
      const response = await auth.createUserWithEmailAndPassword(
        email,
        password
      );
      return response.user.toJSON();
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

const logoutUser = createAsyncThunk(
  "root/logoutUser",
  async (x: undefined, { rejectWithValue }) => {
    try {
      const response = auth.signOut();
      return response;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

const slice = createSlice({
  name: "root",
  initialState: initialState,
  reducers: {
    setUser: (state, action) => {
      state.user = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(createUser.fulfilled, (state, action) => {
        state.user = action.payload;
      })
      .addCase(logoutUser.fulfilled, (state, action) => {
        state.user = null;
      })
      .addCase(authenticateUser.fulfilled, (state, action) => {
        state.user = action.payload;
      })
      .addMatcher(isPendingAction("root/"), (state) => {
        state.loading = true;
        state.error = "";
      })
      .addMatcher(isRejectedAction("root/"), (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addMatcher(isFulfilledAction("root/"), (state) => {
        state.loading = false;
        state.error = "";
      });
  },
});
const { setUser } = slice.actions;
export { setUser, createUser, logoutUser, authenticateUser };
export default slice.reducer;
