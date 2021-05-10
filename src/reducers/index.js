import { ADD_REMINDER, DELETE_REMINDER, CLEAR_REMINDERS } from "../constants";
import { bake_cookie, read_cookie } from "sfcookies";

const reminder = (action) => {
  let { text, dueDates } = action; //taking text and dueDates from action
  return {
    id: Math.random(),
    text,
    dueDates,
  };
};
const removeById = (state = [], id) => {
  const reminders = state.filter((reminder) => reminder.id !== id);
  return reminders;
};

const reminders = (state = [], action) => {
  let reminders = null; //leter we change to become a returned state
  state = read_cookie("reminders");
  switch (action.type) {
    case ADD_REMINDER:
      reminders = [...state, reminder(action)]; // add new based on reminder helper function
      bake_cookie("reminders", reminders);
      return reminders;
    case DELETE_REMINDER:
      reminders = removeById(state, action.id);
      bake_cookie("reminders", reminders);
      return reminders;
    case CLEAR_REMINDERS:
      reminders = [];
      bake_cookie("reminders", reminders);
      return reminders;
    default:
      return state;
  }
};

export default reminders;
