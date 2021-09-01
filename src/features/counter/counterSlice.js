import { createSlice } from '@reduxjs/toolkit';


const initialState = {
  data:[],
  menuSelected: '',
  detailsSelected:''
};


export const counterSlice = createSlice({
  name: 'Data',
  initialState,
  // The `reducers` field lets us define reducers and generate associated actions
  reducers: {
    setData: (state, action) => {
      state.data = action.payload;
    },
    menuSelect: (state, action) => {
      state.menuSelected = action.payload;
    },
    // Use the PayloadAction type to declare the contents of `action.payload`
    detailSelect: (state, action) => {
      state.detailsSelected = action.payload;
    },
  },
  // The `extraReducers` field lets the slice handle actions defined elsewhere,
  // including actions generated by createAsyncThunk or in other slices.
 
});

export const {  setData, menuSelect, detailSelect } = counterSlice.actions;

// The function below is called a selector and allows us to select a value from
// the state. Selectors can also be defined inline where they're used instead of
// in the slice file. For example: `useSelector((state: RootState) => state.counter.value)`
export const selectCount = (state) => state.counter.value;

// We can also write thunks by hand, which may contain both sync and async logic.
// Here's an example of conditionally dispatching actions based on current state.


export default counterSlice.reducer;
