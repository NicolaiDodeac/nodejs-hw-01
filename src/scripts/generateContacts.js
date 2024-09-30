import { createFakeContact } from '../utils/createFakeContact.js';
import { readContacts } from '../utils/readContacts.js';
import { writeContacts } from '../utils/writeContacts.js';
//!!! version 1
// const generateContacts = async (number) => {
//   const contacts = Array(number)
//     .fill(0)
//     .map(() => createFakeContact());
// };
//!!! version 2
const generateContacts = async (number) => {
  const contactsList = await readContacts();
  const newContacts = Array.from({ length: number }, () => createFakeContact());
  await writeContacts([...contactsList, ...newContacts]);
};

generateContacts(5);
