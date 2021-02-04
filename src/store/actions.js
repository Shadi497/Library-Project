export const CREATE_MEMBER = "CREATE_MEMBER";
export const CREATE_BOOK = "CREATE_BOOK";

export const createMember = (newMember) => {
  return { type: CREATE_MEMBER, payload: { newMember } };
};

export const createBook = (newBook) => {
  return { type: CREATE_BOOK, payload: { newBook } };
};
