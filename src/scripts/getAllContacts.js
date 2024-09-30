import { readContacts } from '../utils/readContacts.js';

export const getAllContacts = async () => (await readContacts()).length;

console.log(await getAllContacts());
