export const TOGGLE_EDITING = "TOGGLE_EDITING";
export const UPDATE_TITLE = "UPDATE_TITLE";
export const UPDATE_NEW_TITLE = "UPDATE_NEW_TTITLE";

export function toggleEditing() {
  return { type: TOGGLE_EDITING };
}

export const updateTitle = (updateTitle) => {
  return { type: UPDATE_TITLE, payload: updateTitle };
};

export const updateNewTitle = (newTitle) => {
  return {
    type: UPDATE_NEW_TITLE,
    payload: newTitle,
  };
};
