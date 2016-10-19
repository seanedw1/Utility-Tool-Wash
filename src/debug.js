// Colors Modules to
const colors = require('colors');

const date = new Date();

exports.debugWash = (title, obj, status) => {
  if (process.env.DEBUG) {
    // if console error
    if (status === 'error') {
      console.log(date.inverse, title.bgYellow, obj);
    // if console warn
    } else if (status === 'warn') {
      console.log(date.inverse, title.bgYellow, obj);
    // if console log or undefined
    } else {
      console.log(date.inverse, title.bgYellow, obj);
    // closes if statement
    }
  }
};
