// import { createSlice } from '@reduxjs/toolkit';

// interface IFormState {
//   form: object;
// }

// const initialState: IFormState = {
//   form: {},
// };

// const formSlice = createSlice({
//   name: 'form',
//   initialState,
//   reducers: {
//     toggleValid(state, action) {
//       state.form = {
//         [action.payload]: !state.form[action.payload],
//       };
//     },
//     dataValue(state, action) {
//       state.form = {
//         [action.payload]: action.payload,
//         [`${[action.payload]}Valid`]: action.payload === 0,
//       };
//     },
//     // getPaginPosts(state, action) {
//     //   state.paginPosts = state.posts.slice(
//     //     action.payload.firstContentIndex,
//     //     action.payload.lastContentIndex,
//     //   );
//     // },
//   },
// });

// export const { toggleValid, dataValue, dataLength } = formSlice.actions;

// export default formSlice.reducer;
