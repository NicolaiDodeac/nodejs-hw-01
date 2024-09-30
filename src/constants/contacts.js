import * as path from 'node:path';

//!!! version 1
// export const PATH_DB = path.join(process.cwd(),"src", "db", "db.json");
//!!! version 2
export const PATH_DB = path.resolve('src', 'db', 'db.json');
