// Colors Modules to
const colors = require('colors');

const date = new Date();

exports.debugWash = (title, obj, status) => {
  if (process.env.DEBUG) {
    // if console error
    if (status === 'error') {
      console.log(colors.inverse(date), colors.red(title), obj);
    // if console warn
    } else if (status === 'warn') {
      console.log(colors.inverse(date), colors.yellow(title), obj);
    // if console log or undefined
    } else {
      console.log(colors.inverse(date), colors.green(title), obj);
    // closes if statement
    }
  }
};


// bump method takes two params version to be bumped and type of update
exports.bump = (version, updateType) => {
  // split([separator[, limit]]) method splits a String object into an array of strings
  const spliter = version.split('.');

  // parseInt(string, radix); - parses a string argument and returns an integer
  const major = parseInt(spliter[0], 10);
  const minor = parseInt(spliter[1], 10);
  const patch = parseInt(spliter[2], 10);

  // switch statement for kind of version bump
  switch (updateType) {
    // if major changes
    case major:
      spliter[0]++;
      spliter[1] = 0;
      spliter[2] = 0;
      console.log(spliter[0] + '.' + spliter[1] + '.' + spliter[2]);
      break;
    // if minor changes
    case minor:
      spliter[1]++;
      spliter[2] = 0;
      console.log(spliter[0] + '.' + spliter[1] + '.' + spliter[2]);
      break;
    // if hotfix
    case patch:
      spliter[2]++;
      console.log(spliter[0] + '.' + spliter[1] + '.' + spliter[2]);
      break;
    default: break;
  }
};
