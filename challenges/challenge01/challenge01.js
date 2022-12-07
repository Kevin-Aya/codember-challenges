const fs = require('node:fs');

const REQUIRED_FIELD_NAMES = ['usr', 'eme', 'psw', 'age', 'loc', 'fll'];

const data = fs.readFileSync('users.txt', 'utf8');

const users = data
  //create an array with 1 item per user (split on double newline)
  .split('\r\n\r\n')
  .map((rawUser) => rawUser.replaceAll('\r\n', ' ').split(/\s+/))
  .map((userData) =>
    Object.fromEntries(userData.map((user) => user.split(':')))
  );

const validUsers = users.filter((user) =>
  REQUIRED_FIELD_NAMES.every((fieldName) => fieldName in user)
);

console.log({ validUsers });

console.log('====> ', `submit ${validUsers.length}${validUsers.at(-1).usr}`);
