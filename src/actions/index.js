import { ADD_REMINDER, DELETE_REMINDER, CLEAR_REMINDERS } from "../constants";

export const addReminder = (text, dueDates) => {
  const action = {
    type: ADD_REMINDER, //type parameter with a redux const//what kind of action is being performed
    text, //actual load
    dueDates,
  };
  return action;
};
export const deleteReminder = (id) => {
  const action = {
    type: DELETE_REMINDER,
    id,
  };
  console.log("delete action", action);
  return action;
};

export const clearReminders = () => {
  return {
    type: CLEAR_REMINDERS,
  };
};
