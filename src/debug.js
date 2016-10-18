const fs = require('fs');
// Color Modules to Get Colors in Terminal for Console Data
const colors = require('colors');

// Debug Module, if DEBUG=true nodemon src/server.js console.log will be ON
exports.debugWash = (date, msg, obj) => {
  if (process.env.DEBUG) {
    // Console logging data
    console.log(date.inverse, msg.bgYellow, obj);
  );
  }
};
