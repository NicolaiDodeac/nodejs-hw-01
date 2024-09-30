import { readContacts } from '../utils/readContacts.js';
import { writeContacts } from '../utils/writeContacts.js';

export const removeLastContact = async () => {
  const songList = await readContacts();
  songList.pop();
  await writeContacts(songList);
};
removeLastContact();
