import { ADD_NEW_NOTE, REMOVE_NOTE, EDIT_NOTE } from "../const/index";

const noteReducers = (state = [], action) => {
    console.log("đi vào reducer");
    switch (action.type) {
      case ADD_NEW_NOTE:
        console.log("đi vào add new note");
        const id_Note = new Date().getTime();
        state= [...state, { id: id_Note, content: action.content }];
        console.log("Thêm note:" , state);
        return state;
      case EDIT_NOTE:
        const indexNote = state.findIndex((row) => row.id === action.id);
        if (indexNote !== -1)
          state[indexNote].content = action.content;
        console.log("Chỉnh note: ", state);
        return state;
      case REMOVE_NOTE:
        const idNote = action.id;
        state = state.filter(row => {
          if (row.id === idNote)  return false; else return true
        })
        console.log("Xóa node:", state);
        return state;
      default:
        return state;
    }
  };
  export default noteReducers