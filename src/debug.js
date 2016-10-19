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
