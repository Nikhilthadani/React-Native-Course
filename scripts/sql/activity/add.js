import { CREATE_NEW_ACTIVITY_QUERY } from "./queries";

export const addNewActivity = async (db, activity, userId) => {
  try {
    const activityRecord = await db.runAsync(CREATE_NEW_ACTIVITY_QUERY, [
      activity,
      userId,
    ]);
    console.log("Activity Created!", JSON.stringify(activityRecord));
    return activityRecord?.lastInsertRowId;
  } catch (error) {
    console.log("Error in addNewActivity,err=>", error);
    throw error;
  }
};
