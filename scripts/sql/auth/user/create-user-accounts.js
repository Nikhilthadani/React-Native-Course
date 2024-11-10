import * as Contacts from "expo-contacts";
import { getFormattedPhoneNumber } from "../../../utils/helper";
import { GET_USER_BY_PHONE } from "./queries";
import { createUser } from ".";
import Connection from "../../connection";

const isUserAlreadyExistsInDatabase = async (phone) => {
  try {
    const db = await Connection.getConnection();
    const result = await db.getFirstAsync(GET_USER_BY_PHONE, phone);
    console.log("isUserAlreadyExistsInDatabase", result);
    return result;
  } catch (error) {
    console.log("Error while isUserAlreadyExistsInDatabase: ", error);
    throw error;
  }
};

const getContactDetailsById = async (id) => {
  try {
    const contact = await Contacts.getContactByIdAsync(id, [
      Contacts.Fields.PhoneNumbers,
      Contacts.Fields.Name,
    ]);

    // contact
    if ((!contact && !contact.name) || contact.phoneNumbers.length < 0) {
      return null;
    }
    console.log(contact);

    return {
      name: contact.name,
      phone: getFormattedPhoneNumber(contact.phoneNumbers[0].number),
    };
  } catch (error) {
    console.log(
      "Error while getting contact from getContactDetailsById: ",
      error
    );
    throw error;
  }
};

export const registerUsersUnOffical = async (contactIds) => {
  let userIds = []; // real user ids which are present in db
  for (const contactId of contactIds) {
    const contact = await getContactDetailsById(contactId);
    if (!contact) {
      return;
    }

    let user = await isUserAlreadyExistsInDatabase(contact.phone);
    console.log("USER>>>", user);

    if (user) {
      console.log("User already exists");
    } else {
      user = await createUser(
        contact.name,
        null,
        contact.phone,
        contact.phone,
        0
      );
      console.log("User created: ", user.id);
    }

    userIds.push(user.id);
  }

  return userIds;
};
