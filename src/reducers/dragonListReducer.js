import { ADD_MEMBER, UPDATE_NEW_MEMBER } from "../actions/dragonListActions";

export const initialState = {
  newMember: "",
  members: [
    { name: "Jojo Zhang", dragonStatus: true },
    { name: "Brandon Harris", dragonStatus: false },
  ],
};

const dragonListReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_MEMBER:
      return {
        ...state,
        members: [...state.members, action.payload],
      };
    case UPDATE_NEW_MEMBER:
      return {
        ...state,
        newMember: action.payload,
      };
    default:
      return state;
  }
};

export default dragonListReducer;
