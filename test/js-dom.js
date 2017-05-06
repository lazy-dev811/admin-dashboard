const { JSDOM } = require('jsdom');

const jsdom = new JSDOM('');
const exposedProperties = ['window', 'navigator', 'document'];

global.document = jsdom.window.document;
global.window = document.defaultView;
Object.keys(document.defaultView).forEach((property) => {
  if (typeof global[property] === 'undefined') {
    exposedProperties.push(property);
    global[property] = document.defaultView[property];
  }
});

global.navigator = {
  userAgent: 'node.js',
};
