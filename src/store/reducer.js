import data from "../books";
import members from "../members";
import { CREATE_MEMBER } from "./actions";
import { CREATE_BOOK } from "./actions";

const initialState = {
  list: data,
  members: members,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case CREATE_MEMBER:
      const slug = `${action.payload.newMember.firstName.toLowerCase()}-${action.payload.newMember.lastName.toLowerCase()}`;
      action.payload.newMember.slug = slug;
      action.payload.newMember.id =
        state.members[state.members.length - 1].id + 1;
      return {
        ...state,
        members: [...state.members, action.payload.newMember],
      };

    case CREATE_BOOK:
      const slugt = `${action.payload.newBook.title.toLowerCase()}`;
      action.payload.newBook.slug = slugt;
      action.payload.newBook.id = state.list[state.list.length - 1].id + 1;
      return {
        ...state,
        list: [...state.list, action.payload.newBook],
      };
    default:
      return state;
  }
};

export default reducer;
